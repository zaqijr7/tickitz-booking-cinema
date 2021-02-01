import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import './FormSignup.css';
import { register, resetMsg } from '../../Redux/Action/register';

function FormSignup() {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const state = useSelector(state => state.register.email)
   const stateMsg = useSelector(state => state.register.message)
   const dispatch = useDispatch()
   const history = useHistory()

   const handleChange = (event) => {
      dispatch(resetMsg())
      if(event.target.name === 'email'){
         setEmail(`${event.target.value}`)
         console.log(email, '<<<<<ini email');
      }else if(event.target.name === 'password'){
         setPassword(`${event.target.value}`)
         console.log(password, '<<<<<ini password');
      }
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      dispatch(register(email, password))
   }

   useEffect(() => {
      if(state){
         history.push({
            pathname: '/signin'
         })
      }
   })

   return (
      <React.Fragment>
         <Row className="mb-3">
            <Col>
               <h4 className="text-center text-lg-start">Fill your additional details</h4>
            </Col>
         </Row>
         {stateMsg !== '' && <Row> <Alert variant='danger'> {stateMsg} </Alert> </Row>}
         <Row>
            <Col>
               <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formBasicEmail" className="mb-3">
                     <Form.Label>Email</Form.Label>
                     <Form.Control type="email" className="form-control input-costum" placeholder="Write your email" name="email" onChange={event => handleChange(event)} />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword" className="mb-3">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" className="form-control input-costum" placeholder="Write your password" name="password" onChange={event => handleChange(event)} />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox" className="mb-3">
                     <input type="checkbox" className="form-check-input checkbox-costum me-3" id="exampleCheck1" />
                     <label className="form-check-label" for="exampleCheck1">I agree to terms & conditions</label>
                  </Form.Group>
                  <div className="d-grid">
                     <button type="submit" className="btn-costum-color input-costum border-0" size="lg" block>
                        Join for free now
                </button>
                  </div>
               </Form>
            </Col>
         </Row>
         <Row className=" mt-3 mb-2">
            <p className="text-center">Do You Have Account? <Link to="/signin">Signin</Link></p>
         </Row>
         <Row className=" my-2">
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
      </React.Fragment>
   )
}

export default FormSignup;