import React from "react"
import {Link} from 'react-scroll';
// import { FaSuitcase } from "react-icons/fa6";
import "../intro/intro.css"
import img from "../../assets/myimg.png"

export default function Intro(){
  return (<>
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Ahamed Roshan Akther</span><br/>Full Stack developer</span>
            <p className="introPara">I am a passionate and results-oriented full-stack developer with experience<br/> in both  front-end and back-end development.</p>
            <Link><button className="btn">&nbsp; Heir me</button></Link>
        </div>
        <img src={img} alt="Profile" className="bg"/>
    </section>
  </>)
};