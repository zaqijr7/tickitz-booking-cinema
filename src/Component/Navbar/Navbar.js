import React, { useState } from 'react';
import {Container, 
        Nav, 
        Navbar, 
        NavDropdown, 
        Modal, 
        Button, 
        InputGroup,
        FormControl
} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import navbarBrand from '../../Assets/Images/logo-navbar.png';
import './Navbar.css';

function NavigationBar({children}){
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(true);
    }
    const handleClose = () => {
        setShow(false);
    }
    return (
        <React.Fragment>
                <Container fluid>
                    <Navbar collapseOnSelect expand="lg" bg="trasnparent" variant="light">
                        <Navbar.Brand href="#home" className="ms-lg-5 me-lg-3">
                            <img src={navbarBrand}/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto text-lg-start text-center">
                                <Nav.Link className="mx-2 py-3 py-lg-0">
                                    <NavLink exact to="/" activeClassName="text-muted" className="text-decoration-none text-dark">Movies</NavLink>
                                </Nav.Link>
                                <Nav.Link className="mx-2 py-3 py-lg-0">
                                    <NavLink to="/moviedetail" activeClassName="text-muted" className="text-decoration-none text-dark">Cinemas</NavLink> 
                                </Nav.Link>
                                <Nav.Link className="mx-2 py-3 py-lg-0">
                                    <NavLink to="/signin" activeClassName="text-muted" className="text-decoration-none text-dark">Buy Ticket</NavLink> 
                                </Nav.Link>
                            </Nav>
                            <Nav className="justify-content-end col d-flex align-items-center">
                                <NavDropdown title="Location" id="collasible-nav-dropdown" className="py-2 py-lg-0 mx-lg-2 text-dark">
                                    <NavDropdown.Item href="#action/3.1" className="fw-bold">Jakarta</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2" className="fw-bold">Bandung</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3" className="fw-bold">Samarinda</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link className="py-2 py-lg-0 mx-lg-2"> 
                                    <Link variant="primary" onClick={handleShow} className="fas fa-search text-muted text-decoration-none">
                                    </Link>
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header >
                                        <Modal.Title>Search</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                        <InputGroup className="mb-3">
                                            <FormControl
                                            placeholder="Search Here"
                                            aria-label="Search Here"
                                            aria-describedby="basic-addon2"
                                            />
                                            <InputGroup.Append>
                                            <Button className="btn bg-theme">
                                                <i className="fas fa-search text-decoration-none text-white"></i> 
                                            </Button>
                                            </InputGroup.Append>
                                        </InputGroup>
                                        </Modal.Body>
                                    </Modal>
                                </Nav.Link>
                                <Nav.Link className="py-2 py-lg-0 me-lg-5 ms-2">
                                    <Link to="/signup">
                                        <button className="btn-signup text-white border-0 rounded-3">Signup</button> 
                                    </Link>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>

                <div className="container py-2">
                    {children}
                </div>
            </React.Fragment>
    )
}
export default NavigationBar;