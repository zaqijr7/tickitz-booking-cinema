import React, { useEffect, useState } from 'react';
import { Alert, Card, Col, Row, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import http from '../../Helper/http';
import { updateProfileUser } from '../../Redux/Action/auth'

function FormAccountSet() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPass, setShowPass] = useState(false)
  const [messageRes, setMessageRes] = useState('')
  const [statusRes, setStatusRes] = useState('')
  const [type, setType] = useState('password')
  const defaultFirstName = useSelector(state => state.auth.profile.firstName)
  const defaultLastName = useSelector(state => state.auth.profile.lastName)
  const defaultEmail = useSelector(state => state.auth.profile.email)
  const defaultPhoneNumber = useSelector(state => state.auth.profile.phoneNumber)
  const token = useSelector(state => state.auth.token)
  const dispatch = useDispatch()


  const handleInput = (event) => {

    if (event.target.name === 'firstName') {
      setFirstName(event.target.value)
      setStatusRes('')
    } else if (event.target.name === 'lastName') {
      setLastName(event.target.value)
    } else if (event.target.name === 'email') {
      setEmail(event.target.value)
    } else if (event.target.name === 'phoneNumber') {
      setPhoneNumber(event.target.value)
    } else if (event.target.name === 'password') {
      setPassword(event.target.value)
    } else if (event.target.name === 'confirmPassword') {
      setConfirmPassword(event.target.value)
    }
  }

  const updateProfile = async () => {
    const params = new URLSearchParams()
    params.append('firstName', firstName || defaultFirstName)
    params.append('lastName', lastName || defaultLastName)
    params.append('phoneNumber', phoneNumber || defaultPhoneNumber)
    params.append('email', email || defaultEmail)
    params.append('password', confirmPassword)
    try {
      const updateProfile = await http(token).put(`/profile`, params)
      dispatch(updateProfileUser(updateProfile.data.results))
      setStatusRes(updateProfile.status)
      const response = updateProfile.data
      setMessageRes(response.message)
      setTimeout(() => {
        setStatusRes('')
      }, 2000)
    } catch (err) {
      const { message } = err.data
      setMessageRes(message)
    }
  }


  const setTypePass = () => {
    if (showPass) {
      setShowPass(!showPass)
      setType('password')
    } else {
      setShowPass(!showPass)
      setType('text')
    }
  }

  console.log(statusRes, '<<< ini response status');
  console.log(messageRes, '<<< ini response pesan');



  return (
    <>
      <Col lg={8} className="my-5 my-lg-0">
        <Card className="border-0">
          <Card.Header className="bg-white d-flex pb-0 pt-3 px-4">
            <Col xs='auto' className="profile-bar pb-3 text-muted">
              Account Settings
                                </Col>
            <Col xs='auto' className="ms-5">
              <Link className="text-decoration-none text-dark" to="/profile/order-history"> Order History </Link>
            </Col>
          </Card.Header>
          <Card.Body className="px-4">
            <Row>
              <span className="mt-3 mb-2"> Detail Information </span>
              <hr />
            </Row>
            {
              defaultFirstName && defaultLastName && defaultPhoneNumber === 'UNDEFINED' ?
                <Alert variant="warning">Profile data has not been updated</Alert>
                :
                ''
            }
            {
              statusRes === 200 ?
                <Alert variant="success">{messageRes}</Alert>
                :
                ''
            }
            <Row>
              <Col>
                <Form>
                  <Row>
                    <Col lg={6}>
                      <Form.Group controlId="firstName" className="my-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" className="form-control form-profile text-muted" defaultValue={defaultFirstName !== 'UNDEFINED' ? defaultFirstName : ''} name="firstName" onChange={(event) => handleInput(event)} />
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Group controlId="lastName" className="my-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" className="form-control form-profile text-muted" defaultValue={defaultLastName !== 'UNDEFINED' ? defaultLastName : ''} name="lastName" onChange={(event) => handleInput(event)} />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                      <Form.Group controlId="email" className="my-3">
                        <Form.Label >Email</Form.Label>
                        <Form.Control type="email" className="form-control form-profile text-muted" defaultValue={defaultEmail} name="email" onChange={(event) => handleInput(event)} />
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Group controlId="phoneNumber" className="my-3">
                        <div className="mb-3">
                          <Form.Label className="form-label"> <small className="text-muted">Phone Number</small></Form.Label>
                          <div className="input-group mb-3 form-profile">
                            <span className="input-group-text bg-transparent border-end-0 text-muted">+62</span>
                            <div className="border my-2" />
                            <Form.Control type="text" className="form-control py-2 border-start-0 text-muted" defaultValue={defaultPhoneNumber !== 'UNDEFINED' ? defaultPhoneNumber : ''} name="phoneNumber" onChange={(event) => handleInput(event)} />
                          </div>
                        </div>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="mt-3">
                      Account and Privacy
                                                    <hr />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                      <Form.Group controlId="password" className="my-3">
                        <Form.Label>New Password</Form.Label>
                        <div className="d-flex input-group-pass justify-content-end align-items-center">
                          <Form.Control type={type} className="form-control form-profile" placeholder="Write your password" name="password" onChange={(event) => handleInput(event)} />
                          <span className="far fa-eye icon-eye me-3 text-muted" onClick={() => setTypePass()} />
                        </div>
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Group controlId="confirmPassword" className="my-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <div className="d-flex input-group-pass justify-content-end align-items-center">
                          {
                            password === confirmPassword ?
                              <Form.Control type={type} className="form-control form-profile" placeholder="Write your password" name="confirmPassword" onChange={(event) => handleInput(event)} />
                              :
                              <Form.Control type={type} className="form-control form-profile border border-danger border-3" placeholder="Write your password" name="confirmPassword" onChange={(event) => handleInput(event)} />
                          }

                          <span className="far fa-eye icon-eye me-3 text-muted" onClick={() => setTypePass()} />
                        </div>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} className="d-grid mt-3">
                      {
                        password === confirmPassword ?
                          <Button variant="trasnparent" className="py-2 btn-update text-white mb-3" onClick={() => updateProfile()}>
                            Update Changes
                          </Button>
                          :
                          <Button variant="trasnparent" className="py-2 btn-update text-white mb-3" disabled>
                            Update Changes
                          </Button>
                      }

                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </>
  )
}

export default FormAccountSet
