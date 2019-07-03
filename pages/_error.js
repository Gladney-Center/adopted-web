import { Component } from 'react'

export default class Error extends Component {
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null
        return { statusCode }
    }

    render() {
        let { statusCode } = this.props
        return (
            <div className="adpt-error">
                <div>
                    <h1>{statusCode}</h1>
                    <h2>{statusCode == 404 ? 'Error. The page could not be found.' : 'Error'}</h2>
                </div>
            </div>
        )
    }
}