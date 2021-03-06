/* eslint-disable no-mixed-operators */
/* eslint-disable react/jsx-key */
/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import http from '../../Helper/http'
import moment from 'moment'
import { selectedSeat, totalPayment } from '../../Redux/Action/transaction'

function BodyOrder (props) {
  const [cinema, setCinema] = useState('')
  const [seatSold, setSeatSold] = useState('')
  const [price, setPrice] = useState(0)
  const titleMovie = useSelector(state => state.selectedMovie.detailMovie.title)
  const priceMovie = useSelector(state => state.selectedMovie.detailMovie.price)
  const showDate = useSelector(state => state.schedule.showDate)
  const cinemaName = useSelector(state => state.transaction.cinemaName)
  const idCinema = useSelector(state => state.transaction.id_cinema)
  const showtimeName = useSelector(state => state.transaction.showtimeName)
  const dispatch = useDispatch()
  const [seat, setSeat] = useState([])

  const getDataSeatsIsSold = async (selectedMovie, cinemaName, selectedShowTime, showDate) => {
    try {
      const seatIsSold = await http().get(`/seat/sold?movie=${selectedMovie}&cinema=${cinemaName}&showTime=${selectedShowTime}&showDate=${showDate}`)
      if (seatIsSold.data.results.listSold !== null) {
        setSeatSold(seatIsSold.data.results.listSold)
      } else {
        setSeatSold('a, b')
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleClickChooseSeat = (event) => {
    console.log(event.target.checked);
    if (event.target.id && event.target.checked === false) {
      const newData = seat.filter(seat => seat !== event.target.id)
      setSeat(newData)
      if (event.target.id.indexOf('F10') > -1) {
        const loveNest = priceMovie * 2
        setPrice(price - loveNest)
        dispatch(totalPayment(price - loveNest))
      } else {
        setPrice(price - priceMovie)
        dispatch(totalPayment(price - priceMovie))
      }
    } else {
      setSeat([...seat, event.target.id])
      if (event.target.id.indexOf('F10') > -1) {
        const loveNest = priceMovie * 2
        setPrice(price + loveNest)
        dispatch(totalPayment(price + loveNest))
      } else {
        setPrice(price + priceMovie)
        dispatch(totalPayment(price + priceMovie))
      }
    }
  }

  const detailCinema = async (idCinema) => {
    try {
      const detailCinema = await http().get(`cinemas/${idCinema}`)
      setCinema(detailCinema.data.results.logo)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    detailCinema(idCinema)
  }, [])
  // console.log(seatSold, '<<<<<< ini seat sold');

  useEffect(() => {
    getDataSeatsIsSold(titleMovie, cinemaName, showtimeName, showDate)
    dispatch(selectedSeat(seat))
  }, [seat]);
  return (
    <Row className="p-3 px-lg-0">
      <Col lg={7}>
        <Row>
          <Col>
            <p className="fs-5 fw-bold">Movie Selected</p>
          </Col>
        </Row>
        <Row>
          <Col className="bg-white  rounded-3">
            <div className="py-3 px-3 d-flex align-items-center">
              <Col xs={6} className="ms-2">
                {titleMovie}
              </Col>
              <Col xs={6} className="d-flex justify-content-end">
                <Link className="btn me-3 btn-change_movie d-flex justify-content-center align-items-center" to='/'>
                  <small className="font-color-costum fw-bold">Change Movie</small>
                </Link>
              </Col>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="mt-4">
            <p className="fs-5 fw-bold">Chose Your Seat</p>
          </Col>
        </Row>
        <Row>
          <Col className="bg-white py-5 px-3 bg-white  rounded-3">
            <Row className="mt-4">
              <small className="text-muted fw-bold text-center">Screen</small>
            </Row>
            <div className="row py-1 rounded-pill bg-gray-light mx-4 my-3" />
            <Row>
              <Col lg={6}>
                <Card className="border-0">
                  <Card.Body className=" py-3 px-1">
                    {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map(row => {
                      return (
                        <Row className="gap-2 my-2 justify-content-center d-flex flex-d">
                          <div className="seat-layout text-center">{row}</div>
                          {[1, 2, 3, 4, 5, 6, 7].map(column => {
                            return (
                              <>
                                {
                                  seatSold.split(',').indexOf(`${row}${column}`) > -1
                                    ? <input type="checkbox" id={`${row}${column}`} onClick={(event) => handleClickChooseSeat(event)} className={'seat-layout btn-seat-layout btn-seat'} disabled />
                                    : <input type="checkbox" id={`${row}${column}`} onClick={(event) => handleClickChooseSeat(event)} className={'seat-layout btn-seat-layout btn-seat'} />
                                }
                              </>
                            )
                          })}
                        </Row>
                      )
                    })}
                    <Row className="gap-2 my-2 justify-content-center">
                      <div className="seat-layout text-muted" />
                      <div className="seat-layout badge text-muted">1</div>
                      <div className="seat-layout badge text-muted">2</div>
                      <div className="seat-layout badge text-muted">3</div>
                      <div className="seat-layout badge text-muted">4</div>
                      <div className="seat-layout badge text-muted">5</div>
                      <div className="seat-layout badge text-muted">6</div>
                      <div className="seat-layout badge text-muted">7</div>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className="card border-0">
                  <Card.Body className="card-body py-3 px-1">
                    {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map(row => {
                      return (
                        <Row className="gap-2 my-2 justify-content-center">
                          <div className="seat-layout text-center d-lg-none">{row}</div>
                          {[8, 9, 10, 11, 12, 13, 14].filter(col => row === 'F' && col !== 11 || row !== 'F').map(column => {
                            return (
                              <>
                                {
                                  row === 'F' && column === 10
                                    ? <>
                                      {
                                        seatSold.split(',').indexOf(`${row}${column}`) > -1
                                          ? <input type="checkbox" id={`${row}${column}`} onClick={(event) => handleClickChooseSeat(event)} className="seat-layout_love-nest btn-seat-layout_love-nest btn-seat bg-gray-light" style={{ width: 60 }} disabled />
                                          : <input type="checkbox" id={`${row}${column}`} onClick={(event) => handleClickChooseSeat(event)} className="seat-layout_love-nest btn-seat-layout_love-nest btn-seat bg-gray-light" style={{ width: 60 }} />
                                      }
                                    </>
                                    : <>
                                      {
                                        seatSold.split(',').indexOf(`${row}${column}`) > -1
                                          ? <input type="checkbox" id={`${row}${column}`} onClick={(event) => handleClickChooseSeat(event)} className="seat-layout btn-seat-layout btn-seat bg-gray-light" disabled />
                                          : <input type="checkbox" id={`${row}${column}`} onClick={(event) => handleClickChooseSeat(event)} className="seat-layout btn-seat-layout btn-seat bg-gray-light" />
                                      }
                                    </>
                                }
                              </>
                            )
                          })
                          }
                        </Row>
                      )
                    })
                    }
                    <Row className="gap-2 my-2 justify-content-center">
                      <div className="seat-layout text-muted d-lg-none" />
                      <div className="seat-layout badge text-muted">8</div>
                      <div className="seat-layout badge text-muted">9</div>
                      <div className="seat-layout badge text-muted">10</div>
                      <div className="seat-layout badge text-muted">11</div>
                      <div className="seat-layout badge text-muted">12</div>
                      <div className="seat-layout badge text-muted">13</div>
                      <div className="seat-layout badge text-muted">14</div>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="justify-content-center">
              Seating Key
            </Row>
            <Row className="mx-3 my-3 justify-content-center">
              <Col md="auto" className="d-flex mt-3">
                <div className="seat-layout bg-gray-light me-2" /> Available
              </Col>
              <Col md="auto" className="d-flex mt-3">
                <div className="seat-layout bg-theme me-2" /> Selected
              </Col>
              <Col md="auto" className="d-flex mt-3">
                <div className="seat-layout bg-pink me-2" /> Love Nest
              </Col>
              <Col md="auto" className="d-flex mt-3">
                <div className="seat-layout bg-dark-ash me-2" /> Sold
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="my-4">
          <Col md={12} lg={5} className="d-grid p-0  my-3 my-lg-0">
            <Link className="btn border-theme fw-bold font-color-costum rounded py-2" to="/"> Change your movie </Link>
          </Col>
          <Col lg={2} className="d-lg-block d-none" />
          <Col md={12} lg={5} className="d-grid p-0 my-3 my-lg-0">
            <Link className={`btn text-white fw-bold rounded py-2 border-0 ${seat.length === 0 ? 'bg-secondary disabled' : 'bg-theme'}`} to={'/payment'}>Book Now</Link>
          </Col>
        </Row>
      </Col>
      <Col lg={5} className="px-4">
        <Row>
          <Col>
            <p className="fs-5 fw-bold">Order Info</p>
          </Col>
        </Row>
        <Row className="row">
          <Card className="card shadow border-0 rounded my-4 my-lg-0">
            <Card.Body className="card-body py-4 px-2">
              <Container>
                <Row className="border-3 d-flex flex-column">
                  <Col className="d-flex justify-content-center align-items-center mt-2">
                    <img src={cinema} alt={cinema} className="logo-cinema-order" />
                  </Col>
                  <Col className="text-center my-4">
                    <p className="fs-4">{cinemaName}</p>
                  </Col>
                </Row>
                <Row className="my-1">
                  <Col xs={4}>
                    <small className="text-muted">Movie selected</small>
                  </Col>
                  <Col xs={8} className="text-end">
                    <p className>
                      {titleMovie}
                    </p>
                  </Col>
                </Row>
                <Row className="my-1">
                  <Col xs={5} className="">
                    <small className="text-muted">{moment(showDate).format('LL')}</small>
                  </Col>
                  <Col xs={7} className="text-end">
                    {showtimeName}
                  </Col>
                </Row>
                <Row className="my-1">
                  <Col xs={5} className="col-5">
                    <small className="text-muted">One ticket price</small>
                  </Col>
                  <Col xs={7} className="col-7 text-end">
                    <p className>{`Rp. ${priceMovie}`}</p>
                  </Col>
                </Row>
                <Row className="my-1">
                  <Col xs={5}>
                    <small className="text-muted">Seat choosed</small>
                  </Col>
                  <Col xs={7} className="text-end">
                    <p className>{seat.join(', ')}</p>
                  </Col>
                </Row>
                <Row className="my-3">
                  <hr />
                </Row>
                <Row className="my-1">
                  <Col xs={5}>
                    <p className="fs-5">Total Payment</p>
                  </Col>
                  <Col xs={7} className="text-end">
                    <p className="fs-5 fw-bold font-color-costum">{`Rp. ${price} `}</p>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Row>
      </Col>
    </Row>
  )
}

export default BodyOrder;
