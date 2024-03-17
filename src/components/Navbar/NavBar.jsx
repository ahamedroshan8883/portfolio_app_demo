import React, { useState } from "react"
import './NavBar.css'
// import { FiMessageSquare } from "react-icons/fi";
import {Link} from "react-scroll";
import logo from "../../assets/logo.png"
import { IoMenu } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";


export default function NavBar(){
  let [showmenu,setShowmenu] = useState(false)
  return (<>
    <nav className="navbar">
        <img src={logo} alt="logo" className="logo"/>
        <div className="heading">
          <h1 className="heading1">ARA</h1>&nbsp;<h3 className="heading2"> Portfolio</h3>
        </div>
        <div className="navList">
          <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="navListItem">< FaHome/>&nbsp;&nbsp;Home</Link>
          <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="navListItem"><FaInfoCircle/>&nbsp;&nbsp;About</Link>
          <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="navListItem"><FaUser/>&nbsp;&nbsp;Portfolio</Link>
          <Link activeClass="active" to="contactpage" spy={true} smooth={true} offset={-100} duration={500} className="navListItem"><BsTelephoneFill/>&nbsp;&nbsp;Clients</Link>
        </div>
        <button className="desktopMenubtn" onClick={()=>{
            document.getElementById('contactpage').scrollIntoView({behavior: "smooth"})
        }}><BsTelephoneFill/>&nbsp;&nbsp;Contact me</button>
        <IoMenu className="mobMenu" onClick={()=>setShowmenu(!showmenu)}></IoMenu>
        <div className="navMenu" style={{display: showmenu? 'flex':'none'}}>
          <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowmenu(!showmenu)}>< FaHome/>&nbsp;&nbsp;Home</Link>
          <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowmenu(!showmenu)}><FaInfoCircle/>&nbsp;&nbsp;About</Link>
          <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowmenu(!showmenu)}><FaUser/>&nbsp;&nbsp;Portfolio</Link>
          <Link activeClass="active" to="contactpage" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowmenu(!showmenu)}><BsTelephoneFill/>&nbsp;&nbsp;Contacts</Link>
        </div>
    </nav>
  </>)
};