const functions = require('firebase-functions'),
    fs = require('fs'),
    next = require('next'),
    express = require('express'),
    cors = require('cors')({origin: true}),
    request = require('request'),
    dev = process.env.NODE_ENV !== 'production',
    nextApp = next({ dev, conf: { distDir: 'next' } }),
    handle = nextApp.getRequestHandler()

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

const hsApp = express()

const hubspotSucks = (req, res) => {
    let hsUrl = 'https://api.hubapi.com/content/api/v2/blog-posts?hapikey=f09cae1b-d7b3-4ad8-88fb-1557f0870df4&limit=3&state=PUBLISHED'

    request(hsUrl,(err,resp, body) => {
        if(!err && resp.statusCode == 200) res.send(resp.body)
    })

}

hsApp.use(cors)
hsApp.use(hubspotSucks)

process.env.BASE_TITLE = 'AdoptED | Adoption Education'

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