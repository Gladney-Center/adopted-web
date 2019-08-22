import { useEffect, useState } from 'react'

export default () => {
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