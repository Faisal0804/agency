import React from 'react'
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

  return (
    <>
        <Navbar expand="lg" className="navBackground " fixed="top" >
      <Container fluid={true}>
        <Navbar.Brand className='navTitle' href="#home">Agency</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navBarMain">
            <Nav.Link className='navItem' href="#home">Home</Nav.Link>
            <Nav.Link className='navItem' href="#home">About</Nav.Link>
            <Nav.Link className='navItem' href="#home">Services</Nav.Link>
            <Nav.Link className='navItem' href="#home">Pages</Nav.Link>
            <Nav.Link className='navItem' href="#home">Block</Nav.Link>
            <Nav.Link  className='navItem' href="#home">Contact</Nav.Link>
           
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </>
  )
}

export default TopNavigation