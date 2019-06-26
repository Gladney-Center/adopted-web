import {Fragment} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import SVG from './svg'

const Footer = () => (
    <Fragment>
        <footer role="contentinfo" className="adpt-footer">
            <adpt-inner>
                <div className="adpt-footer-block block-1">
                    <div className="adpt-footer-block-inner">
                        <div className="adpt-footer-heading"></div>
                        <div className="adpt-footer-info">
                            <span className="footer-info-inner">hello@adoption-education.com</span>
                            <span className="footer-info-inner">817-922-6000</span>
                            <span className="footer-info-inner">6300 John Ryan Dr., Fort Worth, TX 76132</span>
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
                            <h4>Pregnant?</h4>
                        </div>
                        <div className="adpt-footer-info">
                            <span className="footer-info-inner">Chat with a Pregnancy Options counselor now:</span>
                            <span className="footer-info-inner">
                                <a className="btn" href="#"><i className="fas fa-globe"></i>Website</a>&nbsp;&nbsp;
                                <a className="btn" href="#"><i className="fas fa-phone"></i>Call Now</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="adpt-footer-block block-4">
                    <div className="adpt-footer-block-inner">
                        <div className="adpt-footer-heading">
                            <h4>AdoptED is presented by</h4>
                        </div>
                        <div className="gcfa-logo">
                            <SVG.GladneyLogo/>
                        </div>
                    </div>
                </div>
            </adpt-inner>
        </footer>
        <adpt-post-footer></adpt-post-footer>
    </Fragment>
)

export default Footer