import React, { useContext, useRef } from 'react';
import { store } from '../../App';
import { motion } from "framer-motion";
import './IntroCards.scss';

export default function IntroCards () {
  const [state, dispatch] = useContext(store);
  const scrollRef = useRef(null);

  return (
    <div className="container-intro">
      <section className={`left-intro big-card ${state.darkmode ? "dark-card" : "light-card"}`}>
        <h3 className={`${state.darkmode ? "dark-heading" : "light-heading"}`}>{state.language === "english" ? "Crafting Seamless Experiences in the iOS Universe and a lil bit more" : "Crafting Seamless Experiences in the iOS Universe and a lil bit more"}</h3>
        <p className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>{state.language === "english" ? "As a student Ios App Developer with over 2 years of coding proficiency and expertise in iOS development, back-end development, and UI/UX Designing, I am passionate about creating cutting-edge software solutions that drive business growth and enhance user experience. Seeking a challenging role to apply my skills and contribute to innnovative, scalable, and secure software products." : "As a student software developer with over 6 years of coding proficiency and expertise in iOS development, back-end development, and C/C++ programming, I am passionate about creating cutting-edge software solutions that drive business growth and enhance user experience. Seeking a challenging role to apply my skills and contribute to innnovative, scalable, and secure software products."}</p>
      </section>

      <section className="right-intro" ref={scrollRef}>
        <motion.div className={`small-card ${state.darkmode ? "dark-card" : "light-card"}`}
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
            <div className="card-top">
                <h2 className="num green">200</h2>
                <h2 className="sign green-sign">+</h2>
            </div>
            <h4 className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>Codeforces Solutions</h4>
        </motion.div>

        <motion.div className={`small-card ${state.darkmode ? "dark-card" : "light-card"}`}
            initial={{ scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
        >
            <div className="card-top">
                <h2 className="num place blue">{state.language === "english" ? "5+" : "5+"}</h2>
            </div>
            <h4 className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>{state.language === "english" ? `hackathons, participated and organised` : `hackathons, participated and organised  "`}</h4>
        </motion.div>

        <motion.div className={`small-card ${state.darkmode ? "dark-card" : "light-card"}`}
            initial={{ scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
        >
            <div className="card-top">
                <h2 className="num purple">10</h2>
                <h2 className="sign purple-sign">+</h2>
            </div>
            <h4 className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>{state.language === "english" ? "Projects" : "Projects"}</h4>  
        </motion.div>

        <motion.div className={`small-card ${state.darkmode ? "dark-card" : "light-card"}`}
            initial={{ scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
        >
            <div className="card-top">
                <h2 className="num red">100</h2>
                <h2 className="sign percent red-sign">%</h2>
            </div>
            <h4 className={`${state.darkmode ? "dark-eyebrow" : "light-eyebrow"}`}>{state.language === "english" ? "Passion;)" : "Passion;)"}</h4>
        </motion.div>
      </section>
    </div>
  );
}