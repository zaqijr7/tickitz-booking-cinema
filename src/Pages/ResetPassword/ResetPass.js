/* eslint-disable no-use-before-define */
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SectionLeft from '../../Component/AuthSectionLeft/SectionLeft';
import Logo from '../../Assets/Images/logo.png'
import './ResetPass.css';
import FormReset from '../../Component/FormReset/FormReset';

function ResetPass () {
  return (
    <React.Fragment>
      <Row className="vw-100">
        <Col lg={7} className="container-side-right d-none d-lg-block">
          <SectionLeft className="d-flex flex-column justify-content-center align-items-center">
            <Row>
              <div className="logo">
                <img src={Logo} alt="logo" className="img-logo" />
              </div>
            </Row>
            <Row>
              <div className="slogan">
                <h1 className="text-slogan">wait, watch, wow!</h1>
              </div>
            </Row>
          </SectionLeft>
        </Col>
        <Col lg={5} className="px-5 vh-100 overflow-auto">
          <Row className="justify-content-center my-5">
            <FormReset />
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default ResetPass;
