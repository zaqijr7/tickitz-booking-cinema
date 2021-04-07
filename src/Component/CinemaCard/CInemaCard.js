import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Container, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { selectedTime, selectedCinema, selectedCinemaName, selectedShowTimeName } from '../../Redux/Action/transaction'
import http from '../../Helper/http'


function CinemaCard(props) {
  const { id } = useParams()
  const [time, setTime] = useState('')
  const dispatch = useDispatch()
  const cinemaId = useSelector(state => state.transaction.id_cinema)

  const handleClickTime = (event) => {
    event.preventDefault()
    setTime(event.target.id)
    dispatch(selectedTime(event.target.id))
    dispatch(selectedCinema(props.idCinema))
  }

  // const selectCinema = () => {

  // }

  const getNameCinema = async (idCinema) => {
    const dataCinema = await http().get(`/cinemas/${idCinema}`)
    dispatch(selectedCinemaName(dataCinema.data.results.name))
  }


  // const getNameShowtime = async (dataShowTime) => {
  //     try {
  //         const dataTime = await http().get(`showtime/${dataShowTime}`)
  //         setShowTime(dataTime.data.results.name)
  //     } catch (err) {
  //         setStatusRes(500)
  //     }
  // }

  useEffect(() => {
    getNameCinema(cinemaId)
    // showtimeName(time)
  }, [cinemaId])

  return (
    <React.Fragment>
      <Col lg={4} className="my-3">
        <Form id={props.idCinema}>
          <Card className="border rounded my-4 my-lg-0 card-shadow">
            <Card.Body className="py-4 px-1">
              <Container>
                <Row className="border-3">
                  <Col lg={6} className="d-flex justify-content-center align-items-center">
                    <img src={props.logo} className="logo-cinema" alt="cinema logo" />
                  </Col>
                  <Col lg={6} className="text-center text-lg-start mt-2 mt-lg-0">
                    <p className="fs-5 fw-bold">{props.cinema}</p>
                    <small className="text-muted" style={{ fontSize: 12 }}>{props.address}</small>
                  </Col>
                </Row>
                <Row className="border-bottom my-3">
                </Row>
                <Row className="my-3">
                  {
                    props.listShowTime.map(time => {
                      return (
                        <Col xs={4} className='py-3' style={{ fontSize: 12 }}>
                          <button id={time[0].id} className={`text-muted text-center bg-transparent border-0 btn-time`} onClick={(e) => handleClickTime(e)}>{time[0].name}</button>
                        </Col>
                      )
                    })
                  }
                </Row>
                <Row className="mt-4">
                  <Col xs={6}>
                    <p className="text-muted">Price</p>
                  </Col>
                  <Col xs={6} className="d-flex justify-content-end">
                    <p className="text-right fw-bold">{`$${props.price}.00/seat`}</p>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col xs={6} className="d-flex justify-content-center align-items-center">
                    {
                      time
                        ?
                        <Link to={`/moviedetail/${id}/order/`}>
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
    </React.Fragment>
  )
}

export default CinemaCard;
