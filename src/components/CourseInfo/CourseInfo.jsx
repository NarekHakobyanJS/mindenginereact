import React from 'react'
import img1 from '../../assets/images/img1.jpeg'
import './CourseInfo.css'
import {useTranslation} from "react-i18next";

const CourseInfo = () => {
    const { t } = useTranslation()
    return (
        <div class="section course-info2">
            <div class="course-info2-sides">
                <div class="course-info2-side left">
                    <p class="course-info2-text">{t("Info.Text")}</p>
                </div>
                <div class="course-info2-side right">
                    <img src={img1} alt="" class="course-info2-img" />
                </div>
            </div>
        </div>
    )
}

export default CourseInfo
