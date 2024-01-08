import React, { forwardRef } from 'react'
import './Program.css'
import ProgramItem from './ProgramItem/ProgramItem'
import {useTranslation} from "react-i18next";

const Program = forwardRef((props, ref) => {
    const { t } = useTranslation()
    const programArr = [
        {faq : "p1", title : t("Program.1.Title"), text : t("Program.1.Text") },
        {faq : "p2",  title : t("Program.2.Title"), text : t("Program.2.Text") },
        {faq : "p3",  title : t("Program.3.Title"), text : t("Program.3.Text") },
        {faq : "p4",  title : t("Program.4.Title"), text : t("Program.4.Text") },
        // {faq : "p5",  title : t("Program.5.Title"), text : t("Program.5.Text") },
    ]
    return (
        <div class="section program" ref={ref}>

            <div class="program-inner">
                <h2 class="program-title">{t("Program.Title")}</h2>

                {
                    programArr.map((el) => {
                        return <ProgramItem el={el} key={el} />
                    })
                }


                 {/* <div class="program-tab">
                    <input type="checkbox" name="accordion-1" id="cb2" checked />
                    <label for="cb2" class="program-tab__label">Chapter</label>
                    <div class="program-tab__content">
                        <p class="program-tab__text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div> */}
            </div>

        </div>
    )
})

export default Program
