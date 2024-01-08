import React, { useState } from 'react'

const FaqItem = ({ el }) => {
    const [openPopup, setOpenPopup] = useState(false)

    return (
        <div className="faq-tab">
            <input type="checkbox" name="accordion-1" id={el.faq} checked onClick={() => setOpenPopup((prev) => !prev)} />
            <label for={el.faq} className={openPopup ? "faq-tab__label active" : "faq-tab__label"}>
                {el.title}
                <i className="faq-tab__label-icon me-i-arrow-down"></i>
            </label>
            {
                openPopup && <div className="faq-tab__content">
                    <p className="faq-tab__text">
                       {el.text}
                    </p>
                </div>
            }

        </div>
    )
}

export default FaqItem
