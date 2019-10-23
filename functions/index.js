const functions = require('firebase-functions'),
    fs = require('fs'),
    next = require('next'),
    express = require('express'),
    cors = require('cors')({origin: true}),
    request = require('request'),
    parser = require('xml2json'),
    dev = process.env.NODE_ENV !== 'production',
    nextApp = next({ dev, conf: { distDir: 'next' } }),
    handle = nextApp.getRequestHandler()

const hsApp = express()

const createSitemap = zePath => {
    const skipFiles = ['/index','/404','/robots.txt','/sitemap.xml'],
        rootURL = 'https://adoption-education.com',
        parsed = JSON.parse(fs.readFileSync(zePath+'server/pages-manifest.json')),
        files = Object.keys(parsed).filter((nm) => !(nm.indexOf('_') === 1 || skipFiles.includes(nm)))

    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        ${files.map(path => {
            let fileStat = fs.statSync(zePath+'server/'+parsed[path]),
                m = new Date(fileStat.mtimeMs)
            return `
                <url>
                    <loc>${rootURL}${path}</loc>
                    <lastmod>${m.getUTCFullYear() +"-"+ ("0"+(m.getUTCMonth()+1)).slice(-2) +"-"+ ("0"+ m.getUTCDate()).slice(-2) + "T" + ("0"+ m.getUTCHours()).slice(-2) + ":" + ("0"+ m.getUTCMinutes()).slice(-2) + ":" + ("0"+ m.getUTCSeconds()).slice(-2) +"Z"}</lastmod>
                </url>
            `
            }
        )}
    </urlset>`
}

const hubspotSucks = (req, res) => {
    let blogObj = {
        abg: 'https://blog.adoptionsbygladney.com/rss.xml',
        adopted: 'https://blog.adoption-education.com/rss.xml'
    },
    hsUrl = blogObj[req.params.blog] || blogObj.adopted

    request(hsUrl,(err,resp,body) => {
        if(!err && resp.statusCode == 200) {
            let cnvrtd = parser.toJson(resp.body,{
                object: true,
                coerce: true
            }),
            obj = cnvrtd.rss.channel,
            objects = obj.item.filter((item,i) => i < 3)

            res.json({
                title: obj.title,
                link: obj.link,
                description: obj.description,
                objects: objects.map((obj,i) => {
                    for (var key in obj) if ( !['title','pubDate','link'].includes(key) ) delete obj[key]
                    return obj
                })
            })
        }
    })

}

process.env.BASE_TITLE = 'AdoptED | Adoption Education'

hsApp.use(cors)
hsApp.use('/:blog?',hubspotSucks)

// Cloud Function Definitions //

exports.hubspotSucks = functions.https.onRequest(hsApp)

exports.createRobots = functions.https.onRequest((req,res) => {
    res.setHeader('Content-Type', 'text/plain')
    res.write(`User-agent: *
    Allow: /`)
    res.end()
})

exports.createSitemap = functions.https.onRequest((req,res) => {
    res.setHeader('Content-Type', 'text/xml')
    res.write(createSitemap(__dirname+'/next/'))
    res.end()
})

exports.next = functions.https.onRequest((req, res) => {
    return nextApp.prepare().then(() => handle(req, res))
})