import { useEffect, useState } from "react";
import ProfileInfo from "./components/ProfileInfo";
import strings from "./utils/localization";

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

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <ProfileInfo />
    </div>
  );
}

export default App;

/*
Profiili - modal / Offcanvas
Postaukset auki. Mahdollisuus Bootsrapin Carousel-vaihtoehtoon (?)

*/