import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import ContactUs from './components/ContactUs/ContactUs';
import Course from './components/Course/Course';
import CourseInfo from './components/CourseInfo/CourseInfo';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Program from './components/Program/Program';
import TargetAudience from './components/TargetAudience/TargetAudience';
import Team from './components/Team/Team';
import WhyUs from './components/WhyUs/WhyUs';

function App() {
    const { t } = useTranslation()

    const homeRef = useRef(null)
    const targetAudienceRef = useRef(null)
    const courseInfoRef = useRef(null)
    const whyUsRef = useRef(null)
    const program = useRef(null)
    const teamRef = useRef(null)
    const faqRef = useRef(null)
    const contactUs = useRef(null)
    const myRef = useRef();
    const [isScrolled, setScroll] = useState(false);
    const [y, setY] = useState();



    const refItems = [
        { id: 1, title: t("Header.Home"), ref: homeRef },
        { id: 2, title: t("Header.TargetAudience"), ref: targetAudienceRef },
        { id: 3, title: t("Header.WhyUs"), ref: whyUsRef },
        { id: 4, title: t("Header.Program"), ref: program },
        { id: 5, title: t("Header.OurTeam"), ref: teamRef },
        { id: 6, title: t("Header.FAQ"), ref: faqRef },
        { id: 7, title: t("Header.ContactUs"), ref: contactUs },
    ]
    const smoothScrollFC = (arg) => {
        arg.current.scrollIntoView({ behavior: 'smooth' })
    }
    const position = () => {
        const home = homeRef.current?.offsetTop
        const target = targetAudienceRef.current?.offsetTop;
        const whyUs = whyUsRef.current?.offsetTop;
        const programSec = program.current?.offsetTop;
        const team = teamRef.current?.offsetTop;
        const faq = faqRef.current?.offsetTop;
        const contactUsSec = contactUs.current?.offsetTop;
        let arr = [];

        if (window.scrollY < target) {
            arr = [];
            arr = refItems.filter((val) => val.ref === homeRef)
            setScroll(true);

            setY(arr[0].id);
        } else if (window.scrollY >= target && window.scrollY < whyUs) {
            arr = [];
            arr = refItems.filter((val) => val.ref === targetAudienceRef)
            setScroll(true);
            setY(arr[0].id);
        } else if (window.scrollY >= whyUs && window.scrollY < programSec) {
            arr = [];
            arr = refItems.filter((val) => val.ref === whyUsRef)
            setScroll(true);
            setY(arr[0].id);
        } else if (window.scrollY >= programSec && window.scrollY < team) {
            arr = [];
            arr = refItems.filter((val) => val.ref === program)
            setScroll(true);
            setY(arr[0].id);
        } else if (window.scrollY >= team && window.scrollY < faq) {
            arr = [];
            arr = refItems.filter((val) => val.ref === teamRef)
            setScroll(true);
            setY(arr[0].id);
        } else if (window.scrollY >= faq && window.scrollY < contactUsSec) {
            arr = [];
            arr = refItems.filter((val) => val.ref === faqRef)
            setScroll(true);
            setY(arr[0].id);
        } else if (window.scrollY >= contactUsSec) {
            arr = [];
            arr = refItems.filter((val) => val.ref === contactUs)
            setScroll(true);
            setY(arr[0].id);
        }
    }

    useEffect(() => {
        position();
        window.addEventListener("scroll", position);
    })
    return (
        <div className="content">
            <Header smoothScrollFC={smoothScrollFC} refItems={refItems} props={isScrolled} propY={y} />
            <Main ref={homeRef} />
            <Course />
            <TargetAudience ref={targetAudienceRef} />
            <CourseInfo ref={courseInfoRef} />
            <WhyUs ref={whyUsRef} />
            <Program ref={program} />
            <Team ref={teamRef} />
            <Faq ref={faqRef} />
            <ContactUs ref={contactUs} />
            <Footer smoothScrollFC={smoothScrollFC} refItems={refItems} />
        </div>
    );
}

export default App;
