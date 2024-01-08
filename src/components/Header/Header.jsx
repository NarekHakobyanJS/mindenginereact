import React, { useState, useEffect, useRef } from 'react'
import "./Header.css"
import logo from "../../assets/logos/mindenginLogo.png"
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'

const Header = ({ smoothScrollFC, refItems, props, propY }) => {
    let lId = window.localStorage.getItem('id');
    const [activeSection, setActiveSection] = useState(null);
    const observer = useRef(null);
    const { t } = useTranslation()

    const [navbar, setNavbar] = useState(false);
    const [openBurger, setOpenBurger] = useState(false);
    const [openLang, setOpenLanguage] = useState(false);
    const [lang, setLangId] = useState(+lId);
    const [activeClass, setActiveClass] = useState(0);
    const [mobNavActive, setMobNavActive] = useState(0);

    useEffect(() => {
        //create new instance and pass a callback function
        observer.current = new IntersectionObserver((entries) => {
            const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
            //Update state with the visible section ID
            if (visibleSection) {
                setActiveSection(visibleSection.id);
            }
        });

        //Get custom attribute data-section from all sections
        const sections = document.querySelectorAll('[data-section]');

        sections.forEach((section) => {
            observer.current.observe(section);
        });
        //Cleanup function to remove observer
        return () => {
            sections.forEach((section) => {
                observer.current.unobserve(section);
            });
        };
    }, []);
    const openBurgerHandler = () => setOpenBurger(true);
    const openLangHandler = () => setOpenLanguage(!openLang);
    const closeBurgerHandler = () => setOpenBurger(false);
    const langId = (id) => {
        setLangId(id);
    }
    const changeBackGround = () => {
        if (window.scrollY >= 20) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    const changeActiveClass = (index) => {
        setActiveClass(index)
    }

    const changeLangId = (id) => {
        window.localStorage.setItem('id', id);
        setLangId(id);
    }


    const languages = [
        {
            name: 'EN',
            code: 'en'
        },
        {
            name: 'ՀԱՅ',
            code: 'am'
        },
        {
            name: 'РУ',
            code: 'ru'
        }
    ];
    propY--;
    const mobNav = (r, index) => {
        closeBurgerHandler();
        smoothScrollFC(r.ref)
        setMobNavActive(index)
    }
    useEffect(() => {
        window.addEventListener('scroll', () => {

            setActiveClass(propY);


        })
    }, [propY]);
    window.addEventListener('scroll', changeBackGround)

    return (
        <div className={navbar ? "header fade-in" : 'header'} >
            <div className="header-logo-holder">
                <img src={logo} alt="Mindengin logo" className="header-logo" />
            </div>

            <div className="header-nav">
                {
                    refItems.map((r, index) => {
                        return (
                            <div key={index} onClick={() => { changeActiveClass(index); smoothScrollFC(r.ref) }} className={activeClass === index || (propY === index && activeClass === index && activeClass !== 0) ? "header-nav-item active" : "header-nav-item"}>
                                <a className="header-nav-link" >
                                    {r.title}
                                </a>
                            </div>
                        )
                    })
                }


                <div className="header-language-holder">
                    <div className={openLang ? "header-language-head active" : "header-language-head"} onClick={openLangHandler}>
                        <span className="header-language-title">
                            {languages[lang].name}
                        </span>
                        <i className="header-language-head-icon me-i-arrow-down"></i>
                    </div>
                    <div className={openLang ? 'header-language-body active' : 'header-language-body'}>
                        {languages.map((el, index) => {
                            if (index !== lang) {
                                return <div className="header-language-body-item" >
                                    <span className="header-language-body-item-title" onClick={() => changeLangId(index)}>
                                        <LanguageSwitcher l={el.name} changeL={el.code} />
                                    </span>
                                </div>
                            }
                        })}
                    </div>
                    <div className={openLang ? 'header-language-backface active' : 'header-language-backface'} onClick={openLangHandler}></div>
                </div>
            </div>

            <div className="m-header-nav">
                <div className="m-header-nav-icon-holder">
                    <i onClick={openBurgerHandler}
                        className="m-header-nav-icon me-i-burger" ></i>
                </div>


                <div className={openBurger ? "m-header-nav-body active" : "m-header-nav-body"}>
                    <div className="m-header-nav-body-head">
                        <i onClick={closeBurgerHandler}
                            className="m-header-nav-body-head-icon me-i-close" ></i>
                    </div>
                    {
                        refItems.map((r, index) => {
                            return (
                                <div key={index} className="m-header-nav-item">
                                    <a className={mobNavActive === index ? "m-header-nav-link active" : "m-header-nav-link"} onClick={() => mobNav(r, index)}>{r.title}</a>
                                </div>
                            )
                        })
                    }
                    <div className="m-header-languages">
                        {languages.map((el, index) => {
                            return <div className="m-header-language-holder">
                                <span className={lang === index ? "m-header-language active" : "m-header-language"} onClick={() => changeLangId(index)}>
                                    <LanguageSwitcher l={el.name} changeL={el.code} />
                                </span>
                            </div>
                        })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header
