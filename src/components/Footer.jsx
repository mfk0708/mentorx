import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';


const Footer = () => {
  return (
      <div className='info ' id='support'>
      <div className="info-container">
        <div className="info-main">
        <div className="info-txt">
            <img src='/assets/mentorx-logo.png'></img>
            <p> MentorX Academy empowers learners with expert-led training, real-world projects, and personalized mentorship to build future-ready skills."</p>
            <div className="info-icon">
<FontAwesomeIcon icon={faLinkedinIn} className='icon' />
<FontAwesomeIcon icon={faInstagram} className='icon'/>
</div>
        </div>

        <table>
  <thead>
    <tr>
      <td>Products</td>
      <td>Company</td>
      <td>Support</td>
      <td>Contact Us</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><span className="underline-text">Features</span></td>
      <td><span className="underline-text">About</span></td>
      <td><span className="underline-text">Getting Started</span></td>
      <td><span className="underline-text">thementorxacademy@gmail.com</span></td>
    </tr>
    <tr>
      <td><span className="underline-text">Pricing</span></td>
      <td><span className="underline-text">Careers</span></td>
      <td><span className="underline-text">Help Center</span></td>
      <td><span className="underline-text">8270189438</span></td>
    </tr>
    <tr>
      <td><span className="underline-text">Case Studies</span></td>
      <td><span className="underline-text">Culture</span></td>
      <td><span className="underline-text">Report a bug</span></td>
      <td><span className="underline-text">Kilakarai, Ramanathapuram</span></td>
    </tr>
    <tr>
      <td><span className="underline-text">Reviews</span></td>
      <td><span className="underline-text">Blog</span></td>
      <td><span className="underline-text">Chat Support</span></td>
      <td></td>
    </tr>
    <tr>
      <td><span className="underline-text">Updates</span></td>
      <td className="none"></td>
      <td><span className="underline-text">Server Status</span></td>
      <td></td>
    </tr>
  </tbody>
</table>
        </div>
        
<footer>
          <p>Copyright <span><FontAwesomeIcon icon={faCopyright} className='copyright-icon' /></span> 2025 MentorXAcademy</p>
          <p>All right reserved <span>Terms and Conditons</span> <span>Privacy Policy</span></p>
        </footer>
       
      </div>
       
    </div>
  )
}

export default Footer

