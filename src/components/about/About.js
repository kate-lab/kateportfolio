import React, { useState } from 'react'
import Projects from '../projects/Projects.js'
import Cv from '../Cv.js'
import Contact from '../Contact.js'
import Skills from '../cv/Skills.js'

const About = () => {

  const [splash, setSplash] = useState(true)

  const hideSplash = () => {
    setSplash(false)
  }

  return (
    <>
      <div className="start-page">
        {
          splash ?
            <div className='splash'>
              <div className='title'>
                <div className='border'>
                  <h1>KATE WESTBROOK</h1>
                  <h2>Junior Software Engineer / Learning Specialist</h2>
                  <button onClick={hideSplash} className='splash-button'>Enter Site</button>
                </div>
              </div>

            </div>
            :
            null
        }
      </div>
      <div className="working-inline" id="about"></div>
      <div className="container page">
        <div className="about">
          <h3 className="page-title">Hello, my name is Kate.</h3>
          <p>My background is in developing, project managing and facilitating playful and creative learning experiences for people of all ages, from toddlers all the way to the board room. When working as a school teacher, I founded the school’s code club, and found a real passion for finding creative technical solutions and talking about code, and so, decided to train as a software engineer.</p>
          <p>I care about people, and am driven to build products which are human-focused, well designed and engaging. I am a passionate and creative strategic thinker with an eye for technical detail. I can develop powerful systems to solve problems. I am also an excellent communicator, able to explain my thinking with clarity and confidence.</p>
          <p>I love to work in an agile and dynamic environment that challenges me to learn and grow my skill set, where creativity and new ideas are embraced, and where my passion for my work is celebrated.</p>
          <hr />
          <p>In my spare time I like singing and conducting in <a href="https://www.shechoir.com/london/" rel="noreferrer" target="_blank">SHE Choir</a>, cycling around on my 80s Pinarello, making <a href="https://soundcloud.com/promband" rel="noreferrer" target="_blank">synth pop music</a>, eating doughnuts and hanging out with my rescue dog, <a href="https://www.instagram.com/daisy_sbt/?hl=en" rel="noreferrer" target="_blank">Daisy the staffy</a>.</p>

          {/* <div className="clads">
                <Link to="/about/rawr">
                  <div className="clad-link">Make it Myspace<br /><span className="tiny">(not mobile friendly, obvs)</span></div>
                </Link>
              
                <Link to="/about/ultrasleek">
                  <div className="clad-link">Make it ultrasleek</div>
                </Link>
            
                <Link to="/about/rawr">
                  <div className="clad-link">Make it trippy</div>
                </Link>
              </div> */}
        </div>
      </div>
      <div className="working-inline" id="skills"></div>
      <Skills />
      <div className="working-inline" id="projects"></div>
      <Projects />
      <div className="working-inline" id="cv"></div>
      <Cv />
      <Contact />
    </>
  )
}

export default About