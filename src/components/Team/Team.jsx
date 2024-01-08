import {forwardRef, useState} from 'react'
import teamImg from '../../assets/images/team-3.png'
import './Team.css'
import {useTranslation} from "react-i18next";

const Team = forwardRef((props, ref) => {
    const [teamActive, setTeamActive] = useState(null);
    const { t } = useTranslation()
    const openPopup = (index) => {
        setTeamActive(index);
    }

    const team = [
        {
            id: 1,
            name: 'Razmik',
            lastName: 'Asaturyan',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            img: teamImg
        },
        {
            id: 2,
            name: 'Sergey',
            lastName: 'Ghazaryan',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            img: teamImg
        },
        {
            id: 3,
            name: 'Vache',
            lastName: 'Tamrazyan',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            img: teamImg
        },
        {
            id: 4,
            name: 'Narek',
            lastName: 'Hakobyan',
            info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            img: teamImg
        }
    ]
    return (
        <div className="section team" ref={ref}>

            <div className="team-inner">
                <h2 className="team-title">{t("Team.Title1")} <span>{t("Team.Title2")}</span></h2>
                <div className="team-members">
                    {
                        team.map((el, index) => {
                            return <div className="team-member">

                                <div className="team-member-holder" onClick={() => { openPopup(index)}}>
                                    <img className="team-member-img" src={el.img}/>
                                    <h3 className="team-member-name">
                                        {el.name} {el.lastName}
                                    </h3>
                                </div>

                                <div
                                    className={teamActive === index ? "team-member-text-holder active" : "team-member-text-holder"}>
                                    <div className="team-member-text-inner">
                                        <h3 className="team-member-title">
                                            {el.name} {el.lastName}
                                            <i className="team-member-close-icon me-i-close" onClick={() => {
                                                openPopup(null)
                                            }}></i>
                                        </h3>
                                        <p className="team-member-text">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem
                                            Ipsum has been the industry's standard dummy text ever since the 1500s, when
                                            an
                                            unknown printer took a galley of type and scrambled it to make a type
                                            specimen
                                            book. It has survived not only five centuries, but also the leap into
                                            electronic
                                            typesetting, remaining essentially unchanged. It was popularised in the
                                            1960s
                                            with the release of Letraset sheets containing Lorem Ipsum passages, and
                                            more
                                            recently with desktop publishing software like Aldus PageMaker including
                                            versions of Lorem Ipsum.
                                        </p>
                                    </div>

                                    <div className="team-member-text-backface" onClick={() => {
                                        openPopup(null)
                                    }}></div>

                                </div>

                            </div>
                        })
                    }

                </div>
            </div>

        </div>
    )
})

export default Team
