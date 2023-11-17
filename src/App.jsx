import React, { useState } from "react";
import './app.scss';
import Topbar from "./Component/topbar/Topbar";
import Portfolio from "./Component/portfolio/Portfolio";
import Work from "./Component/work/Work";
import Testmonials from "./Component/testmonials/Testmonials";
import Intro from "./Component/Intro/Intro";
import Contact from "./Component/contact/Contact";
import Menu from "./Component/menu/Menu";
import SliderProject from "./Component/SliderProject/SliderProject";
function App() {
  const [menuOpen,setMenuOpen]=useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        {/* <Work /> */}
        <SliderProject/>
        <Testmonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
