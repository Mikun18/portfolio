import React, {useState} from 'react'
import {Link, Outlet} from 'react-router-dom'
import '../Styles/navbar.css'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import '../index.css'

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
          <a href='https://mikun18.github.io/portfolio/#contact' className='nav-item'>Contacts</a>
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
          {showModal && <SideBar setShowModal={setShowModal}/>}
        </div>

    </section>
  )
}

const SideBar = ({setShowModal}) => {
  return(
    <section className='sidebar-bg'>
      <div className='sidebar'>
        <FontAwesomeIcon icon={faXmark} onClick={() => setShowModal(false)} style={{color:'white', fontSize:'60px', padding:'0 5%', cursor:'pointer'}}/>
        <Link to='/' className='smaller-nav-item' onClick={() => setShowModal(false)}>Home</Link>
        <Link to='about' className='smaller-nav-item' onClick={() => setShowModal(false)}>About</Link>
        <a href='http://localhost:3000/#contact' className='smaller-nav-item' onClick={() => setShowModal(false)}>Contacts</a>
      </div>
    </section>
  )
}

export default Navbar