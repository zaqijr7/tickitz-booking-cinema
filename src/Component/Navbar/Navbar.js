/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Modal,
  Button,
  InputGroup,
  FormControl
} from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import navbarBrand from '../../Assets/Images/logo-navbar.png'
import avatar from '../../Assets/Images/avatar.jpg'
import './Navbar.css';
import { logOut } from '../../Redux/Action/auth'

function NavigationBar ({ children }) {
  const [show, setShow] = useState(false)
  const token = useSelector(state => state.auth.token)
  const photoProfile = useSelector(state => state.auth.profile.photo)
  const dispatch = useDispatch()
  const handleShow = () => {
    setShow(true)
  }
  const handleClose = () => {
    setShow(false)
  }

  const handleLogOut = () => {
    dispatch(logOut())
  }
  return (
    <React.Fragment>
      <Container fluid>
        <Navbar collapseOnSelect expand="lg" bg="trasnparent" variant="light">
          <Navbar.Brand className="ms-lg-5 me-lg-3">
            <Link to="/"> <img src={navbarBrand} alt="brand logo" /> </Link>
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
                <NavDropdown.Item className="fw-bold">Jakarta</NavDropdown.Item>
                <NavDropdown.Item className="fw-bold">Bandung</NavDropdown.Item>
                <NavDropdown.Item className="fw-bold">Samarinda</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="py-2 py-lg-0 mx-lg-2">
                <i variant="primary" onClick={handleShow} className="fas fa-search text-muted text-decoration-none">
                </i>
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
                {token !== null
                  ? <>
                     <Link to="/profile">
                       {photoProfile === 'UNDEFINED'
                         ? <img src={avatar} className="rounded-circle avatar me-1" alt="avatar" />
                         : <img src={photoProfile} className="rounded-circle avatar me-1" alt="avatar" />

                      }
                      </Link>
                      <div className="d-block d-md-inline">
                        <i className="far fa-sign-out fs-5 ms-3 mt-4 mt-md-0" onClick={() => handleLogOut()}></i>
                      </div>
                    </>
                  : <Link to="/signup">
                    <button className="btn-signup text-white border-0 rounded-3">Signup</button>
                  </Link>
                }
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>

      <div className="p-0">
        {children}
      </div>
    </React.Fragment>
  )
}
export default NavigationBar;
