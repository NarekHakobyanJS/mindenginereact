import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = ({l, changeL }) => {

    const { i18n } = useTranslation()

    const switcher = (lng) => () => {
        i18n.changeLanguage(lng)
    }
    return (
        <>
        <span onClick={switcher(changeL)}>{l}</span>
        </>
    )
}

export default LanguageSwitcher