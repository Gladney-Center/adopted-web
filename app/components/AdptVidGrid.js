import { Component } from 'react'

export default class AdptVidGrid extends Component {
	state = {
		init: false
	}
	
	componentDidMount() {
		const embed1 = document.createElement('script'),
			embed2 = document.createElement('script'),
			embed3 = document.createElement('script'),
			embed4 = document.createElement('script'),
			wistExt = document.createElement('script')

		embed1.src = 'https://fast.wistia.com/embed/medias/qx6z98rzv6.jsonp'
		embed2.src = 'https://fast.wistia.com/embed/medias/wgkyyn1wya.jsonp'
		embed3.src = 'https://fast.wistia.com/embed/medias/skwth8ebdp.jsonp'
		embed4.src = 'https://fast.wistia.com/embed/medias/of7poy6dw0.jsonp'
		wistExt.src = 'https://fast.wistia.com/assets/external/E-v1.js'

		embed1.async = embed2.async = embed3.async = embed4.async = true

		document.body.appendChild(embed1)
		document.body.appendChild(embed2)
		document.body.appendChild(embed3)
		document.body.appendChild(embed4)
		document.body.appendChild(wistExt)

		this.setState({
			init: true
		})
	}

	render() {
		if (!this.state.init) return null
		return (
			<>
				<div className="adpt-vidgrid-header">
					<h4>Video Resources</h4>
					<p>Our videos show how adoption affects different people: the adopted person, the family who wants to parent, and the expectant mother who is scared and doesn't want to be a parent.</p>
				</div>
				<div className="vidgrid-cont">
					<div className="adpt-video-embed-inner wistia_responsive_padding">
						<div className="wistia_responsive_wrapper" style={{height: '100%', left: 0, position: 'absolute', top: 0, width: '100%'}}>
							<span className="wistia_embed wistia_async_qx6z98rzv6 popover=true popoverAnimateThumbnail=true videoFoam=true" style={{display: 'inline-block', height: '100%',position: 'relative', width: '100%'}}>&nbsp;</span>
						</div>
					</div>
					<div className="adpt-video-embed-inner wistia_responsive_padding">
						<div className="wistia_responsive_wrapper" style={{height: '100%', left: 0, position: 'absolute', top: 0, width: '100%'}}>
							<span className="wistia_embed wistia_async_wgkyyn1wya popover=true popoverAnimateThumbnail=true videoFoam=true" style={{display: 'inline-block', height: '100%',position: 'relative', width: '100%'}}>&nbsp;</span>
						</div>
					</div>
					<div className="adpt-video-embed-inner wistia_responsive_padding">
						<div className="wistia_responsive_wrapper" style={{height: '100%', left: 0, position: 'absolute', top: 0, width: '100%'}}>
							<span className="wistia_embed wistia_async_skwth8ebdp popover=true popoverAnimateThumbnail=true videoFoam=true" style={{display: 'inline-block', height: '100%',position: 'relative', width: '100%'}}>&nbsp;</span>
						</div>
					</div>
					<div className="adpt-video-embed-inner wistia_responsive_padding">
						<div className="wistia_responsive_wrapper" style={{height: '100%', left: 0, position: 'absolute', top: 0, width: '100%'}}>
							<span className="wistia_embed wistia_async_of7poy6dw0 popover=true popoverAnimateThumbnail=true videoFoam=true" style={{display: 'inline-block', height: '100%',position: 'relative', width: '100%'}}>&nbsp;</span>
						</div>
					</div>
				</div>
			</>
		)
	}
}