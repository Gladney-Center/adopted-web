import { useContext } from 'react'
import SVG from './svg'
import PageContext from './context'
import AdoptEDSan from './AdoptEDSan'
import AdptFetchBlogs from './AdptFetchBlogs'
import AdptSocialIcons from './AdptSocialIcons'

import { adptKeygen } from '../utilities/functions'

const theDate = new Date()

export default (props) => {
    const { footer, header } = useContext(PageContext)['common']

    let {info,pregnant,presentedby} = footer
    return (
        <>
            <footer role="contentinfo" className="adpt-footer">
                <adpt-inner>
                    <div className="adpt-footer-block block-1">
                        <div className="adpt-footer-block-inner">
                            <div className="adpt-footer-heading">
                                <SVG.AdptLogo/>
                            </div>
                            <div className="adpt-footer-info">
                                <span className="footer-info-inner"><i className="fas fa-envelope"></i>{info.email}</span>
                                <span className="footer-info-inner"><i className="fas fa-phone"></i>{info.phone}</span>
                                <span className="footer-info-inner"><i className="fas fa-map-marker-alt"></i><address>{info.address}</address></span>
                            </div>
                        </div>
                    </div>
                    <div className="adpt-footer-block block-2">
                        <div className="adpt-footer-block-inner">
                            <div className="adpt-footer-heading">
                                <h4><a href="https://blog.adoption-education.com"><AdoptEDSan str={"AdoptED Blog"}/><i className="fas fa-arrow-right"/></a></h4>
                            </div>
                            <AdptFetchBlogs/>
                        </div>
                    </div>
                    <div className="adpt-footer-block block-3">
                        <div className="adpt-footer-block-inner">
                            <div className="adpt-footer-heading">
                                <h4>{pregnant.heading}</h4>
                            </div>
                            <div className="adpt-footer-info">
                                <span className="footer-info-inner">{pregnant.text}</span>
                                <span className="footer-info-inner">
                                    <a href={pregnant.weblink} className="btn"><i className="fas fa-globe"></i>Website</a>
                                    <a href={pregnant.callink} className="btn"><i className="fas fa-phone"></i>Call Now</a>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="adpt-footer-block block-4">
                        <div className="adpt-footer-block-inner">
                            <div className="adpt-footer-heading" data-mutable="true">
                                <h4><AdoptEDSan str={presentedby}/></h4>
                            </div>
                            <div className="gcfa-logo">
                                <SVG.GladneyLogoFull/>
                            </div>
                        </div>
                    </div>
                </adpt-inner>
                <adpt-inner id="addenda">
                    <span>
                        <AdptSocialIcons/>
                        <div className="adpt-footer-apps">
                            <span><AdoptEDSan str={header.app.text}/></span>
                            {header.app.apps.map((app,i) => (
                                <div key={adptKeygen()} className="adpt-app-link">
                                    <a href={app.link}><i className={["fab",app.icon].join(' ')}></i></a>
                                </div>
                            ))}
                        </div>
                        <div>
                            <small>©&nbsp;{theDate.getFullYear()} Gladney Center for Adoption, all rights reserved&nbsp;|&nbsp;<a href="https://resource.adoption-education.com/adopted-privacy-policy">privacy policy</a></small>
                        </div>
                    </span>
                </adpt-inner>
            </footer>
            <adpt-post-footer></adpt-post-footer>
        </>
)}