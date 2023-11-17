import React, { useEffect, useRef } from "react";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import "./intro.scss";
import { init } from "ityped";
const Intro = () => {
  const testRef = useRef();

  useEffect(() => {
    init(testRef.current,{
      showCursor:true,
      backDelay:1500,
      backSpeed:60,
      strings: [
        "MERN Stack Developer",
        "Python Django Developer",
        "Designer",
        "Content Creater",
      ],
    });
    console.log("jitendra")
  }, []);
  return (
    <>
      <div className="intro" id="intro">
        <div className="left">
          <div className="itemContainer">
            <img src="assets/Jitendra.jpg" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi' There, I'am</h2>
            <h1>Jitendra yadav</h1>
            <h3>
              Developer <span ref={testRef}></span>
            </h3>
          </div>
            {/* <button type="button" className="button">Resume <ArrowCircleDownIcon /> </button> */}
          <a href="#portfolio">
            <ExpandCircleDownIcon className="icon" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Intro;
