import React from "react";
import imagen1 from "../../assets/image1.png"
import imagen2 from "../../assets/image2.png"
import imagen3 from "../../assets/image3.png"
import imagen4 from "../../assets/image4.png"
import nb from "../../assets/nb.png"
import adidas from "../../assets/adidas.png"
import nike from "../../assets/nike.png"
import tick from "../../assets/tick.png"
import style from "../Reasons/Reasons.module.css"

const Reasons = ()=>{
    return(
        <div className={style.reasons} id="Reasons">
           <div className={style.leftR}>
            <img src={imagen1} alt="" />
            <img src={imagen2} alt="" />
            <img src={imagen3} alt="" />
            <img src={imagen4} alt="" />
           </div>
           <div  className={style.right_r}>
             <span>Some reasons</span>
             <div>
                <span className="strokeText">why </span>
                <span>choose us?</span>
             </div>
             <div className={style.detailsR}>
                <div>
                    <img src={tick} alt="" />
                    <span>OVER 140+ EXPERTS COACHS</span>
                </div>
                <div>
                    <img src={tick} alt="" />
                    <span>TRAIN SMARTER AN FASTER THAN BEFORE</span>
                    </div>
                <div>
                    <img src={tick} alt="" />
                    <span> 1 FREE PROGRAM FOR NEW MEMBER</span>
                    </div>
                <div>
                    <img src={tick} alt="" />
                    <span>RELIABE PARTNERS</span>
                    </div>
             </div>
             <span style={{
                color:"var(--gray)",
                fontWeight:"normal"
             }}
              >OUR PARTNERS
              </span>
              <div className={style.partners}>
                <img src={nb} alt="" />
                <img src={adidas} alt="" />
                <img src={nike} alt="" />
              </div>
           </div>
        </div>
    )
}

export default Reasons