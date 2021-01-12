import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import CineOne from '../../Assets/Images/cineone.png'


function BodyOrder() {

    return(
            <Row className="p-3 px-lg-0">
                <Col lg={7}>
                    <Row>
                        <Col>
                            <p className="fs-5 fw-bold">Movie Selected</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="bg-white  rounded-3">
                            <div className="py-3 px-3 d-flex align-items-center">
                                <Col xs={6} className="ms-2">Spider-Man: Homecoming</Col>
                                <Col xs={6} className="d-flex justify-content-end">
                                    <a className="btn me-3 btn-change_movie d-flex justify-content-center align-items-center" href="../../">
                                        <small className="font-color-costum fw-bold">Change Movie</small> 
                                    </a>
                                </Col>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="mt-4">
                            <p className="fs-5 fw-bold">Chose Your Seat</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="bg-white py-5 px-3 bg-white  rounded-3">
                            <Row className="mt-4">
                                <small className="text-muted fw-bold text-center">Screen</small>
                            </Row>
                            <div className="row py-1 rounded-pill bg-gray-light mx-4 my-3" />
                            <Row>
                                <Col lg={6}>
                                    <Card className="border-0">
                                        <Card.Body className=" py-3 px-1">
                                            <Row className="gap-2 my-2 justify-content-center">
                                                <div className="seat-layout text-center">A</div>
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-dark-ash" />
                                                <div className="seat-layout bg-gray-light" />
                                            </Row>
                                            <Row className="gap-2 my-2 justify-content-center">
                                                <div className="seat-layout text-center">B</div>
                                                <div className="seat-layout  bg-gray-light" />
                                                <div className="seat-layout bg-dark-ash" />
                                                <div className="seat-layout bg-dark-ash" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                            </Row>
                                            <Row className="gap-2 my-2 justify-content-center">
                                                <div className="seat-layout text-center">C</div>
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-theme" />
                                                <div className="seat-layout bg-theme" />
                                                <div className="seat-layout bg-theme" />
                                                <div className="seat-layout bg-gray-light" />
                                            </Row>
                                            <Row className="gap-2 my-2 justify-content-center">
                                                <div className="seat-layout text-center">D</div>
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-dark-ash" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                            </Row>
                                            <Row className="gap-2 my-2 justify-content-center">
                                                <div className="seat-layout text-center">E</div>
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-dark-ash" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                            </Row>
                                            <Row className="gap-2 my-2 justify-content-center">
                                                <div className="seat-layout text-center">F</div>
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                            </Row>
                                            <Row className="gap-2 my-2 justify-content-center">
                                                <div className="seat-layout text-center">G</div>
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-dark-ash" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                            </Row>
                                            <Row className="gap-2 my-2 justify-content-center">
                                                <div className="seat-layout text-center" />
                                                <div className="seat-layout text-center">1</div>
                                                <div className="seat-layout text-center">2</div>
                                                <div className="seat-layout text-center">3</div>
                                                <div className="seat-layout text-center">4</div>
                                                <div className="seat-layout text-center">5</div>
                                                <div className="seat-layout text-center">6</div>
                                                <div className="seat-layout text-center">7</div>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col lg={6}>
                                    <Card className="card border-0">
                                        <Card.Body className="card-body py-3 px-1">
                                            <Row className="row gap-2 my-2 justify-content-center">
                                                <div className="d-lg-none seat-layout text-center">A</div>
                                                <div className="d-none d-lg-block seat-layout text-center" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-dark-ash" />
                                                <div className="seat-layout bg-gray-light" />
                                            </Row>
                                            <Row className="row gap-2 my-2 justify-content-center">
                                                <div className="d-lg-none seat-layout text-center">B</div>
                                                <div className="d-none d-lg-block seat-layout text-center" />
                                                <div className="seat-layout  bg-gray-light" />
                                                <div className="seat-layout bg-dark-ash" />
                                                <div className="seat-layout bg-dark-ash" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                            </Row>
                                            <Row className="row gap-2 my-2 justify-content-center">
                                                <div className="d-lg-none seat-layout text-center">C</div>
                                                <div className="d-none d-lg-block seat-layout text-center" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-theme" />
                                                <div className="seat-layout bg-theme" />
                                                <div className="seat-layout bg-theme" />
                                                <div className="seat-layout bg-gray-light" />
                                            </Row>
                                            <Row className="row gap-2 my-2 justify-content-center">
                                                <div className="d-lg-none seat-layout text-center">D</div>
                                                <div className="d-none d-lg-block seat-layout text-center" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-dark-ash" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                            </Row>
                                            <Row className="row gap-2 my-2 justify-content-center">
                                                <div className="d-lg-none seat-layout text-center">E</div>
                                                <div className="d-none d-lg-block seat-layout text-center" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-dark-ash" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                            </Row>
                                            <Row className="row gap-2 my-2 justify-content-center">
                                                <div className="d-lg-none seat-layout text-center">F</div>
                                                <div className="d-none d-lg-block seat-layout text-center" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout_love-nest bg-pink" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                            </Row>
                                            <Row className="gap-2 my-2 justify-content-center">
                                                <div className="d-lg-none seat-layout text-center">G</div>
                                                <div className="d-none d-lg-block seat-layout text-center" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-gray-light" />
                                                <div className="seat-layout bg-dark-ash position-relative">
                                                    <p className="position-absolute number-position">10</p>
                                                </div>
                                                <div className="seat-layout bg-gray-light position-relative">
                                                    <p className="position-absolute number-position">11</p>
                                                </div>
                                                <div className="seat-layout bg-gray-light position-relative">
                                                    <p className="position-absolute number-position">12</p>
                                                </div>
                                                <div className="seat-layout bg-gray-light position-relative">
                                                    <p className="position-absolute number-position">13</p>
                                                </div>
                                                <div className="seat-layout bg-gray-light position-relative">
                                                    <p className="position-absolute number-position">14</p>
                                                </div>
                                            </Row>
                                            <Row className="gap-2 my-2 justify-content-center">
                                                <div className="seat-layout text-center" />
                                                <div className="seat-layout text-start">8</div>
                                                <div className="seat-layout text-start">9</div>
                                                <div className="seat-layout text-center" />
                                                <div className="seat-layout text-center" />
                                                <div className="seat-layout text-center" />
                                                <div className="seat-layout text-center" />
                                                <div className="seat-layout text-center" />
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>                                    
                            </Row>                              
                            <Row className="justify-content-center">
                            Seating Key
                            </Row>
                            <Row className="mx-3 my-3 justify-content-center">                                                
                                <Col md="auto" className="d-flex mt-3">
                                    <div className="seat-layout bg-gray-light me-2" /> Available
                                </Col>
                                <Col md="auto" className="d-flex mt-3">
                                    <div className="seat-layout bg-theme me-2" /> Selected
                                </Col>
                                <Col md="auto" className="d-flex mt-3">
                                    <div className="seat-layout bg-pink me-2" /> Love Nest
                                </Col>
                                <Col md="auto" className="d-flex mt-3">
                                    <div className="seat-layout bg-dark-ash me-2" /> Sold
                                </Col>                            
                            </Row>
                        </Col>
                    </Row>
                    <Row className="my-4">
                        <Col md={12} lg={5} className="d-grid p-0  my-3 my-lg-0">
                            <button className="border-theme fw-bold font-color-costum rounded py-2">Change your movie</button>
                        </Col>
                        <Col lg={2} className="d-lg-block d-none" />
                        <Col md={12} lg={5} className="d-grid p-0 my-3 my-lg-0">
                            <button className="bg-theme text-white fw-bold rounded py-2 border-0">Book Now</button>
                        </Col>
                    </Row>
                </Col>
                <Col lg={5} className="px-4">
                    <Row>
                        <Col>
                            <p className="fs-5 fw-bold">Order Info</p>
                        </Col>
                    </Row>
                    <Row className="row">
                        <Card className="card shadow border-0 rounded my-4 my-lg-0">
                            <Card.Body className="card-body py-4 px-2">
                                <Container>
                                    <Row className="border-3 d-flex flex-column">
                                        <Col className="d-flex justify-content-center align-items-center mt-2">
                                            <img src={CineOne} alt srcSet />
                                        </Col>
                                        <Col className="text-center my-4">
                                            <p className="fs-4">CineOne21 Cinema</p>
                                        </Col>                          
                                    </Row>                            
                                    <Row className="my-1">
                                        <Col xs={4}>
                                            <small className="text-muted">Movie selected</small>
                                        </Col>
                                        <Col xs={8} className="text-end">
                                            <p className>Spider-Man: Homecoming</p>
                                        </Col>
                                    </Row>
                                    <Row className="my-1">
                                        <Col xs={5} className="">
                                            <small className="text-muted">Tuesday, 07 July 2020</small>
                                        </Col>
                                        <Col xs={7} className="text-end">
                                            <p className>02:00pm</p>
                                        </Col>
                                    </Row>
                                    <Row className="my-1">
                                        <Col xs={5} className="col-5">
                                            <small className="text-muted">One ticket price</small>
                                        </Col>
                                        <Col xs={7} className="col-7 text-end">
                                            <p className>$10</p>
                                        </Col>
                                    </Row>
                                    <Row className="my-1">
                                        <Col xs={5}>
                                            <small className="text-muted">Seat choosed</small>
                                        </Col>
                                        <Col xs={7} className="text-end">
                                            <p className>C4, C5, C6</p>
                                        </Col>
                                    </Row>
                                    <Row className="my-3">
                                        <hr />
                                    </Row>
                                    <Row className="my-1">
                                        <Col xs={5}>
                                            <p className="fs-5">Total Payment</p>
                                        </Col>
                                        <Col xs={7} className="text-end">
                                            <p className="fs-5 fw-bold font-color-costum">$30</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </Card.Body>
                        </Card>
                    </Row>                    
                </Col>
            </Row>
    )
}

export default BodyOrder;