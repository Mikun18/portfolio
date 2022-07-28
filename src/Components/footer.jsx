import React from 'react'
import '../Styles/footer.css'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <section className='footer'>
        <div className='footer-text'>
            <img src="./Images/white-star.svg" />
            <p>&copy; Made by Mikun</p>
        </div>
        <div className='footer-logo'>
           <a href='https://github.com/Mikun18?tab=repositories' target='_blank'><motion.img src="./Images/github.svg" whileHover={{scale:1.2}}/></a> 
           <motion.img src="./Images/twitter.svg" whileHover={{scale:1.2}}/>
           <a href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbFbJVjhdhxClRVtDMWmgGXFpqcCZqrJZdGnwlLkLDtjKqBqVWCSFrWNtfCkCrddFRXQkB' target='_blank'><motion.img src="./Images/envelope.svg" whileHover={{scale:1.2}}/></a>
        </div>
    </section>
  )
}

export default Footer