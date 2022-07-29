import React, {useState} from 'react'
import { Outlet} from 'react-router-dom'
import '../Styles/navbar.css'
import { motion, AnimatePresence } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import '../index.css'
import { HashLink as Link} from 'react-router-hash-link';

const Navbar = () => {
  return (
    <section>
      <div className='navbar'>
      <div style={{display:'flex'}}>
            <img src="./Images/star.svg"  width='25'/>
            <Link to='/' style={{padding:'0 5px'}} className='logo'>Mikun</Link>
          </div>
        <div>
          <Link to='/' className='nav-item'>Home</Link>
          <Link to='about' className='nav-item'>About</Link>
          <Link to='#contact' className='nav-item'>Contacts</Link>
        </div>
        <div style={{display:'flex', opacity:'0.5'}}>
         <a href='https://github.com/Mikun18?tab=repositories' target='_blank'><motion.img src="./Images/github.svg" whileHover={{scale:1.2}} style={{width:'30px'}}/></a>
         <motion.img src="./Images/twitter.svg" whileHover={{scale:1.2}} style={{padding:'0 15px', width:'30px'}}/>
         <a href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbFbJVjhdhxClRVtDMWmgGXFpqcCZqrJZdGnwlLkLDtjKqBqVWCSFrWNtfCkCrddFRXQkB' target='_blank'><motion.img src="./Images/envelope.svg" whileHover={{scale:1.2}} style={{width:'30px'}}/></a>
        </div>
      </div>
      <div>
        <SmallerNavabar />
      </div>
        <div>
            <Outlet />
        </div>
    </section>
  )
}

  const SmallerNavabar = () => {

  const [showModal, setShowModal] = useState(false);

  return(
    <section>
      <div className='smaller-navbar'>
          <FontAwesomeIcon icon={faBars} style={{fontSize:'x-large', cursor:'pointer'}} onClick={() => setShowModal(true)}/>
          <div style={{display:'flex'}}>
            <img src="./Images/star.svg"  width='25'/>
            <h2 style={{padding:'0 5px'}}>Mikun</h2>
          </div>
          <div style={{display:'flex', opacity:'0.5'}}>
            <a href='https://github.com/Mikun18?tab=repositories' target='_blank'><motion.img src="./Images/github.svg" whileHover={{scale:1.2}} style={{width:'30px'}}/></a>
            <motion.img src="./Images/twitter.svg" whileHover={{scale:1.2}} style={{padding:'0 15px', width:'30px'}}/>
            <motion.img src="./Images/envelope.svg" whileHover={{scale:1.2}} style={{width:'30px'}}/>
          </div>
      </div>
        <div>
          <AnimatePresence>
           {showModal && <SideBar setShowModal={setShowModal}/>}
          </AnimatePresence>
        </div>

    </section>
  )
}

const SideBar = ({setShowModal}) => {

  const boxVariant = {
    hidden: {
      x: "-100vw",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.2,
        when: "beforeChildren",
        delayChildren: 0.1,
        staggerChildren: 0.2,
      },
    },
    close: {
      x: "-100vw",
      transition: { duration: 0.5 },
    },
  };
  
  return(
    <section className='sidebar-bg'>
      <motion.div className='sidebar' variants={boxVariant} animate='visible' initial='hidden' exit='close'>
        <FontAwesomeIcon icon={faXmark} onClick={() => setShowModal(false)} style={{color:'white', fontSize:'60px', padding:'0 5%', cursor:'pointer'}}/>
        <Link to='/' className='smaller-nav-item' onClick={() => setShowModal(false)}>Home</Link>
        <Link to='about' className='smaller-nav-item' onClick={() => setShowModal(false)}>About</Link>
        <Link to='/#contact' className='smaller-nav-item' onClick={() => setShowModal(false)}>Contacts</Link>
      </motion.div>
    </section>
  )
}

export default Navbar