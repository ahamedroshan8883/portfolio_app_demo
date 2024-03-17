import React, { useRef, useState } from "react"
import '../contact/Contact.css'; 
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import emailjs from '@emailjs/browser'
import Snackbar from "../Snackbar/Snackbar";
import { BiLogoGmail } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export default function Contact(){
  const form = useRef();
  const [snackbar,setSnackbar] = useState(null);
  const handleForm = (e)=>{
    e.preventDefault();
    emailjs
      .sendForm('service_v0al62i', 'template_0l8j37y', form.current, {
        publicKey: '1IZkr4thQwC_vjDfA',
      })
      .then(
        () => {
          if('SUCCESS'){
          setSnackbar("inline");
          }
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      setSnackbar(null);
  }
  return (<>
        <section id="contactpage">
          <Snackbar className="snackbar" snackbar={snackbar}/>
          <h1 className="contactpageTitle">Contact me</h1>
          <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
          <form className="contactForm" ref={form} onSubmit={(e)=>handleForm(e)}>
            <input type="text" name="from_name" id="" className="name" placeholder="Your Name"/><FaUserCircle className="icon1"/>
            <input type="email" name="from_email" id="" className="name" placeholder="Your Email"/><BiLogoGmail className="icon2"/>
            <textarea className="message" name="message" rows="5" placeholder="Your Message"/><FaEnvelope className="icon3"/>
            <button type="submit" className="submitbtn">Submit</button>
          </form>
          <div className="links">
            <FaFacebook className="link"/>
            <FaWhatsapp className="link"/>
            <FaInstagramSquare className="link"/>
            <FaLinkedin className="link"/>
          </div>
        </section>
  </>)
};