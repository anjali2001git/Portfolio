import { init } from "ityped";
import { useEffect,useRef } from "react";
import "./intro.scss";

 export default function Intro() {
  const textRef=useRef();
  useEffect(()=>{
      init(textRef.current,{
       showCursor:true, 
       backDelay:1500,
       backSpeed:60,
       strings:["MERN Stack"],
      }  )
  },[])
  return (
     <div className=" ani near-moon-gradient color-block-5 mb-3 mx-auto rounded-circle z-depth-1-half">  
    <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
    <div className="intro" id="intro">
    
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Anjali Jain</h1>
          <h2>Web Developer</h2>
          <h3><span ref={textRef}></span></h3>
        </div>
        <div className="arr">
        <a href="#about-me ">
          <img src="assets/down.png" alt=""></img>
 
        </a>
        </div>
      </div>
      </div>
    </div>
  )
}
