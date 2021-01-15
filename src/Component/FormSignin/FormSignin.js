import React, { useState } from 'react';
import {Col, Row, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './FormSignin.css';

function FormSignin() {
    const [showpass, setShowpass] = useState(false);
    const [type, setType] = useState('password');
    const handleClick = () => {
        if(showpass === false){
            setShowpass(true);
        }else if(showpass === true){
            setShowpass(false);
        }
        if(showpass === true){
            setType('text');
        }else{
            setType('password');
        }
    }
    return (
        <React.Fragment>
            <Col lg={12} md={7} sm={8}>
                <Row>
                    <Col>
                        <h2 className="fw-bolder">Signin</h2>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <p className="text-muted">
                        Sign in with your data that you entered during
                        your registration
                    </p>
                </Row>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group controlId="formBasicEmail" className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" className="form-control input-costum" placeholder="Write your email" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword" className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <div className="d-flex input-group-pass justify-content-end align-items-center">
                                <Form.Control type={type} className="form-control input-costum" placeholder="Write your password" /> 
                                <span className="far fa-eye icon-eye me-3 text-muted" onClick={handleClick}/>
                                </div>
                            </Form.Group>
                            <div className="d-grid">
                                <button type="submit" className="btn-costum-color input-costum border-0" size="lg" block>
                                    Signin
                                </button>
                            </div>
                        </Form>
                    </Col>
                </Row>
                <Row className=" my-2">
                    <p className="text-center mt-3">Forgot your password? <Link to="/forgotpass"> Reset now </Link> </p>
                </Row>
                <Row className="my-2">
                    <div class="d-flex justify-content-center align-items-center"> 
                        <Col>
                            <hr/>
                        </Col>
                        <Col xs={2} className="d-flex justify-content-center align-items-center">
                            <p class="text-muted pt-2">Or</p>
                        </Col>
                        <Col>
                            <hr/>
                        </Col>
                    </div>
                </Row>
                <Row>
                    <div class="d-flex justify-content-center align-items-center mt-2"> 
                        <div class="px-3">
                            <button class="btn shadow-sm bg-white text-muted fw-bolder btn-sign-with d-flex justify-content-center align-items-center btn-costum">
                                <img src="https://img.icons8.com/fluent/24/000000/google-logo.png" class="me-lg-2" alt="google icon"/>
                                <span className="d-lg-block d-none">Google</span> 
                            </button>
                        </div>
                        <div class="px-3">
                            <button class="btn shadow-sm bg-white text-muted fw-bolder btn-sign-with d-flex justify-content-center align-items-center btn-costum">
                                <img src="https://img.icons8.com/color/29/000000/facebook-new.png" class="me-lg-2" alt="fb icon"/>
                                <span className="d-lg-block d-none">Facebook</span> 
                            </button>
                        </div>
                    </div>
                </Row>
            </Col>
        </React.Fragment>
    )
}

export default FormSignin;