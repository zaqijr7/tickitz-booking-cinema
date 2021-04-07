import React from 'react'
import { Card, Col, Form, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'


function BodyPayment({ children }) {
  const dateShow = useSelector(state => state.schedule.showDate)
  const titleMovie = useSelector(state => state.selectedMovie.detailMovie.title)
  const dataTicket = useSelector(state => state.transaction.id_seat)
  const priceMovie = useSelector(state => state.selectedMovie.detailMovie.price)
  const showtimeName = useSelector(state => state.transaction.showtimeName)
  const cinemaName = useSelector(state => state.transaction.cinemaName)
  const totalPayment = useSelector(state => state.transaction.totalPayment)

  return (
    <Row className="p-3 px-lg-0">
      <Col lg={8}>
        <Row>
          <Col>
            <p className="fs-5 fw-bold">Payment Info</p>
          </Col>
        </Row>
        <Row>
          <Col className="bg-white rounded-3 py-4 px-3">
            <Row className="px-2">
              <Col xs={6}>
                <small className="text-start text-muted">Date &amp; time</small>
              </Col>
              <Col xs={6}>
                <p className="text-end">{`${moment(dateShow).format('LL')} at ${showtimeName}`}</p>
              </Col>
              <Col xs={12} style={{ marginTop: '-20px' }}>
                <hr />
              </Col>
            </Row>
            <Row className="row px-2">
              <Col xs={6}>
                <small className="text-start text-muted">Movie title</small>
              </Col>
              <Col xs={6}>
                <p className="text-end">{`${titleMovie}`}</p>
              </Col>
              <Col xs={12} style={{ marginTop: '-20px' }}>
                <hr />
              </Col>
            </Row>
            <Row className="px-2">
              <Col xs={6}>
                <small className="text-start text-muted">Cinema name</small>
              </Col>
              <Col xs={6}>
                <p className="text-end">{`${cinemaName}`}</p>
              </Col>
              <Col xs={12} style={{ marginTop: '-20px' }}>
                <hr />
              </Col>
            </Row>
            <Row className="px-2">
              <Col xs={6}>
                <small className="text-start text-muted">Number of tickets</small>
              </Col>
              <Col xs={6}>
                <p className="text-end">{`${dataTicket.length} pieces`}</p>
              </Col>
              <Col xs={12} style={{ marginTop: '-20px' }}>
                <hr />
              </Col>
            </Row>
            <Row className="px-2">
              <Col xs={6}>
                <small className="text-start text-muted">Total payment</small>
              </Col>
              <Col xs={6}>
                <p className="text-end fw-bold fs-5">{`$${totalPayment}`}</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="mt-4">
            <p className="fs-5 fw-bold">Choose a Payment Method</p>
          </Col>
        </Row>
        <Col>
          <Col className="bg-white py-5 px-3 bg-white  rounded-3">
            <Row className="justify-content-center">
              {children}
            </Row>
            <Row className="mt-3">
              <Col className="pe-0 ps-5">
                <hr />
              </Col>
              <Col xs={1} className="p-0 text-center">
                <small className="text-muted">Or</small>
              </Col>
              <Col className="ps-0 pe-5">
                <hr />
              </Col>
            </Row>
            <Row className="mt-3 text-center">
              <p>
                Pay via cash. <Link to='/' className="font-color-costum text-decoration-none">See how it work</Link>
              </p>
            </Row>
          </Col>
        </Col>
        <Row className="my-4">
          <Col className="d-grid p-0  my-2 mt-lg-3 mb-lg-5">
            <Link className="btn border-theme fw-bold font-color-costum rounded py-2" to="/order">Prvious step</Link>
          </Col>
          <Col lg={2} className="d-lg-block d-none" />
          <Col className="d-grid p-0 my-2 mt-lg-3 mb-lg-5">
            <Link className="btn bg-theme text-white fw-bold rounded py-2" to="/ticket">Pay your order</Link>
          </Col>
        </Row>
      </Col>
      <Col lg={4} className="px-4">
        <Row>
          <Col className="col">
            <p className="fs-5 fw-bold">Personal Info</p>
          </Col>
        </Row>
        <Row>
          <Card className="shadow border-0 rounded my-4 my-lg-0">
            <Card.Body className="py-4 px-2">
              <Row>
                <Form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"> <small className="text-muted">Full Name</small></label>
                    <Form.Control type="text" className="form-control py-2 text-muted" id="exampleInputEmail1" defaultValue="Jonas El Rodriguez" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"> <small className="text-muted">Email</small></label>
                    <Form.Control type="email" className="form-control py-2 text-muted" id="exampleInputEmail1" defaultValue="jonasrodri123@gmail.com" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"> <small className="text-muted">Phone Number</small></label>
                    <div className="input-group mb-3">
                      <span className="input-group-text bg-transparent border-end-0 text-muted">+62</span>
                      <div className="border my-2" />
                      <Form.Control type="text" className="form-control py-2 border-start-0 text-muted" defaultValue={81445687121} />
                    </div>
                  </div>
                  <Col className="warning-div py-2 px-3 rounded-3">
                    <i className="fas fa-exclamation-triangle me-3" style={{ color: '#F4B740' }} />
                                        Fill your data correctly.
                                    </Col>
                </Form>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Col>
    </Row>
  )
}

export default BodyPayment;
