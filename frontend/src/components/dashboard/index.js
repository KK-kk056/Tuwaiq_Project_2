import React from 'react';
import {Col, Row, Container} from "react-bootstrap"
import { useNavigate } from "react-router";
import {Navbar,Offcanvas,Nav,NavDropdown,Form ,Card,CardGroup} from "react-bootstrap";  
import A from "./img/A.png"
import B from "./img/B.png"
import C from "./img/C.png"
import D from "./img/D.png"
import E from "./img/E.png"
import F from "./img/F.png"


const Dashboard = () => {
	const nav = useNavigate();
	return <div className="App">

<Navbar bg="Dark" expand={false}>
              <Container fluid>
                <Navbar.Brand href="#"></Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                  aria-labelledby="offcanvasNavbarLabel"
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">
                      Tawakkalna
                      <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9z1qQSwtKWl76KuEIBhaLIu5q95TZRiRq7w&usqp=CAU"
          height="100px"
        />
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body id="nnav">
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="#action1"onClick ={()=> nav('/home')}id="hover">Home</Nav.Link>
                      <Nav.Link href="#action2" id="hover">Permits</Nav.Link>
                      <Nav.Link href="#action1" id="hover">Reports</Nav.Link>
                      <Nav.Link href="#action2" id="hover">Dashboard</Nav.Link>
                      <Nav.Link href="#action1" id="hover">Notifications</Nav.Link>
                      <Nav.Link href="#action2" id="hover">Organ Donation</Nav.Link>
                     
                    </Nav>
                    <Form className="d-flex"></Form>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
			
		<Container>
 
 <Row>
 <CardGroup>
  <Card id="card">
    <Card.Img  id="card2"
     src={A} />
    <Card.Body>
      <Card.Title>drivingLicenses</Card.Title>
    </Card.Body>
    
  </Card>
  <Card id="card">
    <Card.Img  id="card2"
     src={B} />
    <Card.Body>
      <Card.Title>vehicles</Card.Title>
    </Card.Body>

  </Card>
  <Card id="card">
    <Card.Img  id="card2"
     src={C} />
    <Card.Body>
      <Card.Title>vehiclesLnsurance</Card.Title>
    </Card.Body>
  
  </Card>
</CardGroup>
 </Row>

 <Row style={{marginTop:"30px"}}>
 <CardGroup>
  <Card id="card">
    <Card.Img  id="card2"
     src={D} />
    <Card.Body>
      <Card.Title>trafficViolations</Card.Title>
    </Card.Body>
    
  </Card>
  <Card id="card">
    <Card.Img  id="card2" 
     src={E} />
    <Card.Body>
      <Card.Title>passports</Card.Title>
    </Card.Body>

  </Card>
  <Card id="card">
    <Card.Img id="card2"
     src={F} />
    <Card.Body>
      <Card.Title>appointments</Card.Title>
    </Card.Body>
  
  </Card>
</CardGroup>
   
 </Row>
</Container>
	</div>;
};

export default Dashboard;
