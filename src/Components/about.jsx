import React from 'react'
import '../Styles/about.css'
import { SmallerNavabar } from './navbar'

const About = () => {
  return (
    <section>
         <div className='about-header'>
            <img src="./Images/star.svg" alt="" />
            <h1>About</h1>
        </div>

        <article className='about-con'>
          <p>Hello! Odumakinde Ayomikun also known as Mikun, is a second year student of Obafemi Awolowo University. Mikun has always been passionate about web development ever since he was introduced into programming by his brother.</p>
          <p>He picked up web development in 2019, when he finished Secondary School. He started with HTML5, CSS3 and JS which he learnt for about two years. He started creating simple static websites, then he proceeded in creating responsive and user friendly websites. After a while, he heard about a javascript library for building user interfaces which is called React. </p>
          <p>Then he picked up React during the end of his first year. The learning process spanned for about 5 months and at this point, his CSS3 skills were getting a lot better. So he started cloning websites and developing some. You can check them out <a href='https://mikun18.github.io/portfolio/#portfolio'>here</a>.</p>
          <p>Mikun is currently working as a freelance frontend web developer and he is always interested in a challenge. Reach out to Mikun <a href='https://mikun18.github.io/portfolio/#contact'>here</a> to connect!</p>
        </article>
    </section>
  )
}

export default About