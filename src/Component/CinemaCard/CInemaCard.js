import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import EbvIdLogo from '../../Assets/Images/ebu.id.png';
import CineOneLogo from '../../Assets/Images/cineone.png';
import HiflixLogo from '../../Assets/Images/hiflix.png';

const cinemaList =[
    {cinema: EbvIdLogo, name: 'ebv.id', address:'Whatever street No.12, South Purwokerto'},
    {cinema: CineOneLogo, name: 'CineOne21', address:'Downcare street  No. 21, East Purwokerto'},
    {cinema: HiflixLogo, name: 'Hiflix Cinema', address:'Colonel street No. 2, East Purwokerto'}
]
function CinemaCard() {
    return (
            <React.Fragment>
                <Row className="my-4 d-flex">
                {
                    cinemaList.map((value, index) => {
                        return (
                            <Col lg={4}>
                                <Card className="border rounded my-4 my-lg-0" key={index}>
                                    <Card.Body className="py-4 px-1">
                                        <Container>
                                            <Row className="border-3">
                                                <Col lg={6} className="d-flex justify-content-center align-items-center">
                                                    <img src={value.cinema}alt srcSet />
                                                </Col>
                                                <Col lg={6} className="text-center text-lg-start mt-2 mt-lg-0">
                                                    <p className="fs-5 fw-bold">{value.name}</p>
                                                    <small className="text-muted" style={{fontSize: 12}}>{value.address}</small>
                                                </Col>                          
                                            </Row>
                                            <Row className="border-bottom my-3">                                                       
                                            </Row>
                                            <Row className="my-3">
                                                <Col xs={3} style={{fontSize: 12}}>
                                                    <p className="text-muted text-center">08:30am</p> 
                                                </Col>
                                                <Col xs={3} style={{fontSize: 12}}>
                                                    <p className="text-muted text-center">10:30pm</p> 
                                                </Col>
                                                <Col xs={3} style={{fontSize: 12}}>
                                                    <p className="text-center" style={{color: '#A0A3BD'}}>12:00pm</p>  
                                                </Col>
                                                <Col xs={3} style={{fontSize: 12}}>
                                                    <p className="text-muted text-center">02:00pm</p>  
                                                </Col>
                                            </Row>
                                            <Row className="my-3">
                                                <Col xs={3} style={{fontSize: 12}}>
                                                    <p className="text-muted text-center">04:30pm</p> 
                                                </Col> 
                                                <Col xs={3} style={{fontSize: 12}}>
                                                    <p className="text-center" style={{color: '#A0A3BD'}}>07:00pm</p> 
                                                </Col>
                                                <Col xs={3} style={{fontSize: 12}}>
                                                    <p className="text-muted text-center">08:30pm</p>  
                                                </Col>
                                                <Col xs={3} style={{fontSize: 12}}> 
                                                </Col>
                                            </Row>
                                            <Row className="mt-4">
                                                <Col xs={6}>
                                                    <p className="text-muted">Price</p>
                                                </Col>
                                                <Col xs={6} className="d-flex justify-content-end">
                                                    <p className="text-right fw-bold">$10.00/seat</p>
                                                </Col>
                                            </Row>
                                            <Row className="mt-4">
                                                <Col xs={6} className="d-flex justify-content-center align-items-center">
                                                    <button className="btn-booknow text-white border-0 rounded-3" href="../order/">Book Now</button>
                                                </Col>
                                                <Col xs={6} className="d-flex justify-content-end">
                                                    <p className="text-right fw-bold font-color-costums">Add To Cart</p>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
                </Row>
            </React.Fragment>
    )
}

export default CinemaCard;