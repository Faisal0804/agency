import React, { useState,useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const TopNavigation = () => {
  const [scrollPosition,setScrollPosition]=useState(
    {
        navBarTitle:'navTitle',
        navBarBackground:'navBackground',
        navBarIetm:'navItem'
    }
   );
    const onScroll =()=>{
      if(window.scrollY>100){
        setScrollPosition({navBarTitle:'navTitleScroll',navBarBackground:'navBackgroundScroll', navBarIetm:'navBarItemScroll'})
      }else if(window.scrollY<100){
        setScrollPosition({navBarTitle:'navTitle',navBarBackground:'navBackground', navBarIetm:'navItem'})

      }     

    }
    useEffect(()=>{
      addEventListener('scroll',onScroll);
    },[]);




  return (
    <>
        <Navbar expand="lg"  className={scrollPosition.navBarBackground} fixed="top" >
      <Container fluid={true}>
        <Navbar.Brand className={scrollPosition.navBarTitle} href="#home">Agency</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navBarMain">
            <Nav.Link className={scrollPosition.navBarTitle} href="#home">Home</Nav.Link>
            <Nav.Link className={scrollPosition.navBarTitle} href="#home">About</Nav.Link>
            <Nav.Link className={scrollPosition.navBarTitle} href="#home">Services</Nav.Link>
            <Nav.Link className={scrollPosition.navBarTitle} href="#home">Pages</Nav.Link>
            <Nav.Link className={scrollPosition.navBarTitle} href="#home">Block</Nav.Link>
            <Nav.Link  className={scrollPosition.navBarTitle} href="#home">Contact</Nav.Link>
           
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </>
  )
}

export default TopNavigation