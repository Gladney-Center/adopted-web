import { Fragment, useContext } from 'react'
import Link from 'next/link'
import SVG from './svg'
import PageContext from './context'

export default (props) => {
    const { footer } = useContext(PageContext).common

    let {info,pregnant,presentedby} = footer
    return (
        <Fragment>
            <footer role="contentinfo" className="adpt-footer">
                <adpt-inner>
                    <div className="adpt-footer-block block-1">
                        <div className="adpt-footer-block-inner">
                            <div className="adpt-footer-heading">
                                <SVG.AdptLogo/>
                            </div>
                            <div className="adpt-footer-info">
                                <span className="footer-info-inner">{info.email}</span>
                                <span className="footer-info-inner">{info.phone}</span>
                                <span className="footer-info-inner"><address>{info.address}</address></span>
                            </div>
                        </div>
                    </div>
                    <div className="adpt-footer-block block-2">
                        <div className="adpt-footer-block-inner">
                            <div className="adpt-footer-heading">
                                <h4>Curriculum Portal</h4>
                            </div>
                            <div className="input-block">
                                <input type="text" placeholder="Username" name="adpt-user"/>
                                <input type="text" placeholder="Password" name="adpt-pwd"/>
                            </div>
                            <button>Login</button>
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
                                    <Link href={pregnant.weblink}>
                                        <a className="btn"><i className="fas fa-globe"></i>Website</a>
                                    </Link>
                                    <Link href={pregnant.callink}>
                                        <a className="btn"><i className="fas fa-phone"></i>Call Now</a>
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="adpt-footer-block block-4">
                        <div className="adpt-footer-block-inner">
                            <div className="adpt-footer-heading" data-mutable="true">
                                <h4>{presentedby}</h4>
                            </div>
                            <div className="gcfa-logo">
                                <SVG.GladneyLogoFull/>
                            </div>
                        </div>
                    </div>
                </adpt-inner>
            </footer>
            <adpt-post-footer></adpt-post-footer>
        </Fragment>
)}