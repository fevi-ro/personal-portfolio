import React from "react";
import { useState, useEffect } from "react";
import {Navbar, Nav, Container} from "react-bootstrap";
import logo from '../assets/img/logow.png';
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'


export const NavBar = () => {

    const [activeLink, setActiveLink] = useState ('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect (() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
                setScrolled(false)
            }
        }
      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
    }, [])

const onUpdateActiveLink = (value) => {
    setActiveLink(value);
}


    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo"src={logo} alt= "F.E. Roma"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
<span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className ={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('home')} >Home</Nav.Link>
              <Nav.Link href="#skills" className ={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className ={activeLink === 'project' ? 'active navbar-link': 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
  
            </Nav>
            <span className="navbar-text">
<div className="social-icon">
    <a className="in" href="https://www.linkedin.com/in/foevaroma/"> <img className="in" src={navIcon1} alt="" /></a>
    <a href="https://www.xing.com/profile/FoteiniEvanthia_Roma"> <img src={navIcon2} alt="" /></a>
    <a href="https://github.com/fevi-ro"> <img src={navIcon3} alt="" /></a>
</div>
<Nav.Link href="#contact"  onClick={()=> onUpdateActiveLink('contact')}><button><span>Let's Connect</span></button></Nav.Link>


            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

//social-icon add social media links and github link

/*comments BroJect */