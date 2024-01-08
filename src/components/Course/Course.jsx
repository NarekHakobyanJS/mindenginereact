import React from 'react'
import img2 from '../../assets/images/img2.jpeg'
import './Course.css'
import {useTranslation} from "react-i18next";

const Course = () => {
  const { t } = useTranslation()
  return (
    <div className="section course-info">
      <div className="course-info-sides">
        <div className="course-info-side left">
          <img src={img2} alt="" className="course-info-img" />
        </div>
        <div className="course-info-side right">
          <p className="course-info-text">
            {t("Overview.Text")}
            {/*Empower your trading journey with Mindengin – your gateway to comprehensive and accessible trading education. Our platform is designed to equip individuals with the knowledge and skills needed to navigate financial markets successfully.*/}

          </p>
        </div>
      </div>
    </div>
  )
}

export default Course
