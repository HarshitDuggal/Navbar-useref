import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks, setshowLinks] = useState(false);
  const linksContainerref = useRef(null);
  const linksref = useRef(null); 
  useEffect(() => {
    const linksheight = linksref.current.getBoundingClientRect().height
    if(showLinks){
      linksContainerref.current.style.height = `${linksheight}px`
    }
    else{
      linksContainerref.current.style.height = '0px'
    }
  }, [showLinks]); 
  return <nav>
    <div className='nav-center'>
      <div className='nav-header'>
        <img src={logo} alt='logo'/>
        <button className='nav-toggle' onClick={() => {setshowLinks(!showLinks)}}>
          <FaBars/>
        </button>
      </div>
      <div className='links-container show-container' ref={linksContainerref}>
        <ul className='links' ref={linksref}>
          {links.map((link) => {
            const {id,url,text} = link;;
            return <li key={id}>
              <a href={url}>{text}</a> 
            </li>
          })}
        </ul>
      </div>
      <ul className='social-icons'>
        {social.map((sociallinks) => {
          const {id,url,icon} = sociallinks;
          return <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        })}
      </ul>
    </div>    
  </nav>
}

export default Navbar
