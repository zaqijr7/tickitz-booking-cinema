import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import dataMovie from '../../DataDummy/DataMovieNowShow';

function MovieInfo() {
    const { id } = useParams();
    const [movie, setMovie] = useState({})

    const getMovie = () => {
        setMovie(
            dataMovie.filter((item) => {
                return item.id === Number(id)
            })[0]
        )
    }
    useEffect(() => {
        getMovie()
    }, [])
    
    return (
      
        <React.Fragment>
            <Row className="my-4">
                <Col lg={4} className="d-flex justify-content-center">
                    <Card className="cover-carousel">
                        <Card.Body className=" d-flex justify-content-center align-items-center">
                            <img className="carousel"src={movie.poster} alt="poster" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={8} className="mx-4 mx-lg-0">
                    <Col lg="auto" className="my-5 my-lg-0">
                        <div className="text-center text-lg-start">
                            <h5 className="fw-bold fs-5">{movie.title}</h5>
                            <p className="text-muted">{movie.genre}</p>                          
                        </div>
                    </Col>
                    <Col xs="auto">
                        <Row>
                            <Col lg={4} xs={6}>
                                <small className="text-muted">Relase Date</small>
                                <p>
                                    {movie.relase}
                                 </p>
                            </Col>
                            <Col lg="auto" xs={6}>
                                <small className="text-muted">Directed by</small>
                                <p>{movie.directby}</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="auto">
                        <Row className="row">
                            <Col lg={4} xs={6} className="col-lg-4  col-6">
                                <small className="text-muted">Duration</small>
                                <p>{movie.duration}</p>
                            </Col>
                            <Col lg="auto" xs={6}>
                                <small className="text-muted">Casts</small>
                                <p>{movie.casts}</p>
                            </Col>
                        </Row>                      
                    </Col>
                    <Col xs="auto" className="pe-lg-5 justify-content-md-center">
                        <hr />
                    </Col>
                    <Col xs="auto" className="pe-lg-5">
                        <p className="fw-bold fs-5">Synopsis</p>
                        <p>
                            {movie.synopsyis} 
                        </p>
                    </Col>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default MovieInfo;