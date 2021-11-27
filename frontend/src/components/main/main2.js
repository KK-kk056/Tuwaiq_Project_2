import React from "react";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  NavDropdown,
  Form,
  Card,
  Col,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router";
export default function Main2() {
  const nav = useNavigate();
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <>
              <Card style={{ marginTop: "10px" }} id="card">
                <Row>
                  <Col id="img1">
                    <img
                      id="imge"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKf3aH3WviVY_cfDWtlDtWSUOSnN1VgWk_Gg&usqp=CAU"
                    />
                  </Col>
                  <Col id="img1">
                    <h6 class="text-light mb-2 mt-1 ">Immune</h6>
                    <h6 class="text-light mb-1 font-weight-light">
                      Last update
                    </h6>
                    <h6 class="text-light mb-1">Sat, 27 Nov 04:32 PM</h6>
                  </Col>
                </Row>
              </Card>
              <br />

              <Card id="card">
                <Row>
                  <Col>
                    <img
                      id="imge"
                      src="https://tawakkalna.sdaia.gov.sa/assets/img/images/barcode.png"
                    />
                  </Col>
                  <Col>
                    <h5>Health Condition</h5>
                    <h6>Health status details and colors</h6>
                  </Col>
                </Row>
              </Card>
              <br />

              <Card id="card">
                <Row>
                  <Col>
                    <img
                      id="imge"
                      src="	https://tawakkalna.sdaia.gov.sa/assets/img/images/qr-code-scan.png
                      "
                    />
                  </Col>
                  <Col>
                    <h5>Use QR Code to visit the gathering place</h5>
                  </Col>
                </Row>
              </Card>
              <br />

              <Card id="card">
                <Row>
                  <Col>
                    <img
                      id="imge"
                      src="		https://tawakkalna.sdaia.gov.sa/assets/img/images/family.png"
                    />
                  </Col>
                  <Col>
                    <h5>Family Members and Sponsored Members</h5>
                  </Col>
                </Row>
              </Card>

              <br />
              <Card id="card">
                <Row>
                  <Col>
                    <img
                      id="imge"
                      src="	https://tawakkalna.sdaia.gov.sa/assets/img/images/statistics.png"
                    />
                  </Col>
                  <Col>
                    <h5>MOH COVID-19 Dashboard</h5>
                  </Col>
                </Row>
              </Card>
              {/* ------------------------------------ */}
            </>
          </Col>

          <Col>
            <Card style={{ marginTop: "10px" }}>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  <Row>
                    <Col>
                      <h3>Name:</h3>
                    </Col>
                    <Col>
                      <h3> ID unmber:</h3>
                    </Col>
                  </Row>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Navbar bg="Dark" expand={false}>
              <Container fluid>
                <Navbar.Brand href="#"></Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title >
                      Tawakkalna
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9z1qQSwtKWl76KuEIBhaLIu5q95TZRiRq7w&usqp=CAU"
                        height="100px"
                      />
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body id="nnav">
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="#action1" id="hover">
                        Home
                      </Nav.Link>
                      <Nav.Link href="#action2" id="hover">
                        Permits
                      </Nav.Link>
                      <Nav.Link href="#action1" id="hover">
                        Reports
                      </Nav.Link>
                      <Nav.Link
                        href="#action2"
                        onClick={() => nav("/dash")}
                        id="hover"
                      >
                        Dashboard
                      </Nav.Link>
                      <Nav.Link href="#action1" id="hover">
                        Notifications
                      </Nav.Link>
                      <Nav.Link href="#action2" id="hover">
                        Organ Donation
                      </Nav.Link>
                    
                    </Nav>
                    <Form className="d-flex"></Form>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
