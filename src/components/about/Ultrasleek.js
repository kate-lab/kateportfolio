import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
// import ReactPlayer from 'react-player'

const Ultrasleek = () => {
  return (
    <div className="ultrasleek">
      <div className="ultra-navbar">
        <Link to="/about">back to about page</Link>
      </div>
      <div className="sleek-image">
        <HashLink smooth to="ultrasleek#intro">
          <div className="greetings">Hi, my name&apos;s Kate.</div>
        </HashLink>
      </div>
      <div className="wholepage-container-center" id="intro">
        <div className="sleek-text">
          <p>My background is in developing, project managing and facilitating playful and creative learning experiences for people of all ages, from toddlers all the way to the board room. When working as a school teacher, I founded the school’s code club, and found a real passion for finding creative technical solutions and talking about code, and so, decided to train as a software engineer.</p>
          <p>I care about people, and am driven to build products which are human-focused, well designed and engaging. I am a passionate and creative strategic thinker with an eye for technical detail. I can develop powerful systems to solve problems. I am also an excellent communicator, able to explain my thinking with clarity and confidence.</p>
          <br /><hr />
          <p>In my spare time I like singing and conducting in <a href="https://www.shechoir.com/london/" rel="noreferrer" target="_blank">SHE Choir</a>, cycling around on my 80s Pinarello, making <a href="https://soundcloud.com/promband" rel="noreferrer" target="_blank">synth pop music</a>, eating doughnuts and hanging out with my rescue dog, <a href="https://www.instagram.com/daisy_sbt/?hl=en" rel="noreferrer" target="_blank">Daisy the staffy</a>.</p>
        </div>
        
        <Link to="/about">
          <div className="sleek-button-dark">back to normal about page</div>
        </Link>
        
      </div>

    </div>
  )
}
export default Ultrasleek