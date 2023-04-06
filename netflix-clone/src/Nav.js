import React, {useState, useEffect} from "react";
import img from "./images/N1.jpg.png";
import "./Nav.css";

function Nav() {
 const[show, handleShow] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if(window.scrollY > 100){
          handleShow(true);
        } else handleShow(false)
      });
      return() => {
        window.removeEventListener("scroll", [] );
      };
    }, [] );
   
   return (
    <div className={`nav ${show && "nav_black"}`}>
      <img 
      className="nav_logo" 
      src={img} 
      alt="Netflix logo" />
    </div>
  );
}

export default Nav;
