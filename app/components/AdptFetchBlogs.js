import { Component } from 'react'
import { adptKeygen } from '../utilities/functions'

export default class AdptFetchBlogs extends Component {
    state = {
        fetched: false,
        blogs: []
    }

    componentDidMount() {
        fetch('https://us-central1-adopted-web.cloudfunctions.net/hubspotSucks/adopted')
        .then(res => res.json())
        .then(resp => {
            let objs = resp.objects

            objs.map((obj,i) => {
                this.state.blogs.push({
                    title: obj.title,
                    link: obj.link
                })
            })

            this.setState({fetched: true})
        })
    }

    render() {
        if (!this.state.fetched) return null

        return (
            <div>
                {this.state.blogs.map((blog,k) => {
                    let key = adptKeygen()
                    return (
                        <p data-key={key} key={key}>
                            <a key={key} href={blog.link} title={blog.title}>{blog.title}</a>
                        </p>
                    )
                })}
            </div>
        )
    }
}