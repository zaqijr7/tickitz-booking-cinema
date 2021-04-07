import React, { Component } from 'react'
import { Col, Card, Row, Button } from 'react-bootstrap'
import moment from 'moment'


function CardTicketHistory(props) {
  return (
    <>
      <Row className="my-3">
        <Card className="px-0 bg-transparent rounded-3">
          <Card.Header className="d-flex justify-content-between align-items-center bg-transparent">
            <div>
              <small className='text-muted'>{`${moment(props.date).format('dddd')}, ${moment(props.date).format('LL')} - ${props.time}`}</small>
              <p className="fs-5 fs-bold">{props.movie}</p>
            </div>
            <img src={props.logo} className="logo-cinema" alt="cinema" />
          </Card.Header>
          <Card.Body className="px-4">
            <Row className="d-flex justify-content-lg-between align-items-center">
              {
                props.used ?
                  <Col>
                    <Button variant="secondary" className="py-2 btn-ticket">Ticket used</Button>
                  </Col>
                  :
                  <Col>
                    <Button variant="success" className="py-2 btn-ticket">Ticket in active</Button>
                  </Col>
              }

              <Col lg={3} className="position-relative d-flex align-items-center my-4">
                <select className="form-control py-2 bg-transparent border-0 text-muted" id="inputGroupSelect02">
                  <option selected>Show Details</option>
                </select>
                <i className="fas fa-chevron-down position-absolute d-none d-lg-block text-muted" style={{ right: '20%' }} />
                <i className="fas fa-chevron-down position-absolute d-block d-lg-none text-muted" style={{ left: '32%' }} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </>
  )
}


export default CardTicketHistory
