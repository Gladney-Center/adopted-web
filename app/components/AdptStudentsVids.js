import { Component } from 'react'
import AdoptEDSan from './AdoptEDSan'
import PageContext from './context'

export default class AdptStudentsVids extends Component {
	state = {
		init: false
	}
	
	componentDidMount() {
		const wistEmbed = document.createElement('script'),
		wistExt = document.createElement('script')

		wistEmbed.src = 'https://fast.wistia.com/embed/medias/qx6z98rzv6.jsonp'
		wistExt.src = 'https://fast.wistia.com/assets/external/E-v1.js'

		wistExt.async = wistEmbed.async = true

		document.body.appendChild(wistEmbed)
		document.body.appendChild(wistExt)

		this.setState({
			init: true
		})
	}

	render() {
		if (!this.state.init) return null
		return (
			<section className="adpt-videoblock">
				<adpt-inner>
					<div className="adpt-video-embed-inner wistia_responsive_padding">
						<div className="wistia_responsive_wrapper" style={{height: '100%', left: 0, position: 'absolute', top: 0, width: '100%'}}>
							<span className="wistia_embed wistia_async_qx6z98rzv6 popover=true popoverAnimateThumbnail=true videoFoam=true" style={{display: 'inline-block', height: '100%',position: 'relative', width: '100%'}}>&nbsp;</span>
						</div>
					</div>
				</adpt-inner>
			</section>
		)
	}
}