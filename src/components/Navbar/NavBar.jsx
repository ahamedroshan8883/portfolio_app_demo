import React, { useState } from "react"
import './NavBar.css'
// import { FiMessageSquare } from "react-icons/fi";
import {Link} from "react-scroll";
import logo from "../../assets/logo.png"
import { IoMenu } from "react-icons/io5";

export default function NavBar(){
  let [showmenu,setShowmenu] = useState(false)
  return (<>
    <nav className="navbar">
        <img src={logo} alt="logo" className="logo"/>
        <div className="navList">
          <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="navListItem">Home</Link>
          <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="navListItem">About</Link>
          <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="navListItem">Portfolio</Link>
          <Link activeClass="active" to="contactpage" spy={true} smooth={true} offset={-100} duration={500} className="navListItem">Clients</Link>
        </div>
        <button className="desktopMenubtn" onClick={()=>{
            document.getElementById('contactpage').scrollIntoView({behavior: "smooth"})
        }}>Contact me</button>
        <IoMenu className="mobMenu" onClick={()=>setShowmenu(!showmenu)}></IoMenu>
        <div className="navMenu" style={{display: showmenu? 'flex':'none'}}>
          <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowmenu(!showmenu)}>Home</Link>
          <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowmenu(!showmenu)}>About</Link>
          <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowmenu(!showmenu)}>Portfolio</Link>
          <Link activeClass="active" to="contactpage" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowmenu(!showmenu)}>Contacts</Link>
        </div>
    </nav>
  </>)
};