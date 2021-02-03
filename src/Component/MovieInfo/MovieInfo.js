import React, { useEffect, useState } from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import http from '../../Helper/http'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { selectedMovie } from '../../Redux/Action/movieSelected'

function MovieInfo() {
    const { id } = useParams()
    const [movie, setMovie] = useState({})
    const dispatch = useDispatch()
    const releaseDate = movie.relaseDate
    const releaseDateFix = moment(releaseDate).format('LL')
    const getDetailMovie = async () => {
        const getMovie = await http().get(`/movies/${id}`)
        setMovie(getMovie.data.results)
        dispatch(selectedMovie(getMovie.data.results))
    }
    useEffect(() => {
        getDetailMovie()
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
                                    {releaseDateFix}
                                 </p>
                            </Col>
                            <Col lg="auto" xs={6}>
                                <small className="text-muted">Directed by</small>
                                <p>{movie.director}</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="auto">
                        <Row className="row">
                            <Col lg={4} xs={6} className="col-lg-4  col-6">
                                <small className="text-muted">Duration</small>
                                <p>{movie.runtime} min</p>
                            </Col>
                            <Col lg="auto" xs={6}>
                                <small className="text-muted">Casts</small>
                                <p>{movie.actors}</p>
                            </Col>
                        </Row>                      
                    </Col>
                    <Col xs="auto" className="pe-lg-5 justify-content-md-center">
                        <hr />
                    </Col>
                    <Col xs="auto" className="pe-lg-5">
                        <p className="fw-bold fs-5">Synopsis</p>
                        <p>
                            {movie.synopsis} 
                        </p>
                    </Col>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default MovieInfo