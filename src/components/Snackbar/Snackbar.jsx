import React, { useRef, useEffect } from "react"
import { FaCheck } from "react-icons/fa";
import '../Snackbar/Snackbar.css'

export default function Snackbar({snackbar}){
    let snackbarref = useRef();
    console.log(snackbar);
    const showToast = (snackbar)=>{
        if(snackbar){
            snackbarref.current.style.display = snackbar;
        }
    }
    const removeToast = (snackbar)=>{
        if(snackbar){
            snackbarref.current.style.display = "none";
        }
    }
    useEffect(()=>{
        showToast(snackbar);
        setTimeout(()=>{
            removeToast(snackbar);
        },1200);
    },[snackbar])
  return (<>
  <div className="snackbar" ref={snackbarref}>
  <FaCheck className="checkmark"/>&nbsp;<span>Message sent!</span>
  </div>
  </>)
};