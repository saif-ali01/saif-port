import React, { useRef } from 'react'
import "../Css/Contact.css"
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { BsGithub, BsInstagram, BsLinkedin, BsTelephone } from 'react-icons/bs'
import { HiOutlineMail } from "react-icons/hi"

const Contact = () => {
  const form = useRef();

  const [sub, ChangeSub] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_io494ns', 'template_ew0fybi', form.current, 'OuaVq3U0GZOLlSh4p')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    ChangeSub(true)

  };
  const submit = () => {
  }
  const contact = "<Contact>";
  const contact1 = "</Contact>";

  return (
    <div className='Contact'>
        <h1>Contact Me</h1>
      <div className="contact-left" >
        {contact}

        <p id='contact'> If you have other request or question, <br /> don’t hesitate to use the form.</p>
        <form action="" method='' ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder='Name' name='from-name' className='inn' required />
          <input type="email" placeholder='Email' name='Email' className='inn1' required />
          <input type="text" placeholder='Subject' name='Subject' required />
          <textarea type="text" placeholder='Message' name='message' className='msg' required />
          <button className='btn' onClick={submit} >SUBMIT</button>
        </form>
        <div className="sub" >{sub ? "Thanks For Contact me.. I will respond to you as soon as possible" : null}</div>
        {contact1}

      </div>
      <div className="contact-right">
        <div className="conntact-section">
          <div className="icon">
            <BsTelephone /> : 9069819600
          </div>
          <div className="icon">
            <HiOutlineMail /> : saifali01X@gmail.com
          </div>
          <div className="social">
            <div className="icon">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/saif-ali01" ><BsGithub /></a>
            </div>
            <div className="icon">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/saif-ali-285581243" > <BsLinkedin /></a>
            </div>
            <div className="icon">
              <a target="_blank" rel="noopener noreferrer" href='https://instagram.com/0.1.saif?igshid=YmMyMTA2M2Y='><BsInstagram /></a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact