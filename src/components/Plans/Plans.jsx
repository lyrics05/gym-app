import React from "react";
import style from "../Plans/Plans.module.css"
import {plansData} from "../../data/plansData"
import whiteTick from "../../assets/whiteTick.png"


const Plans = ()=>{
    return(
 <div className={style.plansContainer}>
     <div className="blur plans-blur1"></div>
     <div className="blur plans-blur2"></div>
    <div className={style.programsHeader}>
        <span className="strokeText">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span  className="strokeText">NOW WHIT US</span>
    </div>
     <div className={style.plans}>
        {plansData?.map((p,i)=>{
            return(
               <div className={style.plan} key={i}>
                     {p.icon}
                     <span>{p.name}</span>
                     <span>$ {p.price}</span>

                     <div className={style.features}>
                       {p.features?.map((f,i)=>{
                        return(
                    <div className={style.feature}>
                        <img src={whiteTick} alt="" />
                        <span key={i}>{f}</span>
                    </div>
                        )
                       })}
                     </div>
                     <div>
                        <span>See more benefits</span>
                     </div>
                     <button className={style.btn}>join now</button>
               </div>
            )
        })

        }
     </div>
     
 </div>
    )
}

export default Plans