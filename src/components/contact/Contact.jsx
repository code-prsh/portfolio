import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {IoLogoInstagram} from 'react-icons/io'
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_doyybld', 'template_0s2q09n', form.current, '73_YD_D5ELkvxXryS')
      
    e.target.reset();
  };
  return (
    <section id='contact'>
       <h5>Get In Touch</h5>
       <h2>Contact Me</h2>

       <div className='container contact-container'>
        <div className='contact-options'>
          <article className='contact-option'>
          <MdOutlineEmail className='contact-option-icon'/>
            <h4>Email</h4>
            <h5>ps773781@gmail.com</h5>
            <a href='mailto:ps773781@gmail.com' target='_blank'>Send a Message</a>
          </article>

          <article className='contact-option'>
          <IoLogoInstagram className='contact-option-icon'/>
            <h4>Instagram</h4>
            <h5>_pranjal_sharma_05</h5>
            <a href='https://instagram.com/_pranjal_sharma_05/' target='_blank'>Send a Message</a>
          </article>

          <article className='contact-option'>
          <FaWhatsapp className='contact-option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91-7665109650</h5>
            <a href='https://api.whatsapp.com/send?phone+91-7665109650' target='_blank'>Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Meassage' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
       </div>
    </section>
  )
}

export default Contact