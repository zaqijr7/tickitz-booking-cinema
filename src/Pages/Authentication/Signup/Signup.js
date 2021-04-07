import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SectionLeft from '../../../Component/AuthSectionLeft/SectionLeft';
import FormSignup from '../../../Component/FormSingup/FormSignup';
import LeftContentSignup from '../../../Component/LeftContentSignup/LeftContentSignup.js';
import './Signup.css';

function Signup() {
  return (
    <React.Fragment>
      <Row className="vw-100">
        <Col lg={7} className="container-side-right d-none d-lg-block">
          <SectionLeft className="overflow-auto">
            <LeftContentSignup />
          </SectionLeft>
        </Col>
        <Col lg={5} className="px-5 vh-100 overflow-auto">
          <Row className="justify-content-center my-5">
            <FormSignup />
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default Signup;
