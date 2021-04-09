/* eslint-disable no-use-before-define */
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './RowTitle.css';

function RowTitle () {
  return (
    <React.Fragment>
      <Row>
        <Col lg={6} className="d-flex align-items-center justify-content-center content-row-1">
          <p>
            <span className="title-row-1">Cinema, Newest Movie,</span> <br />
            <span className="title-row-1-1">Find out now!</span>
          </p>
        </Col>
        <Col lg={6} className="d-flex justify-content-center align-items-center content-row-1">
          <div className="d-flex">
            <div className="thumbnail-row-1-1 mx-2">
            </div>
            <div className="thumbnail-row-1-2 mx-2">

            </div>
            <div className="thumbnail-row-1-3 mx-2">

            </div>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default RowTitle;
