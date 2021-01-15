import React, { useState } from 'react';
import { Card, Row, Col, Container, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import cinemaList from '../../DataDummy/CinemaList';


function CinemaCard(props) {
    const {id} = useParams();
    const [time, setTime] = useState('');
    const [card, setCard] = useState('');

    const handleClickTime = (event) => {
        setTime(event.target.id);
    }
    const handleSubmitCard = (event) => {
        event.preventDefault();
        setCard(event.target.id);
    }
    console.log(time);

    return (
            <React.Fragment>
                <Row className="my-4 d-flex">
                {
                    cinemaList.map((value, index) => {
                        return (
                            <Col lg={4}>
                                <Form id={value.id}  onSubmit={(e) => handleSubmitCard(e)}>
                                <Card className="border rounded my-4 my-lg-0 card-shadow" key={index}>
                                    <Card.Body className="py-4 px-1">
                                        <Container>
                                            <Row className="border-3">
                                                <Col lg={6} className="d-flex justify-content-center align-items-center">
                                                    <img src={value.cinema} alt="cinema logo"/>
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
                                                    <button id={0} className="text-muted text-center bg-transparent border-0" onClick={(e) => handleClickTime(e)}>{value.time[0]}</button> 
                                                </Col>
                                                <Col xs={3} style={{fontSize: 12}}>
                                                    <button id={1} className="text-muted text-center bg-transparent border-0" onClick={(e) => handleClickTime(e)}>{value.time[1]}</button> 
                                                </Col>
                                                <Col xs={3} style={{fontSize: 12}}>
                                                    <button id={2} className="text-center bg-transparent border-0" onClick={(e) => handleClickTime(e)} style={{color: '#A0A3BD'}} disabled>{value.time[2]}</button>  
                                                </Col>
                                                <Col xs={3} style={{fontSize: 12}}>
                                                    <button id={3} className="text-muted text-center bg-transparent border-0" onClick={(e) => handleClickTime(e)}>{value.time[3]}</button>  
                                                </Col>
                                            </Row>
                                            <Row className="my-3">
                                                <Col xs={3} style={{fontSize: 12}}>
                                                    <button id={4} className="text-muted text-center bg-transparent border-0"onClick={(e) => handleClickTime(e)}>{value.time[4]}</button> 
                                                </Col> 
                                                <Col xs={3} style={{fontSize: 12}}>
                                                    <button id={5} className="text-center bg-transparent border-0" onClick={(e) => handleClickTime(e)} style={{color: '#A0A3BD'}} disabled>{value.time[5]}</button> 
                                                </Col>
                                                <Col xs={3} style={{fontSize: 12}}>
                                                    <button id={6} className="text-muted text-center bg-transparent border-0" onClick={(e) => handleClickTime(e)}>{value.time[6]}</button>  
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
                                                    {
                                                        time 
                                                        ? 
                                                        <Link to={`/order/${id}/${time}/${card}`}>
                                                        <button className="btn-booknow text-white border-0 rounded-3">Book Now</button>
                                                        </Link>
                                                        :
                                                        <button className="btn-booknow text-white border-0 rounded-3" disabled>Book Now</button>
                                                    }
                                                </Col>
                                                <Col xs={6} className="d-flex justify-content-end">
                                                    <p className="text-right fw-bold font-color-costums">Add To Cart</p>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Card.Body>
                                </Card>
                                </Form>
                            </Col>
                        )
                    })
                }
                </Row>
            </React.Fragment>
    )
}

export default CinemaCard;