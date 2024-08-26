import React from "react";
import './footer.css'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav';
function Footer(props){
  let cor = props.color;

    return(
        <Container fluid  className="px-3" >
        <div className="px-custom">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
            <Col md={4} className="mb-0 text-body-secondary">
              <p>&copy; 2024 Company, Inc</p>
            </Col>
            <Col
              md={4}
              className="d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto"
            >
              <a
                href="/"
                className="link-body-emphasis text-decoration-none"
              >
                <svg className="bi me-2" width="40" height="32">
                  <use xlinkHref="#bootstrap" />
                </svg>
              </a>
            </Col>
            <Col md={4}>
              <Nav className="justify-content-end">
                <Nav.Item>
                  <Nav.Link href="http://localhost:5173/" className="px-2 text-body-secondary">
                    Home
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="#" className="px-2 text-body-secondary">
                    About
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </footer>
        </div>
      </Container>
    )
}
export default Footer