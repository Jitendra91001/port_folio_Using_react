import React, { useState } from "react";
import "./testmonials.scss";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { textmonials } from "../../data";
const Testmonials = () => {
    const [active,setActive]=useState("featured")
  return (
    <>
      <div className="testmonials" id="testmonials">
        <h1>Testmonials</h1>
        <div className="container">
          {textmonials.map((item) => (
              <div className={item.featured ? "card featured" : "card"}>
                <div className="top">
                  {/* <ArrowCircleRightIcon className="left" /> */}
                  <img src="assets/arrow.png" className="left"/>
                  <img src={item.image} alt="" className="mid" />
                  <YouTubeIcon className="youtube" />
                </div>
                <div className="center">{item.description}</div>
                <div className="bottom">
                  <h3>{item.title}</h3>
                  <h4>{item.founder}</h4>
                </div>
              </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Testmonials;
