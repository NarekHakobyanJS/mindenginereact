import React, { useState } from 'react'

const ProgramItem = ({ el }) => {

    const [openPopup, setOpenPopup] = useState(false)
    return (
        <div className="program-tab">
            <input type="checkbox" name="accordion-1" id={el.program} checked  />
            <label for={el.program} className={openPopup ? "program-tab__label active" : "program-tab__label"} onClick={() => setOpenPopup((prev) => !prev)}>
                {el.title}
                <i className="program-tab__label-icon me-i-arrow-down"></i>
            </label>

            {
                openPopup && <div className="program-tab__content">
                    <p className="program-tab__text">{el.text}</p>
                </div>
            }
        </div>
    )
}

export default ProgramItem
