import React from 'react'
import ReactPlayer from 'react-player'

const Cv = () => {

  return (
    <div className="cv page container">
      <h3 className="page-title">Work History</h3>
      <div className="job-holder">
        <br />
        <div className="job-title">
          <div>2019-21 &emsp; Schools Programme Coordinator, RIBA</div>
        </div>
        <p>Working across the UK to design, project manage and deliver over 16,000 creative learning experiences. Managing partnerships between architectural professionals and schools with curriculum linked digital resources, training and advice.</p>
        <p>Developing and delivering a CPD programme for over 200 professional participants and managing a team of 8 staff educators.</p>
        <br />

        <div className="video-holder wrapper">
          <ReactPlayer
            url="https://www.youtube.com/embed/5vSoal3-bKk?t=41"
            className="video-player"
            width="100%"
            height="100%"
            controls="true"
          />
        </div>
        <p className="subtitle" >Learning programme development and delivery for the RIBA&apos;s first VR exhibition, <a href="https://www.architecture.com/explore-architecture/exhibitions/freestyle" rel="noreferrer" target="_blank">Freestyle</a>.</p>
        <br />
        <div className="job-title">
          <div>2017-18 &emsp; Class Teacher & Music Lead, Park School</div>
        </div>
        <p>Managing budget, staff and long term strategy for organisation-wide music provision. Full time class teacher, Google classroom educator, Code Club leader and coding curriculum advisor.</p>
        <br />
        <div className="job-title">
          <div>2015-16 &emsp; Learning Project Coordinator, Design Museum</div>
        </div>
        <p>Providing support for over 10,000 participants taking part in UK wide digital design education project, Design Ventura. Communications, event and workshop design and delivery, e-learning development.</p>
        <br />
        <div className="video-holder wrapper">
          <ReactPlayer
            url="https://vimeo.com/170177851"
            className="video-player"
            width="100%"
            height="100%"
            controls="true"
          />
        </div>
        <p className="subtitle" >Design toolkit videos for Design Museum&apos;s Design Ventura programme.</p>
        <br />
        <div className="linkedin-link-cv card">
          <a href="https://www.linkedin.com/in/katewestbrook/" rel="noreferrer" target="_blank"><p>See more work history on my LinkedIn.</p></a>
        </div>

      </div>

      <h3 className="page-title">Education</h3>
      <div className="education-holder">
        <br />
        <div className="education-div">
          <div className="ed-title">
            <div className="date">2021&emsp;General Assembly</div>
          </div>
          <p>Software Engineering Immersive Course (full time).</p>
        </div>
        <br />
        <div className="education-div">
          <div className="ed-title">
            <div className="date">2016-17&emsp;Goldsmiths, University of London</div>
          </div>
          <p>Postgraduate Certificate in Education (PGCE) Teacher Training with QTS.</p>
        </div>
        <br />
        <div className="education-div">
          <div className="ed-title">
            <div className="date">2008-12&emsp;University Of Leeds  </div>
          </div>
          <p>BA Joint Honours in History of Art and Italian. </p>
        </div>
        <br />
        <div className="education-div">
          <div className="ed-title">
            <div className="date">2010-11&emsp;Universit?? di Ferrara</div>
          </div>
          <p>Erasmus Placement in the Facolt?? di Lettere e Filosofia.</p>
        </div>
      </div>

    </div>
  )
}

export default Cv