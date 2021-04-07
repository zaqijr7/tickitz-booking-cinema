import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './NowShow.css';

function NowShow({ children }) {

  return (
    <React.Fragment>
      <div className="content-row-2">
        <Row>
          <div className="d-flex align-items-center">
            <Col lg={6} className="d-flex justify-content-start flex-fill">
              <h5 className="ms-lg-5 fw-bold fs-5">Now Showing
                <div className="border-showing mx-auto rounded-pill my-2" />
              </h5>
            </Col>
            <Col lg={6} className="d-flex justify-content-end flex-fill">
              <p className="me-lg-5 font-color-costums fs-6">View All</p>
            </Col>
          </div>
        </Row>
        <Row>
          <Col lg={12} className="mt-4 overflow-auto py-1" style={{ scrollbarWidth: 'none' }}>
            <div className="d-inline-flex history-show ms-lg-4">
              {children}
            </div>
          </Col>
        </Row>

      </div>
    </React.Fragment>

  )
}
export default NowShow;
