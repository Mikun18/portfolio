import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobileScreen, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import '../Styles/contact.css'
import {  motion } from 'framer-motion'

const Contact = () => {
    const contactVariant = {
        hidden: {
            opacity: 0,
            y: 80
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {duration: 1}
        }
    }
  return (
    <motion.section id='contact' variants={contactVariant} whileInView='visible' initial='hidden' viewport={{once: true}}>
         <div className='portfolio-header'>
            <img src="./Images/star.svg" alt="" />
            <h1>Get in touch today!</h1>
        </div>

        <article className='contact'>
            <div className='contact-card'>
                <FontAwesomeIcon icon={faEnvelope} className='contact-icon'/>
                <h4>Message Me</h4>
                <p>ayomikunodumakinde@gmail.com</p>
            </div>

            <div className='contact-card'>
                <FontAwesomeIcon icon={faMobileScreen} className='contact-icon'/>
                <h4>Call us</h4>
                <p>+234 706 631 6649</p>
            </div>

            <div className='contact-card'>
                <FontAwesomeIcon icon={faLocationDot} className='contact-icon'/>
                <h4>Address</h4>
                <p>Ondo State, Nigeria</p>
            </div>
        </article>
    </motion.section>
  )
}

export default Contact