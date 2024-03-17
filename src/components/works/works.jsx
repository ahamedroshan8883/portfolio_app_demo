import React from "react"
import portfolio1 from '../../assets/for portfolio/portfolio1.jpg'
import portfolio2 from '../../assets/for portfolio/portfolio2.jpg'
import portfolio3 from '../../assets/for portfolio/portfolio3.jpg'
import portfolio4 from '../../assets/for portfolio/portfolio4.jpg'
import portfolio5 from '../../assets/for portfolio/portfolio5.jpg'
import portfolio6 from '../../assets/for portfolio/portfolio6.jpg'
import '../works/works.css'

export default function Works(){
  return (<>
    <section id="works">
            <h1 className="workTitle">My Portfolio</h1>
        <span className="workDesc">
            I take pride in paying attention to the smallest details and making sure my work is pixel perfect.
            I am excited to bring my skills and experience to help businesses achieve their goal and create a strong online presences.
        </span>
        <div className="workingImgs">
            <img src={portfolio1} alt="" className="workingImg" />
            <img src={portfolio2} alt="" className="workingImg" />
            <img src={portfolio3} alt="" className="workingImg" />
            <img src={portfolio4} alt="" className="workingImg" />
            <img src={portfolio5} alt="" className="workingImg" />
            <img src={portfolio6} alt="" className="workingImg" />
        </div>
        <button className="workbtn">See More</button>
    </section>
  </>)
};