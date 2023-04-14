import React, { useRef } from "react";
import style from "../Join/Join.module.css"
import emailjs from "@emailjs/browser"

const Join = ()=>{
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_xxkvmbl', 'template_vtj0je4', form.current, 'q4taQ1MKBifMRtjBk')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    return(
        <div className={style.join} id="join-us">
            <div className={style.leftJ}>
                <hr />
                <div>
                    <span className="strokeText">READY TO</span>
                    <span> LEVEL UP</span>
                </div>

                <div>
                    <span>YOUR BODY</span>
                    <span className="strokeText"> WHIT US?</span>
                </div>
            </div>
            <div className={style.rightJ}>
                <form ref={form} action="" className={style.emailContainer} onSubmit={sendEmail}>
                    <input type="email" name="user_email" placeholder="Enter your email address" />
                    <button className="btn btn-j">Join now</button>
                </form>
            </div>
        </div>
    )
}

export default Join