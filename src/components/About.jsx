import React from 'react'
import './About.css'
import { Link } from 'react-scroll';

const About = () => {
  return (
    <div className='about-container' id='home'>

        <div className='about-textsec'>
            <h1>Learn Skill Development <br/>With Online Course</h1>
            <p>Learn in-demand skills through flexible online courses and boost your career with ease </p>

            <div className='email-input'>
                <input type='text' placeholder='Enter your email'/>
                <Link to="contact" spy={true} smooth={true} offset={0} duration={700} >
                <button> Get Started</button>
                </Link>
              
            </div>

            <ul>
              <li>Front-end Development</li>
              <li>Networking</li>
              <li>UI/UX Design</li>
              <li>Microsoft 365</li>
              <li>Cloud Infrastructure</li>
              <li>IOT</li>
            </ul>   
                 
        </div>

        <div className='about-imgsec'>
          <img src='/assets/person.png' className='person1'/>
          <img src='/assets/person2.jpg'className='person2'/>
          <img src='/assets/person3.jpeg'className='person3'/>
          <img src='/assets/person4.jpg'className='person4'/>
        </div>
    
      
    </div>
  )
}

export default About
