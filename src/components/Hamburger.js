import React, { useState } from "react" ;
import "./Hamburger.css" ;



const Hamburger = ({ open , setOpen }) => {
  return (
    <button onClick={() => setOpen(!open)} className={`hamburger hamburger--collapse hamburger--emphatic ${open && "is-active"}`} type="button">
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};


export default Hamburger ;
