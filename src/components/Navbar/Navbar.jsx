

import './navbar.scss'
import logo from '../../Assets/logo.png'
import netflix from '../../Assets/netflix.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurger, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Navbar() {
  const [showMenu,setShowMenu]=useState(false)
  const [scroll,setScrool]=useState(false)
  const scrollHandler=()=>{
    if(window.scrollY>=66){
      setScrool(true)
    }else if(window.scrollY<=66){
      setScrool(false)
  }}
  useEffect(() => {
    window.addEventListener('scroll',scrollHandler);
    return()=>{
      window.removeEventListener('scroll',scrollHandler);

    }
    
  })
  

  return (
  <div className={`nav__container  ${scroll?'nav__white':'nav__normal'}`}>
    <div className="container">
    <nav className="nav">
     <div className="logoContainer">
       Thunder
      </div>
      <div className="nav__links ">
        <Link to='/' className='active'>Home </Link>
        <Link to='/Series' >Services</Link>
        <Link to='/movies' >Pricing</Link>
        <Link to='/new' >Team</Link>
        <Link to='/mylist' >Client</Link>
        <Link to='/mylist' >Log in </Link>
        <button className='btn'>
          Sign up
        </button>
      </div>
      <div className="toggle-icon" onClick={()=>setShowMenu(!showMenu)}>
      <FontAwesomeIcon icon={ faBurger} />
      </div>
      
     
    </nav>
    {showMenu&&<div className="nav__toggle ">
        <Link to='/' className='active'>Home </Link>
        <Link to='/Series' >Services</Link>
        <Link to='/movies' >Pricing</Link>
        <Link to='/new' >Team</Link>
        <Link to='/mylist' >Client</Link>
        <Link to='/mylist' >Log in </Link>
        <button className='btn'>
          Sign up
        </button>
      </div>}
    </div>
  </div>
  )
}

export default Navbar
