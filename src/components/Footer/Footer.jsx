import React from 'react'
import mindenginLogo from '../../assets/logos/mindenginLogo.png'
import './Footer.css'

const Footer = ({smoothScrollFC, refItems}) => {
    return (
        <footer id="footer2" className="page-section pt-80 pb-50">
            <div className="container">
                <div className="row">

                    <div className="col-md-4 col-sm-4 widget">
                        <div className="logo-footer-cont">
                            <a href="">
                                <img className="logo-footer" src={mindenginLogo} alt="logo"/>
                            </a>
                        </div>
                        <div className="footer-2-text-cont">
                            <address>
                                555 California str, Suite 100<br/>
                                San&nbsp;Francisco, CA 94107
                            </address>
                        </div>
                        <div class="footer-2-text-cont">
                            1-800-312-2121<br/>
                            1-800-310-1010
                        </div>
                        <div className="footer-2-text-cont">
                            <a className="a-text" href="mailto:info@mindengin.com">info@mindengin.com</a>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 widget nav-list">
                        <h4>NAVIGATE</h4>
                        <ul className="links-list bold a-text-cont">
                            {
                                refItems.map((r, index) => {
                                    return (
                                        <li>
                                            <a onClick={() => smoothScrollFC(r.ref)}>
                                                {r.title}
                                            </a>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                </div>

                {/*     
<!--                        <div class="col-md-4 col-sm-4 widget nav-list">-->
<!--                            <h4>ABOUT US</h4>-->
<!--                            <ul class="links-list a-text-cont" >-->
<!--                                <li><a href="">COMPANY</a></li>-->
<!--                                <li><a href="">WHAT WE DO</a></li>-->
<!--                                <li><a href="">HELP CENTER</a></li>-->
<!--                                <li><a href="">TERMS OF SERVICE</a></li>-->
<!--                                <li><a href="">CONTACT</a></li>-->
<!--                            </ul>-->
<!--                        </div>-->
            </div> */}

                <div className="footer-2-copy-cont clearfix">
                    {/* <!-- Social Links --> */}
                    <div className="footer-2-soc-a right">
                        <a className="footer-icon-holder" href="https://1.envato.market/1rOKNa" title="Facebook" target="_blank"><i className="bi bi-facebook"></i></a>
                        <a className="footer-icon-holder" href="https://1.envato.market/1rOKNa" title="Facebook" target="_blank"><i className="bi bi-instagram"></i></a>
                        <a className="footer-icon-holder" href="https://1.envato.market/1rOKNa" title="Facebook" target="_blank"><i className="bi bi-telegram"></i></a>
                        <a className="footer-icon-holder" href="https://1.envato.market/1rOKNa" title="Facebook" target="_blank"><i className="bi bi-youtube"></i></a>
                        <a className="footer-icon-holder" href="https://1.envato.market/1rOKNa" title="Twitter" target="_blank"><i className="bi bi-twitter"></i></a>
                        <a className="footer-icon-holder" href="https://1.envato.market/1rOKNa" title="LinkedIn+" target="_blank"><i className="bi bi-linkedin"></i></a>
                    </div>

                    {/*    <!-- Copyright --> */}
                    <div className="left">
                        <a className="footer-2-copy" href="https://1.envato.market/1rOKNa" target="_blank">&copy; Mindengin 2023</a>
                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer
