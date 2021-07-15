import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/contact">Kontakt</Link>
    <Link to="/contact">Tag 1</Link>
    <Link to="/contact">Tag 2</Link>
    <Link to="/contact">Tag 3</Link>
    <ThemeChanger/>
  </nav>
  
)
