/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react'
import { Col, Row, Form, Alert } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import jwt from 'jsonwebtoken'
import { useDispatch } from 'react-redux'
import './FormReset.css';
import { cleanMsg } from '../../Redux/Action/register'
import http from '../../Helper/http'

function FormReset () {
  const [showpass, setShowpass] = useState(false)
  const [isLoading, setIsLoadning] = useState(false)
  const [type, setType] = useState('password')
  const [messageRes, setMessageRes] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setCofirmPassword] = useState('')
  const search = useLocation().search;
  const token = new URLSearchParams(search).get('token');
  const decode = jwt.decode(token)
  console.log(decode.email)
  const dispatch = useDispatch()
  const handleClick = () => {
    if (showpass === false) {
      setShowpass(true);
      setType('text')
    } else if (showpass === true) {
      setShowpass(false);
      setType('password');
    }
  }
  const handleChange = (event) => {
    dispatch(cleanMsg())
    if (event.target.name === 'password') {
      setPassword(`${event.target.value}`)
    } else if (event.target.name === 'confirm-password') {
      setCofirmPassword(`${event.target.value}`)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const clickSubmit = async (event) => {
    setIsLoadning(true)
    const data = new URLSearchParams()
    data.append('email', decode.email)
    data.append('password', confirmPassword)
    try {
      const response = await http().patch('forgot', data)
      setMessageRes(response.data.message)
    } catch (err) {
      setMessageRes(err.response.data.message)
    } finally {
      setIsLoadning(false)
    }
  }

  useEffect(() => {
  })
  return (
    <React.Fragment>
      <Col lg={12} md={7} sm={8}>
        <Row>
          <Col>
            <h2 className="fw-bolder">Reset Password</h2>
          </Col>
        </Row>
        <Row className="mt-2">
          <p className="text-muted">
            Create your new password
          </p>
        </Row>
        {messageRes !== '' && <Row> <Alert variant='warning'>{messageRes}</Alert> </Row>}
        <Row>
          <Col>
            <Form onSubmit={handleSubmit} >
              <Form.Group controlId="password" className="mb-3">
                <Row className="my-3">
                  <Form.Label>Password</Form.Label>
                  <div className="d-flex input-group-pass justify-content-end align-items-center">
                    <Form.Control type={type} className="form-control input-costum" placeholder="Write your password" name="password" onChange={e => handleChange(e)} />
                    <span className="far fa-eye icon-eye me-3 text-muted" onClick={handleClick} />
                  </div>
                </Row>
                <Row className="my-3">
                  <Form.Label>Cofirm Password</Form.Label>
                  <div className="d-flex input-group-pass justify-content-end align-items-center">
                    <Form.Control type={type} className="form-control input-costum" placeholder="Write your password" name="confirm-password" onChange={e => handleChange(e)} />
                    <span className="far fa-eye icon-eye me-3 text-muted" onClick={handleClick} />
                  </div>
                </Row>
              </Form.Group>
              {isLoading === true
                ? <div className="d-flex justify-content-center align-items-center mt-3">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
                : <>
                {
                  password !== confirmPassword || password === '' || confirmPassword === ''
                    ? <div className="d-grid">
                  <button type="submit" onClick={() => clickSubmit()} className="btn-costum-color input-costum border-0" size="lg" disabled block>
                    Reset Password
                  </button>
                </div>
                    : <div className="d-grid">
                  <button type="submit" onClick={() => clickSubmit()} className="btn-costum-color input-costum border-0" size="lg" block>
                    Reset Password
                  </button>
                </div>
                }
                </>
              }
            </Form>
          </Col>
        </Row>
        <Row className=" my-2">
          <p className="text-center mt-3">Back to<Link to="/signin"> login </Link> </p>
        </Row>
        <Row className="my-2">
          <div className="d-flex justify-content-center align-items-center">
            <Col>
              <hr />
            </Col>
            <Col xs={2} className="d-flex justify-content-center align-items-center">
              <p className="text-muted pt-2">Or</p>
            </Col>
            <Col>
              <hr />
            </Col>
          </div>
        </Row>
        <Row>
          <div className="d-flex justify-content-center align-items-center mt-2">
            <div className="px-3">
              <button className="btn shadow-sm bg-white text-muted fw-bolder btn-sign-with d-flex justify-content-center align-items-center btn-costum">
                <img src="https://img.icons8.com/fluent/24/000000/google-logo.png" className="me-lg-2" alt="google icon" />
                <span className="d-lg-block d-none">Google</span>
              </button>
            </div>
            <div className="px-3">
              <button className="btn shadow-sm bg-white text-muted fw-bolder btn-sign-with d-flex justify-content-center align-items-center btn-costum">
                <img src="https://img.icons8.com/color/29/000000/facebook-new.png" className="me-lg-2" alt="fb icon" />
                <span className="d-lg-block d-none">Facebook</span>
              </button>
            </div>
          </div>
        </Row>
      </Col>
    </React.Fragment>
  )
}

export default FormReset
