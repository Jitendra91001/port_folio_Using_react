import React from "react";
import "./topbar.scss";
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';
import DownloadingIcon from '@mui/icons-material/Downloading';
const Topbar = ({menuOpen,setMenuOpen}) => {
  return (
    <>
      <div className={"topbar "+(menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">
              Jitendra.
            </a>
            <div className="ItemContainer">
              <PersonIcon className="icon"/>
              <span>+91 892 851 9020</span>
            </div>
            <div className="ItemContainer">
              <MailIcon className="icon" />
              <span>Jitendrayadav91001@gmail.com</span>
            </div>

            <div className="ItemContainer">
              {/* <DownloadingIcon className="icon" /> */}
              <button className="button"><DownloadingIcon/> Download Resume</button>
            </div>
          </div>
          <div className="right">
            
            <div className="humburgur" onClick={()=>setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Topbar;
