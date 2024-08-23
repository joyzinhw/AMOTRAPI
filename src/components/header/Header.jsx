import React from "react";
import './header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SearchForm from "../searchBar/SearchForm";
import LoginButton from "../buttons/LoginButton";
import SignUpButton from "../buttons/SignUpButton";

function Header(props) {
    return (
        <div>
            <Navbar expand="lg" className="custom-navBar mb-5">
                <Container>
                    <Navbar.Brand href="#home">LOGO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        {/* Caso eu queira voltar como estava devo por o mx */}
                        <div className="mb-auto custom-search">
                            <SearchForm color='green' />
                        </div>
                        {/* <div className="btn-container d-flex">
                            <LoginButton />
                            <SignUpButton />
                        </div> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Header 