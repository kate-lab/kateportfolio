import React from 'react'

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact container">
        <div className="working-inline" id="contact"></div>
        <h3 className="page-title">Contact me</h3>
        <div className="contact-details">
          <p>I am based in E17 (yes, like <a href="https://youtu.be/41c9Tw3HV-U" rel="noreferrer" target="_blank">the band</a>!) in London, UK. Get in touch: <a href="mailto:katewestbrook@live.co.uk" rel="noreferrer" target="_blank">katewestbrook@live.co.uk</a></p>
          <div className="socials">
            <a href="https://www.linkedin.com/in/katewestbrook/" rel="noreferrer" target="_blank">
              <div className="card">LinkedIn</div>
            </a>
            <a href="https://twitter.com/codegoggles" rel="noreferrer" target="_blank">
              <div className="card">Twitter</div>
            </a>
            <a href="https://github.com/kate-lab" rel="noreferrer" target="_blank">
              <div className="card">GitHub</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact