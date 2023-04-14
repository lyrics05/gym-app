import React from "react";
import style from "../Programs/Programs.module.css"
import {programsData} from "../../data/programsData"
import rightArrow from "../../assets/rightArrow.png"

const Programs = ()=>{
    return(
      <div className={style.programs} id="programas">
         <div className={style.programsHeader}>
            <span className="strokeText">Explore our</span>
            <span>Programs</span>
            <span className="strokeText">to shape you</span>
         </div>
         <div className={style.programsCategory}>
             {programsData?.map((p)=>{
                 return(
                    <div className={style.category}>
                    {p.image}
                    <span>{p.heading}</span>
                    <span>{p.details}</span>
                    <div className={style.joinNow}>
                        <span>Join now</span>
                        <img src={rightArrow} alt="" />
                    </div>
                </div>
                 )
             })}
         </div>
      </div>
    )
}


export default Programs