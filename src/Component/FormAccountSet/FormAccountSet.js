import React, { useState } from 'react';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function FormAccountSet(){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const handleInput = (event) => {
        switch (event.target.name) {
            case 'firstName' :
                return setFirstName(event.target.value)
            case 'lastName' :
                return setLastName(event.target.value)
            case 'email' :
                return setEmail(event.target.value)
            case 'phoneNumber' :
                return setPhoneNumber(event.target.value)
            case 'password' :
                return setPassword(event.target.value)
            case 'confirmPassword' :
                return setConfirmPassword(event.target.value)
            default :
                return event.target.value
        }
    }
    console.log(password);
    return (
        <>
            <Col lg={8} className="my-5 my-lg-0">
                <Card className="border-0">
                    <Card.Header className="bg-white d-flex pb-0 pt-3 px-4">
                        <Col xs='auto' className="profile-bar pb-3 text-muted">
                            Account Settings
                                </Col>
                        <Col xs='auto' className="ms-5">
                            <Link className="text-decoration-none text-dark" to="/profile/order-history"> Order History </Link>
                        </Col>
                    </Card.Header>
                    <Card.Body className="px-4">
                        <Row>
                            <span className="mt-3 mb-2"> Detail Information </span>
                            <hr />
                        </Row>
                        <Row>
                            <Col>
                                <Form>
                                    <Row>
                                        <Col lg={6}>
                                            <Form.Group controlId="firstName" className="my-3">
                                                <Form.Label>First Name</Form.Label>
                                                <Form.Control type="text" className="form-control form-profile" placeholder="Muhammad Zaqi" name="firstName" onChange={(event) => handleInput(event)}/>
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Group controlId="lastName" className="my-3">
                                                <Form.Label>Last Name</Form.Label>
                                                <Form.Control type="text" className="form-control form-profile" placeholder="Al-Quraisyi" name="lastName" onChange={(event) => handleInput(event)}/>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6}>
                                            <Form.Group controlId="email" className="my-3">
                                                <Form.Label >Email</Form.Label>
                                                <Form.Control type="email" className="form-control form-profile" placeholder="jonasrodrigu123@gmail.com" name="email" onChange={(event) => handleInput(event)}/>
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Group controlId="phoneNumber" className="my-3">
                                                <div className="mb-3">
                                                    <Form.Label  className="form-label"> <small className="text-muted">Phone Number</small></Form.Label>
                                                    <div className="input-group mb-3 form-profile">
                                                        <span className="input-group-text bg-transparent border-end-0 text-muted">+62</span>
                                                        <div className="border my-2" />
                                                        <Form.Control type="text" className="form-control py-2 border-start-0 text-muted" defaultValue={81445687121} name="phoneNumber" onChange={(event) => handleInput(event)}/>
                                                    </div>
                                                </div>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="mt-3">
                                            Account and Privacy
                                                    <hr />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6}>
                                            <Form.Group controlId="password" className="my-3">
                                                <Form.Label>New Password</Form.Label>
                                                <div className="d-flex input-group-pass justify-content-end align-items-center">
                                                    <Form.Control type="password" className="form-control form-profile" placeholder="Write your password" name="password" onChange={(event) => handleInput(event)} />
                                                    <span className="far fa-eye icon-eye me-3 text-muted" />
                                                </div>
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Group controlId="confirmPassword" className="my-3">
                                                <Form.Label>Confirm Password</Form.Label>
                                                <div className="d-flex input-group-pass justify-content-end align-items-center">
                                                    <Form.Control type="password" className="form-control form-profile" placeholder="Write your password" name="confirmPassword" onChange={(event) => handleInput(event)} />
                                                    <span className="far fa-eye icon-eye me-3 text-muted" />
                                                </div>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={6} className="d-grid mt-3">
                                            <Button variant="trasnparent" className="py-2 btn-update text-white">
                                                Update Changes
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}

export default FormAccountSet