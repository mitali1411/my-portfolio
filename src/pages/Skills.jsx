import React from 'react'
import html from '../assets/HTML5.png'
import css from '../assets/csslogo.png'
import js from '../assets/js.png'
import react from '../assets/react.svg'
import redux from '../assets/redux.svg'
import nodejs from '../assets/nodejs.svg'
import mongodb from '../assets/mongodb.svg'
import express from '../assets/express.webp'
import bootstrap from '../assets/bootstrap.png'
import materialUI from '../assets/MaterialUI.svg'
import tailwind from '../assets/Tailwind.png'

const Skills = () => {
  return (
    <section className="skill-section py-5" id='skills'>
        <h3 className='mt-4'>MY <span>SKILLS</span></h3>

        <div className="skills d-flex flex-wrap align-items-center justify-content-center">
          <div className="box">
            <img src={html} alt="" />
            <h4>HTML5</h4>
          </div>
          <div className="box">
            <img src={css} alt="" />
            <h4>CSS3</h4>
          </div>
          <div className="box">
            <img src={js} alt="" />
            <h4>JavaScript</h4>
          </div>
          <div className="box">
            <img src={react} alt="" />
            <h4>React.js</h4>
          </div>
          <div className="box">
            <img src={redux} alt="" />
            <h4>Redux.js</h4>
          </div>
          <div className="box">
            <img src={nodejs} alt="" />
            <h4>Node.js</h4>
          </div>
          <div className="box">
            <img src={express} alt="" />
            <h4>Express.js</h4>
          </div>
          <div className="box">
            <img src={mongodb} alt="" />
            <h4>MongoDB</h4>
          </div>
          <div className="box">
            <img src={materialUI} alt="" />
            <h4>MaterialUI</h4>
          </div>
          <div className="box">
            <img src={bootstrap} alt="" />
            <h4>Bootstrap</h4>
          </div>
          <div className="box">
            <img src={tailwind} alt="" />
            <h4>Tailwind CSS</h4>
          </div>
        </div>
      </section>
  )
}

export default Skills