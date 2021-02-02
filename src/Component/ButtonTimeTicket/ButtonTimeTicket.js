import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import MapIcon from '../../Assets/Images/location.png'


function ButtonTimeTicket () {
    const [date, setDate] = useState('')
    const [city, setCity] = useState('')
    const handleClick = (event) => {
        console.log(event.target.value);

    }
    return (
        <Row className="d-flex align-items-center justify-content-center my-5 py-4">
            <Col xs={12}>
                <Row>
                    <Col>
                        <p className="fw-bold fs-5 text-center">Showtimes and Tickets</p>
                    </Col>                      
                </Row>
                <Row className="justify-content-center">
                    <Col lg={3} className="position-relative d-flex align-items-center my-4">
                        <i className="far fa-calendar-minus icon-calendar position-absolute mx-3 text-muted" />
                        <input type="date" className="form-control py-2 ps-5 py-3 border-0 text-muted" style={{backgroundColor: '#f0f0f0'}} name="date" onChange={(date) => handleClick(date)} />
                        <i className="fas fa-chevron-down position-absolute d-none d-lg-block text-muted" style={{left: '87%'}} />
                        <i className="fas fa-chevron-down position-absolute d-md-block d-lg-none text-muted" style={{left: '92%'}} />
                    </Col> 
                    <Col lg={3} className="position-relative d-flex align-items-center my-sm-4 my-lg-0">
                        <img src={MapIcon} className=" position-absolute mx-3 text-muted" alt="map icon"/>                           
                        <select className="custom-select form-control py-2 ps-5 py-3 border-0 text-muted" id="inputGroupSelect02" style={{backgroundColor: '#f0f0f0'}} name="city" onChange={(date) => handleClick(date)}>
                        <option selected>Purwokerto</option>
                        <option value="Bandung">Bandung</option>
                        <option value="Jakarta">Jakarta</option>
                        <option value={3}>Semarang</option>
                        </select>
                        <i className="fas fa-chevron-down position-absolute d-none d-lg-block text-muted" style={{left: '87%'}} />
                        <i className="fas fa-chevron-down position-absolute d-md-block d-lg-none text-muted" style={{left: '92%'}} />
                    </Col>                                            
                </Row>
            </Col>
        </Row>
    )
}

export default ButtonTimeTicket;