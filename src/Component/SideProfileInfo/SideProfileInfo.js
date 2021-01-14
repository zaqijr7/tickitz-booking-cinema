import React, { Component } from 'react';
import { Card, Col, Container, ProgressBar, Row, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PhotoProfile from '../../Assets/Images/photo-profile/my-photo.jpg';

export default class SideProfileInfo extends Component {
    render() {
        return (
                <>
                    <Col lg={4}>
                        <Row>
                            <Card className="px-5 border-0">
                                <Card.Body>
                                    <Row>
                                        <Col className="d-flex justify-content-between">
                                            <div>INFO</div>
                                            <div>
                                                <svg width="22" height="6" viewBox="0 0 22 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.0013 5.33334C12.29 5.33334 13.3346 4.28867 13.3346 3C13.3346 1.71134 12.29 0.666672 11.0013 0.666672C9.71264 0.666672 8.66797 1.71134 8.66797 3C8.66797 4.28867 9.71264 5.33334 11.0013 5.33334Z" fill="#5F2EEA"/>
                                                    <path d="M19.1654 5.33334C20.454 5.33334 21.4987 4.28867 21.4987 3C21.4987 1.71134 20.454 0.666672 19.1654 0.666672C17.8767 0.666672 16.832 1.71134 16.832 3C16.832 4.28867 17.8767 5.33334 19.1654 5.33334Z" fill="#5F2EEA"/>
                                                    <path d="M2.83333 5.33334C4.122 5.33334 5.16667 4.28867 5.16667 3C5.16667 1.71134 4.122 0.666672 2.83333 0.666672C1.54467 0.666672 0.5 1.71134 0.5 3C0.5 4.28867 1.54467 5.33334 2.83333 5.33334Z" fill="#5F2EEA"/>
                                                </svg>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="d-flex justify-content-center align-items-center">
                                        <img src={PhotoProfile} className="photo-profile rounded-circle my-5"/>
                                    </Row>
                                    <Row className="mb-4">
                                        <h5 className="fw-bold text-center">Muhammad Zaqi</h5>
                                        <small className="text-center">Moviegoers</small>
                                    </Row>
                                    <hr/>
                                    <Row>
                                        Loyalti Points
                                    </Row>
                                    <Row>
                                        <Card className="card-loyalti border-0 my-3 rounded-3">
                                            <Card.Body className="position-relative">
                                                    <div className="circle-card-1 position-absolute rounded-circle"> </div>
                                                    <div className="circle-card-2 position-absolute rounded-circle"> </div>
                                                <Row>
                                                    <Col className="d-flex justify-content-between align-items-center">
                                                        <span className="fs-5 fw-bold text-white">Moviegoers</span> <br/>
                                                        <svg className="star-icon" width="53" height="51" viewBox="0 0 53 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M32.6929 47.7625C32.3642 47.6759 32.0612 47.5117 31.8092 47.2837L22.8094 38.9983L10.8727 41.6738C10.4849 41.7615 10.0803 41.7386 9.70482 41.6077C9.32937 41.4769 8.99816 41.2433 8.74885 40.9336C8.49954 40.6238 8.34213 40.2504 8.2945 39.8556C8.24688 39.4609 8.31096 39.0607 8.47945 38.7006L13.6285 27.6945L7.37177 17.2181C7.17847 16.8841 7.07978 16.5038 7.08627 16.118C7.09276 15.7321 7.20419 15.3553 7.40861 15.028C7.62533 14.6951 7.93102 14.4296 8.29101 14.2616C8.65099 14.0937 9.05085 14.03 9.44521 14.0778L21.6015 15.5091L29.5749 6.35975C29.836 6.05775 30.1768 5.83539 30.5584 5.71815C30.94 5.60091 31.3469 5.59353 31.7325 5.69685C32.1181 5.80017 32.4668 6.01001 32.7387 6.30234C33.0105 6.59467 33.1945 6.95766 33.2696 7.34973L35.6672 19.256L46.9105 24.0946C47.2759 24.2504 47.5904 24.5055 47.8181 24.8309C48.0459 25.1564 48.1779 25.5392 48.1991 25.9358C48.2125 26.3215 48.1206 26.7035 47.9333 27.0409C47.746 27.3783 47.4704 27.6583 47.136 27.8509L36.4793 33.7953L35.4355 45.9014C35.4057 46.3059 35.2607 46.6933 35.0178 47.0181C34.7748 47.3428 34.444 47.5912 34.0645 47.734C33.623 47.8949 33.1406 47.9049 32.6929 47.7625Z" fill="url(#paint0_linear)"/>
                                                            <defs>
                                                                <linearGradient id="paint0_linear" x1="31.7633" y1="5.7051" x2="21.3085" y2="44.7229" gradientUnits="userSpaceOnUse">
                                                                <stop stop-color="#FFF6DC"/>
                                                                <stop offset="1" stop-color="#FFC107"/>
                                                                </linearGradient>
                                                            </defs>
                                                        </svg>
                                                    </Col>
                                                </Row>
                                                <Row className="mt-4">
                                                    <Col className="d-flex align-items-center">
                                                        <span className="fs-5 fw-bold text-white me-1"> 320 </span> <small className="text-white"> points </small>
                                                    </Col>
                                                </Row>
                                            </Card.Body>
                                        </Card>
                                    </Row>
                                    <Row className="mt-4">
                                       <p className="text-center">180 points become a master</p> 
                                    </Row>
                                    <Row className="mb-3">
                                        <div className="progress-bar p-0">
                                            <div className="progress-value"> </div>
                                        </div>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                </>
        )
    }
}