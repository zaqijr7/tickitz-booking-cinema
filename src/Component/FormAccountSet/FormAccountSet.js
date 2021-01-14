import React, { Component } from 'react';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class FormAccountSet extends Component {
    render() {
        return (
        <>
                    <Col lg={8} className="my-5 my-lg-0">
                        <Card className="border-0">
                            <Card.Header className="bg-white d-flex pb-0 pt-3 px-4">
                                <Col xs='auto'className="profile-bar pb-3 text-muted">
                                    Account Settings
                                </Col>
                                <Col xs='auto' className="ms-5">
                                   <Link className="text-decoration-none text-dark" to="/order-history"> Order History </Link>
                                </Col>
                            </Card.Header>
                            <Card.Body className="px-4">
                               <Row>
                                   <span className="mt-3 mb-2"> Detail Information </span>
                                   <hr/>
                               </Row>
                               <Row>
                                    <Col>
                                        <Form>
                                            <Row>
                                                <Col lg={6}>
                                                    <Form.Group controlId="formBasicEmail" className="my-3">
                                                        <Form.Label>First Name</Form.Label>
                                                        <Form.Control type="email" className="form-control form-profile" placeholder="Muhammad Zaqi" />
                                                    </Form.Group>
                                                </Col>
                                                <Col lg={6}>
                                                    <Form.Group controlId="formBasicPassword" className="my-3">
                                                        <Form.Label>Password</Form.Label>
                                                        <Form.Control className="form-control form-profile" placeholder="Al-Quraisyi" />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg={6}>
                                                    <Form.Group controlId="formBasicEmail" className="my-3">
                                                        <Form.Label>Email</Form.Label>
                                                        <Form.Control type="email" className="form-control form-profile" placeholder="jonasrodrigu123@gmail.com" />
                                                    </Form.Group>
                                                </Col>
                                                <Col lg={6}>
                                                    <Form.Group controlId="formBasicPassword" className="my-3">
                                                    <div className="mb-3">
                                                        <Form.Label htmlFor="exampleInputEmail1" className="form-label"> <small className="text-muted">Phone Number</small></Form.Label>
                                                        <div className="input-group mb-3 form-profile">
                                                            <span className="input-group-text bg-transparent border-end-0 text-muted">+62</span>
                                                            <div className="border my-2" />
                                                            <Form.Control type="text" className="form-control py-2 border-start-0 text-muted" defaultValue={81445687121} />
                                                        </div>
                                                    </div>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className="mt-3">
                                                    Account and Privacy
                                                    <hr/>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col lg={6}>
                                                    <Form.Group controlId="formBasicPassword" className="my-3">
                                                        <Form.Label>New Password</Form.Label>
                                                        <div className="d-flex input-group-pass justify-content-end align-items-center">
                                                        <Form.Control className="form-control form-profile" placeholder="Write your password" /> 
                                                        <span className="far fa-eye icon-eye me-3 text-muted"/>
                                                        </div>
                                                    </Form.Group>
                                                </Col>
                                                <Col lg={6}>
                                                    <Form.Group controlId="formBasicPassword" className="my-3">
                                                        <Form.Label>Confirm Password</Form.Label>
                                                        <div className="d-flex input-group-pass justify-content-end align-items-center">
                                                        <Form.Control className="form-control form-profile" placeholder="Write your password" /> 
                                                        <span className="far fa-eye icon-eye me-3 text-muted"/>
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
}
