import React, { Component } from 'react';
import { Card, Container, Col, Row } from 'react-bootstrap';
import Logo from '../../Assets/Images/logo.png';
import Barcode from '../../Assets/Images/bar-code.png';

export default class TicketCard extends Component {
    render() {
        return (
            <>
            <Container>
                <Row className="p-3 px-lg-0">
                    <Col>
                        <Card className="border-0 rounded-1 bg-light my-5">
                            <Card.Body className="py-5">
                                <Row>
                                    <Col className="text-center">
                                        <p className="fw-bold fs-5">Proof of Payment</p>
                                    </Col>
                                </Row>
                                <Row className="justify-content-center">
                                    <Col xs={6} className="d-flex align-items-center bg-theme position-relative border-rad_out dorder-dash px-4 border-rad_top-left">
                                        <div className="border-rad_inward-top bg-light" />
                                        <Col>
                                            <img src={Logo} className="ticket-logo" alt="icon" />
                                        </Col>
                                        <Col className="d-flex align-items-center justify-content-end text-white">
                                            Admit One
                                        </Col>
                                    </Col>
                                    <Col xs={4} className="d-flex justify-content-center align-items-center bg-theme border-rad_top-right">
                                        <img src={Logo} className="ticket-logo" alt="icon" />
                                    </Col>
                                </Row>
                                <Row className="row justify-content-center">
                                    <Col xs={6} className="bg-white ps-lg-5 py-lg-4 dorder-dash border-rad_end-left position-relative">
                                        <Row>
                                            <Col>
                                                <smalll className="text-muted">Movie</smalll>
                                                <p className="fw-bold">Spider-Man: Homecoming</p>
                                            </Col>
                                        </Row>
                                        <Row className="row">
                                            <Col>
                                                <smalll className="text-muted">Date</smalll>
                                                <p className="fw-bold">07 July</p>
                                            </Col>
                                            <Col>
                                                <smalll className="text-muted">Time</smalll>
                                                <p className="fw-bold">02:00pm</p>
                                            </Col>
                                            <Col>
                                                <smalll className="text-muted">Category</smalll>
                                                <p className="fw-bold">PG-13</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <smalll className="text-muted">Count</smalll>
                                                <p className="fw-bold">3 pieces</p>
                                            </Col>
                                            <Col>
                                                <smalll className="text-muted">Seats</smalll>
                                                <p className="fw-bold">C4, C5, C6</p>
                                            </Col>
                                            <Col>
                                                <smalll className="text-muted">Price</smalll>
                                                <p className="fw-bold fs-5">$30,00</p>
                                            </Col>
                                        </Row>
                                        <div className="border-rad_inward-bottom bg-light" />
                                    </Col>
                                    <Col xs={4} className="bg-white ps-lg-3 py-lg-4 border-rad_end-right">
                                        <Row>
                                            <Col>
                                                <Row>
                                                    <smalll className="text-muted">Movie</smalll>
                                                    <p className="fw-bold">Spider-Man: Home...</p>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <smalll className="text-muted">Date</smalll>
                                                        <p className="fw-bold">07 July</p>
                                                    </Col>
                                                    <Col>
                                                        <smalll className="text-muted">Time</smalll>
                                                        <p className="fw-bold">02:00pm</p>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <smalll className="text-muted">Count</smalll>
                                                        <p className="fw-bold">3 pieces</p>
                                                    </Col>
                                                    <Col>
                                                        <smalll className="text-muted">Seats</smalll>
                                                        <p className="fw-bold">C4, C5, C6</p>
                                                    </Col>
                                                </Row>
                                            </Col>
                                            <Col xs={3} className="d-flex flex-column p-0">
                                                <img src={Barcode} className="bar-code" alt="icon" />
                                                <img src={Barcode} className="bar-code" alt="icon" />
                                                <img src={Barcode} className="bar-code" alt="icon" />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className="my-2 justify-content-center">
                                    <Col lg={2} className="col-lg-2 d-grid p-0  my-2 mt-lg-3 mb-lg-5">
                                        <button className="btn border border-3 fw-bold rounded py-2"><i className="fas fa-download me-2" /> Download</button>
                                    </Col>
                                    <Col xs={1} className="d-lg-block d-none" />
                                    <Col lg={2} className="d-grid p-0 my-2 mt-lg-3 mb-lg-5">
                                        <button className="btn border border-3 fw-bold rounded py-2"> <i className="fas fa-print me-2" /> Print</button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}