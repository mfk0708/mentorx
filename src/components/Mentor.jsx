import { useState } from "react";
import "./Mentor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Mentor = () => {
  const quotes = [
 "Find your potential in the world of technology by becoming an expert in Skills and Development. Join Us in learning the latest skill development and technologies, and we will create innovative solutions that positively impact the world.",

 "Unlock your future in tech by gaining essential skills and practical knowledge. Join us to build real-world solutions that drive innovation and create meaningful impact in communities across the globe.",

"Discover your path to success through technology, learning in-demand skills that shape the future. Work with mentors and projects to develop practical experience and make a lasting difference together.",

"Explore your potential with cutting-edge tech skills and expert mentorship. Learn, practice, and grow in a supportive environment where innovation, collaboration, and real-world results define your success.",

"Begin your journey in tech with skills that matter. Learn through hands-on experiences, guided by mentors who help you turn knowledge into innovative solutions that solve real problems in society.",

"Step into the world of skills and development with us. Build your confidence and career through guided mentorship, real-world projects, and a future-forward approach to technological innovation.",

"Gain the confidence and tools to lead in technology. With structured learning, real projects, and expert guidance, we help you turn your ideas into practical solutions that truly matter."
  ];
  const [quoteIndex, setQuoteIndex] = useState(0);

  const handleLeft = () => {
    setQuoteIndex(
      (prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length
    );
  };

  const handleRight = () => {
    setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  };
  return (
    <div className="mentor-container" id="team">
      <h1 className="mentor-h1">
        The Collab Team with High Technical Skills <br /> Help You Learn a New
        Profession
      </h1>

      <div className="mentor-cardContainer">
        <div className="mentor-card">
          <h1>01</h1>
          <h3>Theoritical Knowledge</h3>
          <p>
            Theoretical knowledge helps us understand the concepts and reasons
            behind how things work.
          </p>
        </div>

        <div className="mentor-card">
          <h1>02</h1>
          <h3> Practical Skills</h3>
          <p>
            {" "}
            Practical knowledge comes from real-world experience and helps us
            apply what we learn
          </p>
        </div>

        <div className="mentor-card">
          <h1>03</h1>
          <h3> Work with a Mentor</h3>
          <p>
            {" "}
            Working with a mentor offers guidance, support, and real-world
            insights to help you grow faster.
          </p>
        </div>

        <div className="mentor-card">
          <h1>04</h1>
          <h3>Final Test or Project</h3>
          <p>
            {" "}
            The final test or project lets you apply what you’ve learned and
            showcase your skills.
          </p>
        </div>
      </div>

      {/* mentor-quotes  */}

      <div className="mentor-quotes">
        <div className="mentorQuotes-img">
        <img src="/assets/mentor.jpeg" />
        </div>
        <div className="mentor-text">
        <p key={quoteIndex}>{quotes[quoteIndex]}</p>

          <h3>MentorX Academy</h3>

          <div className="mentor-btn">
            <button
              onClick={handleLeft}
              >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button className="active" onClick={handleRight}>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
