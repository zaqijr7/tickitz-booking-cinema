/* eslint-disable no-use-before-define */
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SectionLeft from '../../../Component/AuthSectionLeft/SectionLeft';
import FormForgot from '../../../Component/FormForgot/FormForgot';
import LeftContentForgot from '../../../Component/LeftContentForgot/LeftContentForgot';

function ForgotPass () {
  return (
    <React.Fragment>
      <Row className="vw-100">
        <Col lg={7} className="container-side-right d-none d-lg-block">
          <SectionLeft className="d-flex flex-column justify-content-center align-items-center overflow-auto">
            <Row>
              <LeftContentForgot />
            </Row>
          </SectionLeft>
        </Col>
        <Col lg={5} className="px-5 vh-100 overflow-auto">
          <Row className="d-flex justify-content-center my-5">
            <FormForgot />
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default ForgotPass;
