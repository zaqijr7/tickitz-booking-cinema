/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { Col, Row, Form, Alert } from 'react-bootstrap';
import http from '../../Helper/http'
import './FormForgot.css';

function FormForgot () {
  const [email, setEmail] = useState('')
  const [responseMsg, setResponseMsg] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await http().get(`auth/reset/${email}`)
      setResponseMsg(response.data.message)
    } catch (err) {
      setResponseMsg(err.response.data.message)
    } finally {
      setIsLoading(false)
    }
  }

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
      {responseMsg !== '' && <Row> <Alert variant='warning'>{responseMsg}</Alert> </Row>}
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" className="form-control input-costum" placeholder="Write your email" onChange={event => setEmail(event.target.value)} />
            </Form.Group>
            <div className="d-grid">
              {email === ''
                ? <button type="submit" className='btn-costum-color input-costum border-0' disabled size="lg" block>
                    Activate Now
                  </button>
                : <>
                {
                  isLoading === true
                    ? <div className="d-flex justify-content-center align-items-center mt-3">
                      <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                    : <button type="submit" className='btn-costum-color input-costum border-0' size="lg" block>
                        Activate Now
                      </button>
                }

                  </>
              }
            </div>
          </Form>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default FormForgot;
