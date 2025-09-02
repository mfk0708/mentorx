import emailjs from "emailjs-com";
import { useRef, useState } from "react";
import "./Contact.css";

const Contact = () => {
  const nameRef = useRef();
  const numberRef = useRef();   // ✅ replaced email with number
  const msgeRef = useRef();

  const [errors, setErrors] = useState({});

  
  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!nameRef.current.value.trim()) {
      formErrors.name = "Name is required";
      isValid = false;
    }

    if (!numberRef.current.value.trim()) {
      formErrors.number = "Number is required";
      isValid = false;
    } else {
      const numberPattern = /^[0-9]{7,15}$/; // simple number validation
      if (!numberPattern.test(numberRef.current.value)) {
        formErrors.number = "Invalid number format";
        isValid = false;
      }
    }

    if (!msgeRef.current.value.trim()) {
      formErrors.message = "Message cannot be empty";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  // ✅ Handle send
  function handleSend(e) {
    e.preventDefault();

    if (!validateForm()) return; // Stop if invalid

    const templateParams = {
      name: nameRef.current.value,
      number: numberRef.current.value, 
      message: msgeRef.current.value,
    };

    emailjs
      .send(
        "service_tim2p8i",  
        "template_j8zibkk", 
        templateParams,
        "HYPp2uUFJan7tJdPm" 
      )
      .then(
        (response) => {
          alert("✅ Email sent successfully!");
        },
        (error) => {
          alert("❌ Failed to send");
          console.error(error);
        }
      );

   
    nameRef.current.value = "";
    numberRef.current.value = "";
    msgeRef.current.value = "";
    setErrors({});
  }

  return (
    <div className="contact-container" id="contact">
      <div className="contact-txt">
        <h1>To Help You Choose the Right Course, You Need to Book a Consultation</h1>
        <p>
          "Not sure which course fits you best? Schedule a consultation and get personalized advice"
        </p>
        <img src="/assets/call-icon.png" className="icon" alt="icon"/>
      </div>

      <div className="contact-info">
        <h1>Get Consultant</h1>

        <input type="text" placeholder="Enter your name" ref={nameRef} />
        {errors.name && <p className="error">{errors.name}</p>}

        <input type="text" placeholder="Enter your number" ref={numberRef} />
        {errors.number && <p className="error">{errors.number}</p>}

        <textarea placeholder="Enter your message" ref={msgeRef}></textarea>
        {errors.message && <p className="error">{errors.message}</p>}

        <button onClick={handleSend}>Send</button>
      </div>

      <img src="/assets/call-icon.png" className="icon2" alt="icon2"/>
    </div>
  );
};

export default Contact;
