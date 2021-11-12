import React from 'react'

const Projects = () => {
  return (
    <div className="page">
      <div className="container">
        <h3 className="page-title">My Projects</h3>
        <div className="projects">

          <div className="project-container">
            <h4 className="project-title">My Class</h4>
            <img src="https://res.cloudinary.com/dysirhng8/image/upload/v1635956769/portfolio/Screenshot_2021-11-01_at_09.26.01_uu7pls.png" alt="My Class"></img>
            
            <div className="project-description">
              <p>A vibrant and engaging content management application for teachers to build up a library of lesson plans to share with their students and find inspiration from other teachers. This full stack application was built using Django/PostgreSQL back end and React front end, and was an opportunity for me to develop C.R.U.D. operations and one to one/one to many relationships within my database. It is mobile responsive to support teachers on the go and students working from limited hardware.</p>
              <div className="project-links">
                <a href="http://class-content-creator.herokuapp.com/"  rel="noreferrer" target="_blank" className="card demo">explore demo</a>
                <a href="https://github.com/kate-lab/class"  rel="noreferrer" target="_blank" className="card demo">see code</a>
              </div>
            </div>
          </div>

          <div className="project-container">
            <h4 className="project-title">How Green is Your Plate</h4>
            <img src="https://res.cloudinary.com/dysirhng8/image/upload/v1635968334/portfolio/Screenshot_2021-10-10_at_19.24.54_tpbpy1.png" alt="Green Plate"></img>
        
            <div className="project-description">
              <p>A recipe indexing and sharing website that helps users calculate the environmental impact of their recipes based on the ingredients included in them. This full stack application was built using MongoDB, Express, Node.js and React, and was a great opportunity to build my understanding of relationships within MongoDB and using Bootstrap for layout and React Select to filter recipes. </p>
              <div className="project-links">
                <a href="https://greenplate.herokuapp.com/"  rel="noreferrer" target="_blank" className="card demo">explore demo</a>
                <a href="https://github.com/kate-lab/project-3"  rel="noreferrer" target="_blank" className="card demo">see code</a>
              </div>
            </div>
          </div>

          <div className="project-container">
            <h4 className="project-title">Place App</h4>
            <img src="https://res.cloudinary.com/dysirhng8/image/upload/v1635970029/portfolio/Screenshot_2021-11-03_at_20.07.02_wiewom.png" alt="Place App"></img>
            
            <div className="project-description">
              <p>Built in a two day paired hackathon, this application lets users explore the world. This front-end React app pulls data from the <a href="https://developer.roadgoat.com/#introduction" rel="noreferrer" target="_blank">Road Goat API</a> using Axios requests to display up to date information about places around the world. </p>
              <div className="project-links">
                <a href="https://kateandiuryplaceapp.netlify.app/"  rel="noreferrer" target="_blank" className="card demo">explore demo</a>
                <a href="https://github.com/kate-lab/Place-App"  rel="noreferrer" target="_blank" className="card demo">see code</a>
              </div>
            </div>
          </div>

          <div className="project-container">
            <h4 className="project-title">Bubble Pop</h4>
            <img src="https://res.cloudinary.com/dysirhng8/image/upload/v1635969102/portfolio/1630696639707_qja4ex.jpg" alt="Bubble Pop"></img>
            
            <div className="project-description">
              <p>A bubbly fun version of space invaders built in vanilla Javascript, with playable character choices and score accumulator, built using a grid system.</p>
              <div className="project-links">
                <a href="https://kate-lab.github.io/Project-1/"  rel="noreferrer" target="_blank" className="card demo">explore demo</a>
                <a href="https://github.com/kate-lab/Project-1"  rel="noreferrer" target="_blank" className="card demo">see code</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Projects