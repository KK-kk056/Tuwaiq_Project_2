import React from "react";
import { Col, Row, Container, ListGroup } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import { Navbar, Offcanvas, Nav, Form, Card, CardGroup } from "react-bootstrap";
import A from "./img/A.png";
import B from "./img/B.png";
import C from "./img/C.png";
import D from "./img/D.png";
import E from "./img/E.png";
import F from "./img/F.png";

const Dashboard = () => {
  const nav = useNavigate();
  const [data, setData] = useState([]);
  const [drivingLicenses, setDrivingLicenses] = useState({});
  const [vehicles, setVehicles] = useState({});
  const [vehiclesLnsurance, setVehiclesLnsurance] = useState({});
  const [trafficViolations, setTrafficViolations] = useState({});
  const [passports, setPassports] = useState({});
  const [appointments, setAppointments] = useState({});
  const uId = sessionStorage.getItem("userId");
  useEffect(() => {
    axios({
      method: "post",
      url: "/users/usersinfo",
      data: {
        id: uId,
      },
    })
      .then((res) => {
        setData(res.data);
        setDrivingLicenses(res.data.drivingLicenses);
        setVehicles(res.data.vehicles);
        setVehiclesLnsurance(res.data.vehiclesLnsurance);
        setTrafficViolations(res.data.trafficViolations);
        setPassports(res.data.passports);
        setAppointments(res.data.appointments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <Navbar bg="Dark" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                Tawakkalna
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9z1qQSwtKWl76KuEIBhaLIu5q95TZRiRq7w&usqp=CAU"
                  height="100px"
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body id="nnav">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link id="hover">Home</Nav.Link>
                <Nav.Link id="hover">Permits</Nav.Link>
                <Nav.Link id="hover">Reports</Nav.Link>
                <Nav.Link id="hover">Dashboard</Nav.Link>
                <Nav.Link onClick={() => nav("/login")} id="hover">
                  Log out
                </Nav.Link>
                <Nav.Link id="hover"></Nav.Link>
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
              <Card.Img id="card2" src={A} />
              <Card.Body>
                <Card.Title>drivingLicenses</Card.Title>

                <ListGroup.Item>
                  License Status: {drivingLicenses.LicenseStatus}
                </ListGroup.Item>
                <ListGroup.Item>
                  Issuing Date: {drivingLicenses.IssuingDate}{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  Expiry Date: {drivingLicenses.ExpiryDate}
                </ListGroup.Item>
              </Card.Body>
            </Card>
            <Card className="card">
              <Card.Img id="card2" src={B} />
              <Card.Body>
                <Card.Title>vehicles</Card.Title>

                <ListGroup.Item>
                  model Year: {vehicles.modelYear}
                </ListGroup.Item>
                <ListGroup.Item>
                  Major Color: {vehicles.MajorColor}{" "}
                </ListGroup.Item>
                <ListGroup.Item>Name Car: {vehicles.nameCar}</ListGroup.Item>
              </Card.Body>
            </Card>
            <Card className="card">
              <Card.Img id="card2" src={C} />
              <Card.Body>
                <Card.Title>vehiclesLnsurance</Card.Title>

                <ListGroup.Item>
                  Policy IssueDate: {vehiclesLnsurance.PolicyIssueDate}
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  Policy ExpireDate: {vehiclesLnsurance.PolicyExpireDate}{" "}
                </ListGroup.Item>
              </Card.Body>
            </Card>
          </CardGroup>
        </Row>

        <Row style={{ marginTop: "30px" }}>
          <CardGroup>
            <Card className="card">
              <Card.Img id="card2" src={D} />
              <Card.Body>
                <Card.Title>trafficViolations</Card.Title>

                <ListGroup.Item>
                  {" "}
                  paid Violations: {trafficViolations.paidViolations}
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  unpai dViolations: {trafficViolations.unpaidViolations}{" "}
                </ListGroup.Item>
              </Card.Body>
            </Card>
            <Card className="card">
              <Card.Img id="card2" src={E} />
              <Card.Body>
                <Card.Title>passports</Card.Title>

                <ListGroup.Item>
                  Vassport Type: {passports.vassportType}
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  Issuing Place: {passports.issuingPlace}{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  Expiry Date: {passports.expiryDate}{" "}
                </ListGroup.Item>
              </Card.Body>
            </Card>
            <Card className="card">
              <Card.Img id="card2" src={F} />
              <Card.Body>
                <Card.Title>appointments</Card.Title>
                <ListGroup.Item>
                  {" "}
                  Judicial Appointments: {
                    appointments.judicialAppointments
                  }{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  QiyasTest Appointments: {
                    appointments.giyasTestAppointments
                  }{" "}
                </ListGroup.Item>
              </Card.Body>
            </Card>
          </CardGroup>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
