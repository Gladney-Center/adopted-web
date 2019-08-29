import Head from 'next/head'
import Header from '../header'
import Footer from '../footer'

export default ({children}) =>
	<>
		<Head>
			<script async src="https://www.googletagmanager.com/gtag/js?id=UA-22691212-2"></script>
			<script>{`
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', 'UA-22691212-2');`}
			</script>
			<script>{`
				!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '962794667148171');fbq('track', 'PageView');`}
			</script>
			<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/4985317.js"></script>
			<script type="text/javascript" async src="https://fast.wistia.com/assets/external/E-v1.js"></script>
			<noscript>
				<img height="1" width="1" src="https://www.facebook.com/tr?id=962794667148171&ev=PageView&noscript=1"/>
			</noscript>
		</Head>
		<Header />
		{children}
		<Footer/>
	</>