import { Component } from 'react'
import Link from 'next/link'

export default class AdptFetchBlogs extends Component {
    state = {
        fetched: false,
        blogs: []
    }

    componentDidMount() {
        fetch('https://us-central1-adopted-web.cloudfunctions.net/hubspotSucks')
        .then(res => res.json())
        .then(resp => {
            let objs = resp.objects

            objs.map((obj,i) => {
                this.state.blogs.push({
                    title: obj.html_title,
                    link: obj.url,
                    desc: obj.meta_description
                })
            })

            this.setState({fetched: true})
        })
    }

    render() {
        if (!this.state.fetched) return null

        return (
            <div>
                {this.state.blogs.map((blog,k) => (
                    <p>
                        <Link href={blog.link}>
                            <a title={blog.desc}>{blog.title}</a>
                        </Link>
                    </p>
                ))}
            </div>
        )
    }
}