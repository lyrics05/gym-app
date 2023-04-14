import React from "react";
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"
import logo from "../../assets/logo.png"
import style from "../Footer/Footer.module.css"

const Footer = ()=>{
    return(
        <div className={style.footerContainer}>
            <hr />
            <div className={style.footer}>
               <div className={style.socialLinks}>
               <a href="https://github.com/lyrics05"  target="_blank">
               <img src={github} alt="" />
               </a>
               <a href=" https://www.linkedin.com/in/isidro-rivera-bab6971a5/"  target="_blank" >
               <img src={linkedin} alt="" />
               </a>
               </div>
           
            <div className={style.logoFoter}>
                <img src={logo} alt="" />
            </div>
        </div>
        <div className="blur blur-f1"></div>
        <div className="blur blur-f2"></div>
        </div>
    )
}

export default Footer