import React from 'react'

const Navbar = () => {
  return (
<header className='header'>
  <a href="#" className='logo'>Portfolio.</a>

  <nav className='navbar'>
    <a href="#" className='active'>Home</a>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects" >Projects</a>
    <a href="#contact">Contact Me</a>
  </nav>

  <div class="dropdown">
  <button class="btn btn-info" id='nav-list' type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <i class='bx bx-menu' ></i>
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button"><a href="#" className='active'>Home</a></button></li>
    <li><button class="dropdown-item" type="button"><a href="#about">About</a></button></li>
    <li><button class="dropdown-item" type="button"><a href="#skills">Skills</a></button></li>
    <li><button class="dropdown-item" type="button"><a href="#projects" >Projects</a></button></li>
    <li><button class="dropdown-item" type="button"><a href="#contact">Contact Me</a></button></li>
  </ul>
</div>
</header>
  )
}

export default Navbar