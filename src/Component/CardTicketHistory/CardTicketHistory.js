import React, { Component } from 'react';
import { Col, Card, Row, Button, Collapse } from 'react-bootstrap';
import MapIcon from '../../Assets/Images/location.png';


export default class CardTicketHistory extends Component { 
    render() {
        return (
            <>
                <Row className="my-3">
                    <Card className="px-0 bg-transparent rounded-3">
                        <Card.Header className="d-flex justify-content-between align-items-center bg-transparent">
                            <div>
                                <small className='text-muted'>{this.props.time}</small>
                                <p className="fs-5 fs-bold">{this.props.movie}</p>
                            </div>
                            <img src={this.props.cinema} />
                        </Card.Header>
                        <Card.Body className="px-4">
                            <Row className="d-flex justify-content-lg-between align-items-center">
                                {
                                this.props.used ?
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
                                    <i className="fas fa-chevron-down position-absolute d-none d-lg-block text-muted" style={{right: '20%'}} />
                                    <i className="fas fa-chevron-down position-absolute d-block d-lg-none text-muted" style={{left: '32%'}} />
                                </Col> 
                            </Row>
                        </Card.Body>
                    </Card>
                </Row>
            </>
        )
    }
}
