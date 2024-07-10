import React from 'react'
import { FcGoogle } from "react-icons/fc";
import "../styles/Display.scss";
import Aos from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';




function Display() {
    useEffect(()=>{
        Aos.init({duration: 1500});
    });

  return (
    <div className="display">
        <nav className="google">
            <span> <FcGoogle data-aos="fade-left"/></span><h1 data-aos="fade-right">Welcome to Google</h1>
  </nav>
  <div className="lowerPage">
    <h2 data-aos="zoom-in-up">Father of AI</h2>
  </div>
      
    </div>
  )
}
export default Display;



