import React, { useEffect, useState } from 'react'
import { Col, Row, Form, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { login, resetMsg } from '../../Redux/Action/auth'
import './FormSignin.css';

function FormSignin() {
   const [showpass, setShowpass] = useState(false)
   const [type, setType] = useState('password')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const state = useSelector(state => state.auth.token)
   const stateMsg = useSelector(state => state.auth.message)
   const dispatch = useDispatch()
   const history = useHistory()
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
      dispatch(resetMsg())
      if (event.target.name === 'email') {
         setEmail(`${event.target.value}`)
      } else if (event.target.name === 'password') {
         setPassword(`${event.target.value}`)
      }
   }
   const handleSubmit = (event) => {
      event.preventDefault()
      dispatch(login(email, password))
   }

   useEffect(() => {
      if (state && history.location.state) {
         return history.push({
            pathname:  `${history.location.state.from.pathname}` || '/'
         });
      } else if (state) {
         return history.push({
            pathname: '/'
         });
      }
   })
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
            {stateMsg !== '' && <Row> <Alert variant='danger'>{stateMsg}</Alert> </Row>}
            <Row>
               <Col>
                  <Form onSubmit={handleSubmit} >
                     <Form.Group controlId="email" className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" className="form-control input-costum" placeholder="Write your email" name="email" onChange={e => handleChange(e)} />
                     </Form.Group>

                     <Form.Group controlId="password" className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <div className="d-flex input-group-pass justify-content-end align-items-center">
                           <Form.Control type={type} className="form-control input-costum" placeholder="Write your password" name="password" onChange={e => handleChange(e)} />
                           <span className="far fa-eye icon-eye me-3 text-muted" onClick={handleClick} />
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

export default FormSignin