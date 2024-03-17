import React from "react";
import uiux from '../../assets/ui-ux.png';
import webdes from '../../assets/web-desinging.png';
import java from '../../assets/java.jpg'
import '../Skills/Skills.css'

export default function Skills(){
  return (<>
    <section id="skills">
        <span className="skillsTitle">What I do</span>
        <span className="skillsDesc">Highly motivated Full Stack Developer with experience in building and deploying web applications.
         Possesses strong proficiency in both front-end and back-end development utilizing Java for server-side logic and a tech stack of HTML, CSS, JavaScript, and ReactJS to craft user-friendly and interactive interfaces. 
         Eager to contribute to a collaborative team environment and leverage full-stack expertise to deliver innovative solutions.</span>
         <div className="skillbars">
            <div className="skillbar">
                <img src={uiux} alt="" />
                <div className="skillbarText">
                    <h2>UI-UX Designing</h2>
                    <p>write some text</p>
                </div> 
            </div>
            <div className="skillbar">
                <img src={webdes} alt="" />
                <div className="skillbarText">
                    <h2>Web Designing</h2>
                    <p>write some text</p>
                </div>
            </div>
            <div className="skillbar">
                <img src={java} alt="" />
                <div className="skillbarText">
                    <h2>Java Programming</h2>
                    <p>write some text</p>
                </div>
            </div>
         </div>
    </section>
  </>)
}