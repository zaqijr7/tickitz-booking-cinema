import React from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import './FormForgot.css';

function FormForgot() {
  return (
    <React.Fragment>
      <Row className="mb-3">
        <Col>
          <h4 className="text-lg-start">Fill your complete email</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-muted text-lg-start">we'll send a link to your email shortly</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" className="form-control input-costum" placeholder="Write your email" />
            </Form.Group>
            <div className="d-grid">
              <button type="submit" className="btn-costum-color input-costum border-0" size="lg" block>
                Activate Now
              </button>
            </div>
          </Form>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default FormForgot;
