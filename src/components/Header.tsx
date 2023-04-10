import React from 'react';
import Navbar from "./Navbar"

const Header = () => {
  return (
    <header>
    <div>
      <Navbar />
      <h1 className= "font-[Telma] font-bold text-3xl">Discovering and nurturing the next big star, one model at a time</h1>
      <p>Whether you're an aspiring model looking to start your career or an 
        established model looking to take your career to the next level, we have 
        the resources and expertise to help you succeed
      </p>

      <div>
          <button> Apply now</button>
      </div>

      <a href="#contact" className="scroll__down">Scroll Down </a>
    </div>
    </header> 
    
  )
}

export default Header