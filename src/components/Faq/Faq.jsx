import React, { forwardRef } from 'react'
import './Faq.css'
import FaqItem from './FaqItem/FaqItem';
import { useTranslation } from 'react-i18next';

const Faq = forwardRef((props, ref) => {
    const {t} = useTranslation()
    const FaqItemAR = [
        {faq : "faq1", title : t("FAQ.1.Title"), text : t("FAQ.1.Text") },
        {faq : "faq2",  title : t("FAQ.2.Title"), text : t("FAQ.2.Text") },
        {faq : "faq3",  title : t("FAQ.3.Title"), text : t("FAQ.3.Text") },
        {faq : "faq4",  title : t("FAQ.4.Title"), text : t("FAQ.4.Text") },
        {faq : "faq5",  title : t("FAQ.5.Title"), text : t("FAQ.5.Text") },
    ]

    return (
        <div class="section faq" ref={ref}>

            <div class="faq-inner">
                <h2 class="faq-title">{t("FAQ.Title")}</h2>

                {
                    FaqItemAR.map((el) => {
                        return <FaqItem el={el} key={el} />
                    })
                }

            </div>

        </div>
    )
})

export default Faq
