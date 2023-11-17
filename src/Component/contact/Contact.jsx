import React, { useState } from "react";
import "./contact.scss";


const Contact = () => {
  const [massage, setmassage] = useState(false);
  const handleSubmit=(e)=>{
    e.preventDefault()
        setmassage(true)
 
  }
  return (
    <>
      <div className="contact" id="contact">
        <div className="left">
          <img src="assets/svg.jpg" className="svg" />
        </div>
        <div className="right">
          <h2>Contact...</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
            {massage && <span>Thanks, I'll reply ASAP :</span>}
          </form>
        </div>
      </div>
    </>
  );
};
export default Contact;
