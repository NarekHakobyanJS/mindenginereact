import React, { forwardRef, useState } from 'react'
import './ContactUs.css'
import {useTranslation} from "react-i18next";

const ContactUs = forwardRef((props, ref) => {
    const {t} = useTranslation();
    const [nameIsActive, setNameIsActive] = useState(false);
    const [surnameIsActive, setSurnameIsActive] = useState(false);
    const [emailIsActive, setEmailIsActive] = useState(false);
    const [messageIsActive, setMessageIsActive] = useState(false);
    const nameChecker = (e) => {
        if(e.target.value.length !== 0) {
            setNameIsActive(true)
        } else {
            setNameIsActive(false)
        }
    };
    const surnameChecker = (e) => {
        if(e.target.value.length !== 0) {
            setSurnameIsActive(true)
        } else {
            setSurnameIsActive(false)
        }
    };
    const emailChecker = (e) => {
        if(e.target.value.length !== 0) {
            setEmailIsActive(true)
        } else {
            setEmailIsActive(false)
        }
    };
    const messageChecker = (e) => {
        if(e.target.value.length !== 0) {
            setMessageIsActive(true)
        } else {
            setMessageIsActive(false)
        }
    };
    return (
        <div className="section contact-us" ref={ref}>

            <div className="contact-us-inner">
                <h2 className="contact-us-title">{t("ContactUs.Title")}</h2>
                <form className="contact-us-content">
                    <div className="contact-us-content-inner">
                        <div className="contact-us-content-item">
                            <input type="text" id="name" className="contact-us-input" onChange={(e) => nameChecker(e)}/>
                            <label for="name" className={nameIsActive ? "contact-us-input-title active" : "contact-us-input-title"} >
                                {t("ContactUs.Name")}
                            </label>
                        </div>

                        <div className="contact-us-content-item">
                            <input type="text" id="surname" className="contact-us-input" onChange={(e) => surnameChecker(e)}/>
                            <label for="surname" className={surnameIsActive ? "contact-us-input-title active" : "contact-us-input-title"} >
                                {t("ContactUs.Surname")}
                            </label>
                        </div>

                        <div className="contact-us-content-item">
                            <input type="text" id="email" className="contact-us-input" onChange={(e) => emailChecker(e)}/>
                            <label for="email" className={emailIsActive ? "contact-us-input-title active" : "contact-us-input-title"}>
                                {t("ContactUs.Email")}
                            </label>
                        </div>

                        <div className="contact-us-content-item">
                            <textarea name="" id="message" className="contact-us-input textarea" onChange={(e) => messageChecker(e)}></textarea>
                            <label for="message" className={messageIsActive ? "contact-us-input-title active" : "contact-us-input-title"}>
                                {t("ContactUs.Message")}
                            </label>
                        </div>

                        <div className="contact-us-content-button">
                            {t("ContactUs.Send")}
                        </div>

                    </div>
                </form>
            </div>

        </div>
    )
}
)
export default ContactUs
