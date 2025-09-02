import React from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
   <nav>
  <div className="nav-container">
    <img src="/assets/mentorx-logo.png" />
    <ul>
      <Link to="home" spy={true} smooth={true} offset={0} duration={400} className="li" activeClass="active">
       Home
      </Link>
      <Link to="course" spy={true} smooth={true} offset={0} duration={400} className="li" activeClass="active">
      Course
       </Link>
      
      <Link to="team" spy={true} smooth={true} offset={0} duration={600} className="li" activeClass="active">
      <li>Team</li>
    </Link>

      <Link to="contact" spy={true} smooth={true} offset={0} duration={700} className="li" activeClass="active">
      <li>Contact</li>
       </Link>

      <Link to="support" spy={true} smooth={true} offset={0} duration={800} className="li" activeClass="active">
      <li>Support</li>
       </Link>
       
    </ul>
    <div className="nav-btn">
            <Link to="contact" spy={true} smooth={true} offset={0} duration={700} className="li" activeClass="active">
      <button>Get Started</button>
      </Link>
    </div>
  </div>
</nav>

  )
}

export default Navbar
