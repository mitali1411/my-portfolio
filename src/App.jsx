import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'


const App = () => {
  return (
    <>
      <Navbar/>
      <section className='home'>
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/> 
      </section>
        <Footer/>
    </>
  )
}

export default App