import React from 'react';
import { Row, Col } from 'react-bootstrap';

function MovieInfo() {
    return (
        <React.Fragment>
            <Row className="my-4">
                <Col lg={4} className="d-flex justify-content-center">
                    <div className="cover-movie mx-3 d-flex justify-content-center align-items-center">
                    <div className="thumbnail-movie"/>
                    </div>
                </Col>
                <Col lg={8} className="mx-4 mx-lg-0">
                    <Col lg="auto" className="my-5 my-lg-0">
                        <div className="text-center text-lg-start">
                            <h5 className="fw-bold fs-5">Spider-Man: Homecoming</h5>
                            <p className="text-muted">Adventure, Action, Sci-Fi</p>                          
                        </div>
                    </Col>
                    <Col xs="auto">
                        <Row>
                            <Col lg={4} xs={6}>
                                <small className="text-muted">Relase Date</small>
                                <p>June 28, 2017</p>
                            </Col>
                            <Col lg="auto" xs={6}>
                                <small className="text-muted">Directed by</small>
                                <p>Jon Watss</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="auto">
                        <Row className="row">
                            <Col lg={4} xs={6} className="col-lg-4  col-6">
                                <small className="text-muted">Duration</small>
                                <p>2 hours 13 minutes </p>
                            </Col>
                            <Col lg="auto" xs={6}>
                                <small className="text-muted">Casts</small>
                                <p>JTom Holland, Michael Keaton, Robert Downey Jr., ...</p>
                            </Col>
                        </Row>                      
                    </Col>
                    <Col xs="auto" className="pe-lg-5 justify-content-md-center">
                        <hr />
                    </Col>
                    <Col xs="auto" className="pe-lg-5">
                        <p className="fw-bold fs-5">Synopsis</p>
                        <p>
                            Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. 
                        </p>
                    </Col>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default MovieInfo;