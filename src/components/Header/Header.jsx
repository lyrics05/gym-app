import React from "react";
import logo from "../../assets/logo.png"
import style from "./Header.module.css"

const Header = ()=>{
    return(
        <div className={style.header}>
          <img className={style.logo} src={logo} alt="" />
          <ul className={style.headerMenu}>
            <li>Home</li>
            <li>Programs</li>
            <li>Why us</li>
            <li>Plans</li>
            <li>Testimonials</li>
          </ul>
          
        </div>
    )
}

export default Header