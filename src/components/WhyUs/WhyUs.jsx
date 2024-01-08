import React, {forwardRef} from 'react'
import './WhyUs.css'
import {useTranslation} from "react-i18next";

const WhyUs = forwardRef((props, ref) => {
    const { t } = useTranslation()
    return (
        <div className="section why-us" ref={ref}>
            <div className="why-us-inner">
                <h2 className="why-us-title">{t("WhyUs.Title")} <span>Mindengin</span></h2>
                <div className="why-us-items">

                    <div className="why-us-item">
                        <h2 className="why-us-item-title">{t("WhyUs.1.Title")}</h2>
                        <p className="why-us-item-text">{t("WhyUs.1.Text")}</p>
                    </div>
                    <div className="why-us-item">
                        <h2 className="why-us-item-title">{t("WhyUs.2.Title")}</h2>
                        <p className="why-us-item-text">{t("WhyUs.2.Text")}</p>
                    </div>
                    <div className="why-us-item">
                        <h2 className="why-us-item-title">{t("WhyUs.3.Title")}</h2>
                        <p className="why-us-item-text">{t("WhyUs.3.Text")}</p>
                    </div>
                    <div className="why-us-item">
                        <h2 className="why-us-item-title">{t("WhyUs.4.Title")}</h2>
                        <p className="why-us-item-text">{t("WhyUs.4.Text")}</p>
                    </div>
                    {/*<div className="why-us-item">*/}
                    {/*    <h2 className="why-us-item-title">Interactive Learning:</h2>*/}
                    {/*    <p className="why-us-item-text">Engage with dynamic lessons and simulations for practical experience.</p>*/}
                    {/*</div>*/}
                    {/*<div className="why-us-item">*/}
                    {/*    <h2 className="why-us-item-title">Personalized Coaching</h2>*/}
                    {/*    <p className="why-us-item-text">Benefit from tailored guidance designed to meet your specific learning needs and goals.</p>*/}
                    {/*</div>*/}
                    {/*<div className="why-us-item">*/}
                    {/*    <h2 className="why-us-item-title">Real-time Market Insights</h2>*/}
                    {/*    <p className="why-us-item-text">Stay informed and make strategic decisions with our integration of live market data.</p>*/}
                    {/*</div>*/}
                    {/*<div className="why-us-item">*/}
                    {/*    <h2 className="why-us-item-title">Brand New Vision</h2>*/}
                    {/*    <p className="why-us-item-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>*/}
                    {/*</div>*/}
                </div>
            </div>

        </div>
    )
})

export default WhyUs
