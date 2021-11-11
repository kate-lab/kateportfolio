import React from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'

const Rawr = () => {
  return (
    <div className="rawr">
      <div className="rawr-navbar">
        <Link to="/about">Take me back to 2021</Link>
      </div>
      <div className="about-rawr">
        
        <div className="profile-card">
          <h3>Kate</h3>
          <div className="image-wrapper">
            <img src="https://res.cloudinary.com/dysirhng8/image/upload/v1634334823/portfolio/376622_AjYzxaST_pbeqez.png" alt="kate"></img>
            <div className="status">
              <p>&quot;(ಠ_ಠ)&quot;</p>
              <p>London, UK</p>
              <p>Last Login:<br/>8/27/2006</p>
            </div>
          </div>
          <div className="contact-box">
            <div className="contact-box-title">Contacting Kate</div>
            <div className="contact-box-grid">
              <div className="column">
                <div>
                  <a href="mailto:katewestbrook@live.co.uk" rel="noreferrer" target="_blank">
                    <img src="https://img.icons8.com/ios/20/000000/mail.png"/> Send an email
                  </a>
                </div>
                <div>
                  <a href="https://twitter.com/codegoggles" rel="noreferrer" target="_blank">
                    <img src="https://img.icons8.com/ios-glyphs/20/000000/twitter--v1.png"/> Add on Twitter
                  </a>  
                </div>
              </div>
              <div className="column">
                <div>
                  <a href="https://www.linkedin.com/in/katewestbrook/" rel="noreferrer" target="_blank">
                    <img src="https://img.icons8.com/ios-glyphs/20/000000/linkedin.png"/> LinkedIn
                  </a>
                </div>
                <div>
                  <a href="https://github.com/kate-lab" rel="noreferrer" target="_blank">
                    <img src="https://img.icons8.com/material-outlined/20/000000/github.png"/> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="url">
            <strong>Myspace URL:</strong><br/>
            katewestbrook.com/about/rawr
          </div>
          <div className="music">
            <strong>I make music:</strong><br/>
            <div>
              <ReactPlayer 
                url="https://soundcloud.com/promband/cobweb"
                width='100%'
                height='100%'
              />
            </div>
          </div>
        </div>
        <div className="about-container">
          <div className="network">
            Kate is in your extended network
          </div>
          <div className="about-box">
            <div className="about-box-title">Kate&apos;s Blurbs</div>
            <h4>About me:</h4>
            <p>My background is in developing, project managing and facilitating playful and creative learning experiences for people of all ages, from toddlers all the way to the board room. When working as a school teacher, I founded the school’s code club, and found a real passion for finding creative technical solutions and talking about code, and so, decided to train as a software engineer.</p>
            <p>I care about people, and am driven to build products which are human-focused, well designed and engaging. I am a passionate and creative strategic thinker with an eye for technical detail. I can develop powerful systems to solve problems. I am also an excellent communicator, able to explain my thinking with clarity and confidence.</p>
            <h4>Who I&apos;d like to meet:</h4>
            <p>I love to work in an agile and dynamic environment that challenges me to learn and grow my skill set, where creativity and new ideas are embraced, and where my passion for my work is celebrated.</p>
            <div className="about-box-title">Kate&apos;s Friend Space</div>
            <div className="gap">Kate has <span className="orange">LOADS OF</span> things she loves:</div>
            <div className="friends-holder">
              <a href="https://www.instagram.com/daisy_sbt/?hl=en" rel="noreferrer" target="_blank">
                <div className="friend-card">
                  <p>Daisy the Dog</p>
                  <img src="https://res.cloudinary.com/dysirhng8/image/upload/v1634322072/portfolio/Image_from_iOS_mnwahs.jpg" alt="Daisy"></img>
                </div>
              </a>
              <a href="https://www.shechoir.com/london/" rel="noreferrer" target="_blank">
                <div className="friend-card">
                  <p>SHE Choir LDN</p>
                  <img src="https://www.shechoir.com/london/images/womenshour.jpg" alt="she choir"></img>
                </div>
              </a>
              <a href="https://www.crosstown.co.uk/" rel="noreferrer" target="_blank">
                <div className="friend-card">
                  <p>Crosstown</p>
                  <img src="https://res.cloudinary.com/dysirhng8/image/upload/v1634333957/portfolio/Vietnamese-Coffee-12_gc26ju.webp" alt=""></img>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rawr