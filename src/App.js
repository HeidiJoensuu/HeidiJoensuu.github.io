import { useEffect, useState } from "react";
import { Carousel, Col, Container, Row, Stack } from "react-bootstrap";
import LanguageSwitcher from "./components/languageSwitcher";
import ProfileInfo from "./components/ProfileInfo";
import strings from "./utils/localization";
import inProgress from "./assets/progress/inProgress.png"

const App = () => {
  const [language, setLanguage] = useState("fi")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage) changeLanguageHandler(savedLanguage)
  }, [language])

  const changeLanguageHandler = (lang) => {
    setLanguage(lang)
    strings.setLanguage(lang)
    localStorage.setItem("language", lang)
  }
  //C:\Users\Heidi\Documents\Koodausta\Kotisivu\HeidiJoensuu.github.io\src\assets\progress\inProgress.png
  return (
    <>
    <LanguageSwitcher changeLanguageHandler={changeLanguageHandler} language={language}/>
    
    <div className="mainPage">
    <img src={inProgress} alt="InProgress" className="inProgress"/>
      <ProfileInfo />
      <Stack direction="horizontal" gap={1} className="context">

        {strings.projectTexts.example1.p1}
        <div className="ms-auto fullheigth">
          <div style={{display: "flex", height:"100%"}}>
          <div class="vl" />
          <div class="vl2" />
            <div className="sidebar">
              <div>{strings.sidebar.whatIsThisSite}</div>
              <div className="bg-light border">{strings.sidebar.backToList}</div>
            </div>
          </div>
        </div>
      </Stack>  
    </div>
    </>
  );
}

export default App;

/*
Profiili - modal / Offcanvas
Postaukset auki. Mahdollisuus Bootsrapin Carousel-vaihtoehtoon (?)

*/