import React from 'react'
import '../Styles/portfolio.css'
import {  motion } from 'framer-motion'
import Footer from './footer'
import Contact from './contact'


const Portfolio = () => {
    const portfolioVariant = {
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
    <motion.section variants={portfolioVariant} whileInView='visible' initial='hidden' viewport={{once: true}} id='portfolio'>
        <div className='portfolio-header'>
            <img src="./Images/star.svg" alt="" />
            <h1>Portfolio</h1>
            <h3>RECOGNITION AND ACCOMPLISHMENTS</h3>
        </div>

        <article className='portfolio'>
            <div className='portfolio-card'>
                <img src="./Images/netflix.jpg" alt="" />
                <div className='portfolio-card-text'>
                    <h2>NETFLIX CLONE</h2>
                    <a href='https://mikun18.github.io/static-netflix-clone/' target='_blank' className='check-btn'>Check it out</a>
                </div>
            </div>
            <div className='portfolio-card-reverse'>
                <img src="./Images/filmhouse.jpg" alt="" />
                <div className='portfolio-card-text'>
                    <h2>FILMHOUSE CLONE</h2>
                    <a href='https://mikun18.github.io/filmhouse-clone/' target='_blank' className='check-btn'>Check it out</a>
                </div>
            </div>
            <div className='portfolio-card'>
                <img src="./Images/page.jpg" alt="" />
                <div className='portfolio-card-text'>
                    <h2>LANDING PAGE</h2>
                    <a href='https://mikun18.github.io/static-landingpage/' target='_blank' className='check-btn'>Check it out</a>
                </div>
            </div>
            <div className='portfolio-card-reverse'>
                <img src="./Images/sunset.jpg" alt="" />
                <div className='portfolio-card-text'>
                    <h2>WEATHER APP</h2>
                    <a href='https://mikun18.github.io/weather-app/' target='_blank' className='check-btn'>Check it out</a>
                </div>
            </div>
        </article>

        <div>
            <Contact />
            <Footer />
        </div>
    </motion.section>
  )
}

export default Portfolio