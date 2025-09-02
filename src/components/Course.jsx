import React from 'react'
import './Course.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'

const Course = () => {
  return (
    <div className='course-container ' id='course'>
    {/* course part-1 */}
        <div className='green-border'>
            <div className="green-box"></div>
        </div>
        <div className="course-content">
    <div className="header">
      <h1>Our Courses</h1>
      <button>Explore Courses</button>
      </div>
      <div className='course-cards'>
           <div className='green-border2'>
            <div className="green-box2"></div>
        </div>

        <div className="course">
            <img src='/assets/uiux.jpg'></img>
            <div className="course-text">
            <h3 className='title'>UI/UX DESIGN</h3>
            <h3 className='price'>899/-</h3>

            <div className='experience'>
            <h5>Beginner</h5> 
            <h5>30 Days</h5>
            </div>

            <h2 className='description'>Introduction To User Experience Design</h2>
            <p>View Course</p>
        </div>
        </div>

       <div className="course">
            <img src='/assets/uiux.jpg'></img>
            <div className="course-text">
            <h3 className='title'>Front-end Dev</h3>
            <h3 className='price'>899/-</h3>

            <div className='experience'>
            <h5>Beginner</h5> 
            <h5>30 Days</h5>
            </div>

            <h2 className='description'>Introduction To Front-end Development</h2>
            <p>View Course</p>
           
        </div>
        </div>
        <div className="course">
            <img src='/assets/uiux.jpg'></img>
            <div className="course-text">
            <h3 className='title'>Networking</h3>
            <h3 className='price'>899/-</h3>

            <div className='experience'>
            <h5>Beginner</h5> 
            <h5>30 Days</h5>
            </div>

            <h2 className='description'>Introduction To Networking basics</h2>
            <p>View Course</p>
        </div>
        </div>
        
      </div>
    </div>

    {/* course part 2 */}
    <div className='course2-container'>
        <h2>Our Courses sre Suitable for...</h2>
        <div className="video-sec">
            <div className="green-border3">
                <div className="green-box3"></div>
            </div>
             <div className="green-border4">
                <div className="green-box4"></div>
            </div>
        <img src='/assets/person2.jpg' className='video'></img>
        </div>

        <div className="course2-cards">
               <div className="green-border5">
                <div className="green-box5"></div>
            </div>
            <div className="card2">
                <div className="icon-text">
                <FontAwesomeIcon icon={faGraduationCap} className='icon' />
                <h1>For Beginners Students</h1>
            </div>
            <p>Perfect for beginners!No experience needed - just curiosity and a willingness
                to learn.Ideal for students and freshers or anyone starting from scratch
            </p>
            </div>

             <div className="card2">
                <div className="icon-text">
                <FontAwesomeIcon icon={faGraduationCap} className='icon' />
                <h1>For Beginners Students</h1>
            </div>
            <p>Perfect for beginners!No experience needed - just curiosity and a willingness
                to learn.Ideal for students and freshers or anyone starting from scratch
            </p>
            </div>

             <div className="card2">
                <div className="icon-text">
                <FontAwesomeIcon icon={faGraduationCap} className='icon' />
                <h1>For Beginners Students</h1>
            </div>
            <p>Perfect for beginners!No experience needed - just curiosity and a willingness
                to learn.Ideal for students and freshers or anyone starting from scratch
            </p>
            </div>

             <div className="card2">
                <div className="icon-text">
                <FontAwesomeIcon icon={faGraduationCap} className='icon' />
                <h1>For Beginners Students</h1>
            </div>
            <p>Perfect for beginners!No experience needed - just curiosity and a willingness
                to learn.Ideal for students and freshers or anyone starting from scratch
            </p>
            </div>
        </div>

      
    </div>


    </div>
  )
}

export default Course
