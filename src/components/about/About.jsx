import React from 'react'
import "./about.css"
import AboutImg from "../../assets/about(1).png";
import CV from "../../assets/Kishore-CV.pdf";
import Info from "./Info"

const About = () => {
  return (
      <section className='about section' id='about'>
        <h2 className='section__title'>About me</h2>
        <span className='section__subtitle'>My Introduction</span>

        <div className='about__container container grid'>
              <img src={AboutImg} alt='' className='about__img' />
              
              <div className='about__data'>
                  <Info />
                  
                  <p className='about__description'>Aspiring Software Development Engineer with a strong coding foundation and problem-solving skills. 
                    My hands-on experience with projects has honed my problem-solving abilities and collaborative mindset. 
                    Thriving in dynamic environments, I am motivated to continuously learn and adapt to emerging technologies while delivering high-quality code.

</p>
                  
                  <a download="" href={ CV } className='button button--flex'>Download CV</a>
              </div>

        </div>
      
      </section>
  )
}

export default About