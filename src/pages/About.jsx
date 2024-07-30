import React from 'react'
import image2 from '../assets/girl4.png'


const About = () => {
  return (
    <section id='about' className='py-5'>
    <div className='about-content d-flex align-items-center justify-content-center'>

    <div className="left2">
      <img src={image2} alt="" />
    </div>

      <div className="right2">
        <h3 className='mt-4'>ABOUT <span>ME</span></h3>
        <h4 className='mt-1'>Full Stack Developer</h4>
        <p>I'm a passionate web developer with a knack for crafting clean and user-friendly experiences. I leverage the power of the MERN stack to build dynamic and scalable web applications. My toolbox also includes popular UI frameworks like Material UI, Tailwind CSS, and Bootstrap, allowing me to tailor the look and feel to perfectly match your vision.</p>
  
      <a href="#" className='btn-box'>More About Me</a>
    
      </div>
    </div>
    </section>
  )
}

export default About