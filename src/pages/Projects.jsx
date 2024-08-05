import React from 'react'
import project1 from '../assets/cryptomania.png'
import project2 from '../assets/News.png'
import project3 from '../assets/Khatabook.png'
import project4 from '../assets/WeatherAPI.png'
import project5 from '../assets/JS-Todo.png'
import project6 from '../assets/QR-Generator.png'
import project7 from '../assets/BMI.png'
import project8 from '../assets/AuthApp.png'


const Projects = () => {
  return (
    <section id='projects' className="project-section">
      <h3 className='mt-4'>MY <span>PROJECTS</span></h3>

      <div className="projects">
      <div className="box1">
        <img src={project1} alt="" />
        <div className="layer">
          <h4>Cryptomania</h4>
          <p>Build on Redux toolkit, MaterialUI for UI, integrated trending crypto API using axios.</p>
          <a href="https://cryptomania-iota.vercel.app/" target='_blank'><i class='bx bx-link-external'></i></a>
        </div>
         </div>

      <div className="box1">
        <img src={project8} alt="" />
        <div className="layer">
          <h4>Authentication App</h4>
          <p>Build on Redux Toolkit, here user can login and register, without doing so, he'll unable to reach Home Page.</p>
          <a href="https://authentication-app-ashen-delta.vercel.app/register" target='_blank'><i class='bx bx-link-external'></i></a>
        </div>
      </div>

      <div className="box1">
        <img src={project2} alt="" />
        <div className="layer">
          <h4>News</h4>
          <p>Build on React.js, using Bootstrap for UI design, intergrated news api using axios.</p>
          <a href="https://news-app-six-sable.vercel.app/" target='_blank'><i class='bx bx-link-external'></i></a>
        </div>
      </div>

      <div className="box1">
        <img src={project3} alt="" />
        <div className="layer">
          <h4>KhataBook</h4>
          <p>Build on React.js, using Bootstrap for UI design, applying CRUD functionality. </p>
          <a href="https://khatabook-hazel.vercel.app/" target='_blank'><i class='bx bx-link-external'></i></a>
        </div>
      </div>

      <div className="box1">
        <img src={project4} alt="" />
        <div className="layer">
          <h4>Weather API</h4>
          <p>Build using JavaScript, integrated Weather API using fetch method to fetch anywhere weather data.</p>
          <a href="https://weather-app-psi-sable.vercel.app/" target='_blank'><i class='bx bx-link-external'></i></a>
        </div>
      </div>

      <div className="box1">
        <img src={project5} alt="" />
        <div className="layer">
          <h4>JS Todo</h4>
          <p>Build on JavaScript, here we can save todos and delete todos. </p>
          <a href="https://js-todos.vercel.app/" target='_blank'><i class='bx bx-link-external'></i></a>
        </div>
      </div>

      <div className="box1">
        <img src={project6} alt="" />
        <div className="layer">
          <h4>QR Generator</h4>
          <p>Build on JavaScript, intergrated QR api using fetch method to generate QR for entered URL or text.</p>
          <a href="https://qr-generator-one-gamma.vercel.app/" target='_blank'><i class='bx bx-link-external'></i></a>
        </div>
      </div>

      <div className="box1">
        <img src={project7} alt="" />
        <div className="layer">
          <h4>BMI Calculator</h4>
          <p>Build on JavaScript, here we can calculated our BMI that shows us that we are either healthy, overweight, undeweight or obese.</p>
          <a href="https://bmi-calculator-seven-psi.vercel.app/" target='_blank'><i class='bx bx-link-external'></i></a>
        </div>
      </div>
      </div>

    </section>
  )
}

export default Projects


