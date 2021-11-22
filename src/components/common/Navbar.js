import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
  // Location
  const location = useLocation()

  useEffect(() => {
    // Trigger rerender when path changes
  }, [location.pathname])

  return (
    <div className="navbar">
      <div className="home-link wide-container">
        <HashLink to="/#about">KATE WESTBROOK</HashLink>
      </div>
      <div className="links wide-container">
        <div className="link-inside">
          <HashLink to="/#skills" className="card">Skills</HashLink>
          <HashLink to="/#projects" className="card">Projects</HashLink>
        </div>
        <div className="link-inside">
          <HashLink to="/#cv" className="card">CV</HashLink>
          <HashLink to="/#contact" className="card">Contact</HashLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar