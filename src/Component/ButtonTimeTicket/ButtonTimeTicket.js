import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { inputDate, inputCity } from '../../Redux/Action/findSchedule'
import moment from 'moment'
import MapIcon from '../../Assets/Images/location.png'


function ButtonTimeTicket () {

    const dispatch = useDispatch()
    const handleClick = (event) => {
        if(event.target.name === 'date') {
            dispatch(inputDate(event.target.value))
        } else if (event.target.name === 'city') {
            dispatch(inputCity(event.target.value))
        }
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
                        <input type="date" className="form-control py-2 ps-5 py-3 border-0 text-muted" defaultValue={moment().format('YYYY-MM-DD')} style={{backgroundColor: '#f0f0f0'}} name="date" onChange={(date) => handleClick(date)} />
                        <i className="fas fa-chevron-down position-absolute d-none d-lg-block text-muted" style={{left: '87%'}} />
                        <i className="fas fa-chevron-down position-absolute d-md-block d-lg-none text-muted" style={{left: '92%'}} />
                    </Col> 
                    <Col lg={3} className="position-relative d-flex align-items-center my-sm-4 my-lg-0">
                        <img src={MapIcon} className=" position-absolute mx-3 text-muted" alt="map icon"/>                           
                        <select className="custom-select form-control py-2 ps-5 py-3 border-0 text-muted" id="inputGroupSelect02" style={{backgroundColor: '#f0f0f0'}} name="city" onChange={(date) => handleClick(date)}>
                        <option selected value="Jakarta">Jakarta</option>
                        <option value="Tanggerang">Tanggerang</option>
                        <option value="Bandung">Bandung</option>
                        <option value="Semarang">Semarang</option>
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