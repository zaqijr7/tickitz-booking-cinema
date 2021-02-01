import React, { Component } from 'react';
import { Card, Row, Col, Form, Container } from 'react-bootstrap';
import Thumbnail from '../../Assets/Images/thumb-film/spiderman.png';

export default class BodyAdmin extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col lg={7}>
                        <Row>
                            <p className="fs-5 fw-bold">Movie Description</p>
                        </Row>
                        <Row>
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col lg={4} className="d-flex justify-content-center">
                                            <Card className="thumbnail rounded-3 my-3">
                                                <Card.Body className="d-flex justify-content-center">
                                                    <Card.Img variant="top" src={Thumbnail} className="movie-thumbnail"  />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col lg={8}>
                                            <Form>
                                                <Row className="my-3">
                                                    <Col>
                                                        <Form.Label>Movie Name</Form.Label>
                                                        <Form.Control type="text" className="py-3" value="Spider-Man: Homecoming" />
                                                    </Col>
                                                </Row>
                                                <Row className="my-3">
                                                    <Col>
                                                        <Form.Label>Categori</Form.Label>
                                                        <Form.Control type="text" className="py-3" value="Action, Adventure, Sci-Fi" />
                                                    </Col>
                                                </Row>
                                                <Row className="my-3">
                                                    <Col lg={6}>
                                                    <Form.Label>Release date</Form.Label>
                                                        <Form.Control type="date" className="py-3" value="Action, Adventure, Sci-Fi" />
                                                    </Col>
                                                    <Col lg={6}>
                                                        <Form.Label className="text-center">Duration (hour / minute)</Form.Label>
                                                        <Row>
                                                            <Col>
                                                                <Form.Control type="text" className="py-3" value="2" />
                                                            </Col>
                                                            <Col>
                                                                <Form.Control type="text" className="py-3" value="12" />
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={4}>
                                            <Form.Label>Director</Form.Label>
                                            <Form.Control type="text" className="py-3" value="Jon Watts" />
                                        </Col>
                                        <Col xs={8}>
                                            <Form.Label>Cast</Form.Label>
                                            <Form.Control type="text" className="py-3" value="Tom Holland, Michael Keaton, Robert Dow.." />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Form.Label>Cast</Form.Label>
                                            <textarea className="form-control py-3" value="Tom Holland, Michael Keaton, Robert Dow.."> </textarea>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                    <Col lg={5} className="px-4">
                        <Row>
                            <p className="fs-5 fw-bold">Premiere Location</p>
                        </Row>
                        <Row>
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col lg={10}>
                                            <Form>
                                                <Form.Group controlId="location">
                                                    <Form.Control as="select" className="bg-light border-0">
                                                        <option>Large select</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={3}>
                                        </Col>
                                        <Col lg={3}>            
                                        </Col>
                                        <Col lg={3}>                        
                                        </Col>
                                        <Col lg={3}>                
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Row>
                        <Row>
                            <p className="fs-5 fw-bold">Showtimes</p>
                        </Row>
                        <Row>
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col lg={10}>
                                            <Form>
                                                <Form.Group controlId="location">
                                                    <Form.Control as="select" className="bg-light border-0">
                                                        <option>Large select</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={3}>
                                        </Col>
                                        <Col lg={3}>            
                                        </Col>
                                        <Col lg={3}>                        
                                        </Col>
                                        <Col lg={3}>                
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}
