import React from 'react';
import {Navbar, Container,NavDropdown,Nav ,Form,Image}from "react-bootstrap"
import { useNavigate } from 'react-router';


const Header = () => {
  const nav = useNavigate ();
	return <div className="App">
		<Navbar id="Nav" expand="lg" className="nav">
  <Container fluid>
    
    <Navbar.Brand  href="#"></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
      
      <NavDropdown title="Sign in"id="idd" onClick ={()=> nav('/register')}> </NavDropdown>
      <NavDropdown title="Tawakkalna Services" id="idd"></NavDropdown>
      <NavDropdown title="How Tawakkalna works" id="idd"></NavDropdown>
      <NavDropdown title="About Tawakkalna" id="idd"></NavDropdown>
        <NavDropdown title="Arithmetic" id="idd">
         
          <NavDropdown.Divider />
          
        </NavDropdown>
        
      </Nav>
      <Form className="d-flex">
       <Image className ="img"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9z1qQSwtKWl76KuEIBhaLIu5q95TZRiRq7w&usqp=CAU"></Image>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>


	</div>;
};

export default Header;
