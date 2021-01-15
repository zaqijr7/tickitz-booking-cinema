import React, { Component } from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CardTicketHistory from '../CardTicketHistory/CardTicketHistory';
import ebv from '../../Assets/Images/ebu.id.png';
import cineone from '../../Assets/Images/cineone.png';
import hiflix from '../../Assets/Images/hiflix.png';

export default class InfoOrderHistory extends Component {
    render() {
        return (
                <>
                    <Col lg={8} className="my-5 my-lg-0">
                        <Card className="border-0">
                            <Card.Header className="bg-white d-flex pb-0 pt-3 px-4">
                                <Col xs='auto'>
                                    <Link className="text-decoration-none text-dark" to="/profile"> Account Settings </Link>
                                </Col>
                                <Col xs='auto' className="ms-5 profile-bar pb-3 text-muted">
                                   <Link className="text-decoration-none text-muted" to="/order-history"> Order History </Link>
                                </Col>
                            </Card.Header>
                            <Card.Body className="px-5">
                               <CardTicketHistory
                               time="Tuesday, 07 July 2020 - 04:30pm"
                               movie="Spider-Man: Homecoming"
                               cinema={cineone}
                               used={false}/>
                                <CardTicketHistory
                               time="Monday, 14 June 2020 - 02:00pm"
                               movie="Avengers: End Game"
                               cinema={ebv}
                               used={true}/>
                               <CardTicketHistory
                               time="Monday, 14 June 2020 - 02:00pm"
                               movie="Avengers: End Game"
                               cinema={hiflix}
                               used={false}/>
                            </Card.Body>
                        </Card>
                    </Col>
                </>
        )
    }
}
