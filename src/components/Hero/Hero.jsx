import React from "react"
import style from "./Hero.module.css"
import Header from "../Header/Header"
import hero_image from "../../assets/hero_image.png"
import hero_image_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"
import calories from "../../assets/calories.png"
import { motion } from "framer-motion"


const Hero = ()=>{
    const transition = {type: "spring", duration: 3}
   return(
      <div className={style.hero}>
        <div className="blur hero-blur"></div>
        <div className={style.leftH}>
            <Header/>
            <div className={style.theBestAdd}>
                <motion.div
                     initial = {{left:"238px"}}
                     whileInView={{left:"8px"}}
                     transition={{...transition, type:"tween"}}
                >
            
                </motion.div>
                <span>The best fitness club in the world</span>
            </div>

            <div className={style.heroText}>
                <div>
                    <span className="strokeText">Shape </span>
                    <span>Your</span>
                </div>
                <div>
                    <span>Ideal Body</span>
                </div>
                <div>
                <span> In here we will help you to shape and build your ideal body an live uo your life
                 to fullest</span>
                </div>
            </div>
            <div className={style.figures}>
                <div>
                    <span>+140</span>
                    <span>expert coachs</span>
                </div>

                <div>
                    <span>+978</span>
                    <span>members joined</span>
                </div>

                <div>
                    <span>+50</span>
                    <span>fitness programs</span>

                </div>

            </div>
            <div className={style.heroBotons}>
                <button className={style.btn}>Get started</button>
                <button className={style.btn}>Learn more</button>
            </div>
        </div> 
        <div className={style.rightH}>
            <button className={style.btn}>Join now</button>

            <motion.div 
              initial={{right:"-1rem"}}
              whileInView={{right:"4rem"}}
              transition={transition}
            className={style.heartRate}>
                <img src={heart} alt="" />
                <span>Heart Rate </span>
                <span>116 bpm</span>
            </motion.div>
            <img className={style.heroImage} src={hero_image} alt="" />
            <motion.img
              initial={{right:"11rem"}}
              whileInView={{right:"20rem"}}
              transition={transition}
            className={style.heroImageBack} src={hero_image_back} alt="" />
            <motion.div
              initial={{right:"37rem"}}
              whileInView={{right:"28rem"}}
              transition={transition}
            className={style.calories}>
                <img src={calories} alt="" />
               <div>
                  <span>calories Burned</span>
                  <span>220 Kcal</span>
               </div>
            </motion.div>
        </div>
      </div>
   )
}

export default Hero