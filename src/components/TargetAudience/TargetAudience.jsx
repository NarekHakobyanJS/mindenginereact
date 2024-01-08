import React, {forwardRef} from 'react'
import './TargetAudience.css'
import {useTranslation} from "react-i18next";

const TargetAudience = forwardRef((props, ref) => {
    const { t } = useTranslation()
    return (
      <div className="section target-audience" ref={ref} id="section2">
      <div className="target-audience-inner" >
          <h2 className="target-audience-title">{t("TargetAudience.Title1")} <span>{t("TargetAudience.Title2")}</span></h2>
          <div className="target-audience-items">
              <div className="target-audience-item">
                  <h2 className="target-audience-item-title">{t("TargetAudience.1.Title")}</h2>
                  <p className="target-audience-item-text">{t("TargetAudience.1.Text")}</p>
              </div>
              <div className="target-audience-item">
                  <h2 className="target-audience-item-title">{t("TargetAudience.2.Title")}</h2>
                  <p className="target-audience-item-text">{t("TargetAudience.2.Text")}</p>
              </div>
              <div className="target-audience-item">
                  <h2 className="target-audience-item-title">{t("TargetAudience.3.Title")}</h2>
                  <p className="target-audience-item-text">{t("TargetAudience.3.Text")}</p>
              </div>
              {/*<div className="target-audience-item">*/}
              {/*    <h2 className="target-audience-item-title">{t("TargetAudience.4.Title")}</h2>*/}
              {/*    <p className="target-audience-item-text">{t("TargetAudience.4.Text")}</p>*/}
              {/*</div>*/}
          </div>
      </div>
  
  </div>
    )
  }) 

export default TargetAudience
