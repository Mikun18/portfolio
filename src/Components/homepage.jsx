import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import '../Styles/homepage.css'
import { motion } from 'framer-motion'
import Portfolio from './portfolio'


const Homepage = () => {

  const textVariant = {
    hidden: {
      x: "-100vw",
      opacity: 0
    },

    visible: {
      x: 0,
      transition: {duration: 1},
      opacity: 1
    }
    
  }

  const imageVariant = {
    hidden: {
      x: "100vw",
      opacity: 0
    },
    visible: {
      x: 0,
      transition: {duration: 1.5},
      opacity: 1
    }
  }
  return (
    <div>
      <section className='hero-page'>
          <motion.article className='hero-text' variants={textVariant} initial='hidden' animate='visible'>
              <h2>HI, I'M MIKUN</h2>
              <h2 style={{padding:'0px 0'}}>A FRONTEND <span><img src="./Images/star.svg"  width='35'/> DEVELOPER</span></h2>
              <h2>BASED IN NIGERIA</h2>

              <div className='sub-hero-text'>
                <h4 style={{paddingRight:'10px'}}>DESIGN</h4>
                <img src="./Images/small-star.svg" width='20' />
                <h4 style={{padding:'0px 10px'}}>DEVELOPMENT</h4>
                <img src="./Images/small-star.svg" width='20' />
                <h4 style={{padding:'0px 10px'}}>WEBFLOW</h4>
              </div>

              <div>
                <button className='hero-btn-1'>Get a project?</button>
                <Link to='#contact' className='hero-btn-2'>Let's talk</Link>
              </div>
          </motion.article>

          <motion.article variants={imageVariant} initial='hidden' animate='visible'><img src="./Images/Avatar2.png" style={{width:'100%', marginTop:'10%'}}/></motion.article>
      </section>

      <div>
        <WorkMarquee />
        <Portfolio />
      </div>
    </div>
  )
}

const WorkMarquee = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -1600],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 8,
          ease: "linear",
        }
      }
    }
  };

    return(
      <section className='marquee-con'>
        <marquee className='marquee'>
          <ul>
            <li style={{fontSize:'25px'}}>BRANDING</li>
            <li><img src="./Images/small-star.svg" width='20'/></li>
            <li style={{fontSize:'25px'}}>DEVELOPMENT</li>
            <li><img src="./Images/small-star.svg" /></li>
            <li style={{fontSize:'25px'}}>DESIGN</li>
            <li><img src="./Images/small-star.svg" /></li>
            <li style={{fontSize:'25px'}}>STRATEGY</li>
            <li><img src="./Images/small-star.svg" /></li>
            <li style={{fontSize:'25px'}}>PRODUCT DESIGN</li>
            <li><img src="./Images/small-star.svg" /></li>
            <li style={{fontSize:'25px'}}>ART DIRECTION</li>
            <li><img src="./Images/small-star.svg" /></li>
            <li style={{fontSize:'25px'}}>BRANDING</li>
            <li><img src="./Images/small-star.svg" width='20'/></li>
            <li style={{fontSize:'25px'}}>DELOPMENT</li>
            <li><img src="./Images/small-star.svg" /></li>
            <li style={{fontSize:'25px'}}>DESIGN</li>
            <li><img src="./Images/small-star.svg" /></li>
            <li style={{fontSize:'25px'}}>STRATEGY</li>
            <li><img src="./Images/small-star.svg" /></li>
            <li style={{fontSize:'25px'}}>PRODUCT DESIGN</li>
            <li><img src="./Images/small-star.svg" /></li>
            <li style={{fontSize:'25px'}}>ART DIRECTION</li>
            <li><img src="./Images/small-star.svg" /></li>
          </ul>
        </marquee>
      </section>
    )
}

export default Homepage