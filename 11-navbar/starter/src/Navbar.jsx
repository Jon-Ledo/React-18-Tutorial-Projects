import React from 'react'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'
import { useRef } from 'react'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)

  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  const toggleLinks = () => {
    // console.log(linksRef.current)
    // console.log(linksRef.current.getBoundingClientRect())
    // console.log(linksRef.current.getBoundingClientRect().height)

    setShowLinks(!showLinks)
  }

  // dynamic approach
  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  }

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' className='logo' />
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        {/* {showLinks && ( */}
        {/* <div className='links-container'> */}
        {/* <div
          className={
            showLinks ? 'links-container show-container' : 'links-container'
          }
        >
          <ul className='links'>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              )
            })}
          </ul>
        </div> */}
        <div
          className='links-container'
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <a href={link.url}>{link.text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        {/* )} */}

        {/* social links */}
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            return (
              <li key={socialIcon.id}>
                <a href={socialIcon.url}>{socialIcon.icon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
