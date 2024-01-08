import React, {forwardRef} from 'react'
import './Main.css'
import {useTranslation} from "react-i18next";

const Main = forwardRef((props, ref) => {
    const { t } = useTranslation()
  return (
    <div ref={ref} className="section main" id="section1">
      <h1 className="main-title-holder">
        <span className="main-title ">{t("Main.Title1")}</span>
        <span className="main-title marked">{t("Main.Title2")}</span>
      </h1>
    </div>
  )
})

export default Main
