import { Dropdown, DropdownButton } from "react-bootstrap"

const LanguageSwitcher = ({changeLanguageHandler, language}) => {
  const button = {
    position: "absolute",
    paddingRight: "4%",
    paddingTop: "2%",
    right: "0px"
  }



  return (
    <DropdownButton id="dropdown-basic-button" title={language} style={button}>
      <Dropdown.Item eventKey="fi" onClick={() => changeLanguageHandler("fi")}>Fi</Dropdown.Item>
      <Dropdown.Item eventKey="en" onClick={() => changeLanguageHandler("en")}>En</Dropdown.Item>
    </DropdownButton>
    

  )
}
export default LanguageSwitcher

/*

<select name={language} id="cars" className="languageSelect">
      <option value="volvo">Fi</option>
      <option value="saab">En</option>
    </select>
*/