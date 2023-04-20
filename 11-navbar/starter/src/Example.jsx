import React from 'react'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'
import { useRef } from 'react'

const Example = () => {
  const [showLinks, setShowLinks] = useState(false)

  const linksRef = useRef(null)

  const toggleLinks = () => {
    console.log(linksRef.current)
    console.log(linksRef.current.getBoundingClientRect())
    setShowLinks(!showLinks)
  }

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  }

  // The reason we need a linksReFcontainer is because without it, the linksStyles object is setting the default height of the links to 0px. So even if it gets toggled, and the truthy condition is applied, the height is still 0px.
  // But by applying that style to the container, it gets set to 0px, and the height of the links are not touched. So when the toggle event takes place, the entire thing can be revealed

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' className='logo' />
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>

        <ul className='links' ref={linksRef} style={linkStyles}>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Example
