import {Fragment} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import * as SVG from './svg'

const Footer = () => (
    <Fragment>
        <footer role="contentinfo" class="adpt-footer">
            <adpt-inner>
                <div class="adpt-footer-block block-1">
                    <div class="adpt-footer-block-inner">
                        <div class="adpt-footer-heading"></div>
                        <div class="adpt-footer-info">
                            <span class="footer-info-inner">hello@adoption-education.com</span>
                            <span class="footer-info-inner">817-922-6000</span>
                            <span class="footer-info-inner">6300 John Ryan Dr., Fort Worth, TX 76132</span>
                        </div>
                    </div>
                </div>
                <div class="adpt-footer-block block-2">
                    <div class="adpt-footer-block-inner">
                        <div class="adpt-footer-heading">
                            <h4>Curriculum Portal</h4>
                        </div>
                        <div class="input-block">
                            <input type="text" placeholder="Username" name="adpt-user"/>
                            <input type="text" placeholder="Password" name="adpt-pwd"/>
                        </div>
                        <button>Login</button>
                    </div>
                </div>
                <div class="adpt-footer-block block-3">
                    <div class="adpt-footer-block-inner">
                        <div class="adpt-footer-heading">
                            <h4>Pregnant?</h4>
                        </div>
                        <div class="adpt-footer-info">
                            <span class="footer-info-inner">Chat with a Pregnancy Options counselor now:</span>
                            <span class="footer-info-inner">
                                <a class="btn" href="#"><i class="fas fa-globe"></i>Website</a>&nbsp;&nbsp;
                                <a class="btn" href="#"><i class="fas fa-phone"></i>Call Now</a>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="adpt-footer-block block-4">
                    <div class="adpt-footer-block-inner">
                        <div class="adpt-footer-heading">
                            <h4>AdoptED is presented by</h4>
                        </div>
                        <div class="gcfa-logo">Gladney logo</div>
                    </div>
                </div>
            </adpt-inner>
        </footer>
        <adpt-post-footer></adpt-post-footer>
    </Fragment>
)

export default Footer