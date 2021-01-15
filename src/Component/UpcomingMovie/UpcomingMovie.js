import React from 'react';
import {Col, Row} from 'react-bootstrap';
import './UpcomingMovie.css';


const listMonth = ['September', 
                  'October', 
                  'November', 
                  'December', 
                  'January', 
                  'February', 
                  'March', 
                  'April', 
                  'May', 
                  'June', 
                  'July', 
                  'August'
                ];

const listFilm = [
    { title: 'Black Widow', genre: 'Action, Adventure, Sci-Fi' },
    { title: 'The Witches', genre: 'Adventure, Comedy, Family' },
    { title: 'Tenet', genre: 'Action, Sci-Fi' }
]

function UpcomingMovie() {
    return (
        <div className="content-row-3 mt-5">
            <Row>
                <div className="d-flex align-items-center">
                    <Col lg={6} className="d-flex justify-content-start flex-fill">
                        <h5 className="ms-lg-5 fw-bold fs-5">Upcoming Movies
                        </h5>
                    </Col>
                    <Col lg={6} className="d-flex justify-content-end flex-fill">
                        <p className="me-lg-5 font-color-costums fs-6">View All</p>
                    </Col>  
                </div>
            </Row>
            <Row>
                <Col lg={12} className="mt-3 overflow-auto py-1" style={{scrollbarWidth: 'none'}}>
                    <div className="d-inline-flex history-show ms-lg-4 py-3">
                        <Col className="mx-3 d-flex justify-content-center align-items-center">
                            <button className="btn-month btn-month-active text-white fw-bolder rounded" type="submit">September</button>
                        </Col>
                        {
                            listMonth.map((value, index) => {
                                return (
                                    <Col className="mx-3 d-flex justify-content-center align-items-center" key={index.toString()}>
                                        <button className="btn-month font-color-costums fw-bolder rounded" type="submit">{value}</button>
                                    </Col>
                                )
                            })
                        }
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={12} className="mt-3 overflow-auto py-1" style={{scrollbarWidth: 'none'}}>
                    <div className="d-inline-flex history-show ms-3">
                        {
                            listFilm.map((value, index) => {
                                return (
                                <Col className="cover-upcoming mx-3 d-block">
                                    <div className={`upcoming-movie-${index + 1} mx-auto`}/>
                                    <div className="fw-bold fs-5  text-center mt-3">{value.title}</div>
                                    <div className="fs-6 text-center text-secondary mt-2">{value.genre}</div>
                                    <div className="d-flex justify-content-center py-4">
                                        <a className="btn btn-month font-color-costums fw-bolder" href="./page/movie-detail/" type="submit">Details</a>  
                                    </div>
                                </Col>
                                )
                            })
                        }
                        {
                            listFilm.map((value, index) => {
                                return (
                                <Col className="cover-upcoming mx-3 d-block">
                                    <div className={`upcoming-movie-${index + 1} mx-auto`}/>
                                    <div className="fw-bold fs-5  text-center mt-3">{value.title}</div>
                                    <div className="fs-6 text-center text-secondary mt-2">{value.genre}</div>
                                    <div className="d-flex justify-content-center py-4">
                                        <a className="btn btn-month font-color-costums fw-bolder" href="./page/movie-detail/" type="submit">Details</a>  
                                    </div>
                                </Col>
                                )
                            })
                        }
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default UpcomingMovie;