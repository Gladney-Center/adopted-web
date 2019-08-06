import { Component } from 'react'

export default class AdptVidGrid extends Component {
	state = {
		init: false
	}
	
	componentDidMount() {
		window._wq = window._wq || []

		_wq.push({ id: "_all", onReady: (video) => console.log(video.name())})

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
					<div className="adpt-video-embed-inner">
						<div className="wistia_responsive_wrapper" style={{height: '100%', left: 0, position: 'absolute', top: 0, width: '100%'}}>
							<span className="wistia_embed wistia_async_qx6z98rzv6 popover=true popoverAnimateThumbnail=true videoFoam=true" style={{display: 'inline-block', height: '100%',position: 'relative', width: '100%'}}>&nbsp;</span>
						</div>
					</div>
					<div className="adpt-video-embed-inner">
						<div className="wistia_responsive_wrapper" style={{height: '100%', left: 0, position: 'absolute', top: 0, width: '100%'}}>
							<span className="wistia_embed wistia_async_wgkyyn1wya popover=true popoverAnimateThumbnail=true videoFoam=true" style={{display: 'inline-block', height: '100%',position: 'relative', width: '100%'}}>&nbsp;</span>
						</div>
					</div>
					<div className="adpt-video-embed-inner">
						<div className="wistia_responsive_wrapper" style={{height: '100%', left: 0, position: 'absolute', top: 0, width: '100%'}}>
							<span className="wistia_embed wistia_async_skwth8ebdp popover=true popoverAnimateThumbnail=true videoFoam=true" style={{display: 'inline-block', height: '100%',position: 'relative', width: '100%'}}>&nbsp;</span>
						</div>
					</div>
					<div className="adpt-video-embed-inner">
						<div className="wistia_responsive_wrapper" style={{height: '100%', left: 0, position: 'absolute', top: 0, width: '100%'}}>
							<span className="wistia_embed wistia_async_of7poy6dw0 popover=true popoverAnimateThumbnail=true videoFoam=true" style={{display: 'inline-block', height: '100%',position: 'relative', width: '100%'}}>&nbsp;</span>
						</div>
					</div>
				</div>
			</>
		)
	}
}