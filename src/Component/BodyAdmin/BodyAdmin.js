/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Form, Container } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import MapIcon from '../../Assets/Images/location.png'

import http from '../../Helper/http';

function BodyAdmin () {
  const [listGenre, setListGenre] = useState(null)
  const [listLocation, setListLocation] = useState(null)
  const [listCinema, setListCinema] = useState(null)
  const [listTimes, setListTimes] = useState(null)
  const [selectCinema, setSelectCinema] = useState(null)
  const [dateShow, setDateShow] = useState(null)
  const [timeShow, setTimeShow] = useState('')
  const [file, setFile] = useState(null)
  const [movieName, setMovieName] = useState('')
  const [selectCity, setSelectCity] = useState('')
  const [selectGenre, setSelectGenre] = useState('')
  const [releaseDate, setReleaseDate] = useState('')
  const [directors, setDirectors] = useState('')
  const [durationHour, setDurationHour] = useState('')
  const [durationMinute, setDurationMinute] = useState('')
  const [cast, setCast] = useState('')
  const [synopsis, setSynopsis] = useState('')
  const duration = durationHour + durationMinute
  const token = useSelector(state => state.auth.token)
  const fileUrl = file !== null ? URL.createObjectURL(file) : ''
  const getListGenre = async () => {
    try {
      const genres = await http().get('genre')
      setListGenre(genres.data.results)
    } catch (err) {
      setListGenre([])
    }
  }

  const listLocationCinema = async () => {
    try {
      const locations = await http().get('location/cinemas')
      setListLocation(locations.data.results)
    } catch (err) {
      setListLocation([])
    }
  }

  const getCinema = async (city) => {
    try {
      const cinemas = await http().post(`location/cinemas?city=${city}`)
      setListCinema(cinemas.data.results)
    } catch (err) {
      setListCinema(null)
    }
  }

  const handleSchedule = (event) => {
    if (event.target.name === 'city') {
      setSelectCity(event.target.value)
    } else if (event.target.name === 'selectCinema') {
      setSelectCinema(event.target.id)
    } else if (event.target.name === 'dateShow') {
      setDateShow(event.target.value)
    } else if (event.target.name === 'timeShow') {
      if (event.target.id && event.target.checked === false) {
        const newData = timeShow.filter(time => time !== event.target.id)
        setTimeShow(newData)
      } else {
        setTimeShow([...timeShow, event.target.id])
      }
    }
  }

  const getShowTime = async () => {
    try {
      const showTimes = await http(token).get('admin/shw-time/')
      setListTimes(showTimes.data.results)
      console.log(listTimes);
    } catch (err) {
      setListTimes(null)
    }
  }

  const handleMovieDescription = (event) => {
    if (event.target.name === 'movieName') {
      setMovieName(event.target.value)
    } else if (event.target.name === 'genreMovie') {
      if (event.target.id && event.target.checked === false) {
        const newData = selectGenre.filter(seat => seat !== event.target.id)
        setSelectGenre(newData)
      } else {
        setSelectGenre([...selectGenre, event.target.id])
      }
    } else if (event.target.name === 'releaseDate') {
      setReleaseDate(event.target.value)
    } else if (event.target.name === 'durationHour') {
      const toMinute = Number(event.target.value) * 60
      setDurationHour(Number(toMinute))
    } else if (event.target.name === 'durationMinute') {
      setDurationMinute(Number(event.target.value))
    } else if (event.target.name === 'directors') {
      setDirectors(event.target.value)
    } else if (event.target.name === 'cast') {
      setCast(event.target.value)
    } else if (event.target.name === 'synopsis') {
      setSynopsis(event.target.value)
    }
  }

  // const handlePost = async (event) => {
  //     event.preventDefault()
  //     const form = new FormData()
  //     if(file !== null){
  //         form.append('language', 'en')
  //         form.append('director', directors)
  //         form.append('actors', cast)
  //         form.append('title', movieName)
  //         form.append('synopsis', synopsis)
  //         form.append('relaseDate', releaseDate)
  //         form.append('runtime', duration)
  //         form.append('poster', file)
  //         form.append('price', '20')
  //         form.append('idGenre', selectGenre)
  //         const response = await http(token).patch('admin/movies/', form)
  //         console.log(response.data);
  // }

  // console.log(movieName);
  console.log(listGenre);
  // console.log(releaseDate);
  // console.log(duration);
  // console.log(directors);
  // console.log(cast);
  // console.log(synopsis);

  useEffect(() => {
    getCinema(selectCity)
  }, [selectCity])

  useEffect(() => {
    getListGenre()
    listLocationCinema()
    getShowTime()
  }, [])

  return (
    <Container>
      <Row>
        <Col lg={8}>
          <Row>
            <p className="fs-5 fw-bold">Movie Description</p>
          </Row>
          <Row>
            <Card>
              <Card.Body>
                <Row>
                  <Col lg={4} className="d-flex justify-content-center flex-column">
                    <Card className="thumbnail rounded-3 my-3">
                      <Card.Body className="d-flex justify-content-center">
                        <Card.Img variant="top" src={fileUrl} alt="Image Movie" className="movie-thumbnail" />
                      </Card.Body>
                    </Card>
                    <div className="file-input d-flex justify-content-center align-items-center mb-3">
                      <input className="input-photo_profile" type="file" name="thumbnail" onChange={(event) => setFile(event.target.files[0])} />
                      <label htmlFor="thumbnail" className="text-white fw-bold  d-flex justify-content-center align-items-center">
                        <i className="fas fa-upload me-3"></i>
                          Thumbnail
                      </label>
                    </div>
                  </Col>
                  <Col lg={8}>
                    <Form>
                      <Row className="my-3">
                        <Col>
                          <Form.Label>Movie Name</Form.Label>
                          <Form.Control type="text" className="py-3" name="movieName" onChange={(event) => handleMovieDescription(event)} />
                        </Col>
                      </Row>
                      <Row className="my-3">
                        <Col>
                          <Form.Label>Categori</Form.Label>
                          {/* <Form.Control type="text" className="py-3" value="Action, Adventure, Sci-Fi" /> */}
                          <div className="dropdown d-grid">
                            <button className="btn border border-1 py-3 text-start" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                              Insert Genre
                                                        </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                              {listGenre === null
                                ? 'Loading...'
                                : listGenre.map((genre, index) => {
                                  return (
                                    <div className="d-flex align-items-center dropdown-item" key={index}>
                                      <input type="checkbox" className="checkbox-genre" name="genreMovie" id={genre.id} onChange={(event) => handleMovieDescription(event)} />
                                      <label className="checkbox">{genre.name}</label>
                                    </div>
                                  )
                                })
                              }
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <Row className="my-3">
                        <Col lg={6}>
                          <Form.Label>Release date</Form.Label>
                          <Form.Control type="date" className="py-3" name="releaseDate" onChange={(event) => handleMovieDescription(event)} />
                        </Col>
                        <Col lg={6}>
                          <Form.Label className="text-center">Duration (hour / minute)</Form.Label>
                          <Row>
                            <Col>
                              <Form.Control type="text" className="py-3" name="durationHour" onChange={(event) => handleMovieDescription(event)} />
                            </Col>
                            <Col>
                              <Form.Control type="text" className="py-3" name="durationMinute" onChange={(event) => handleMovieDescription(event)} />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Form>
                  </Col>
                </Row>
                <Row>
                  <Col xs={4}>
                    <Form.Label>Director</Form.Label>
                    <Form.Control type="text" className="py-3" name="directors" onChange={(event) => handleMovieDescription(event)} />
                  </Col>
                  <Col xs={8}>
                    <Form.Label>Cast</Form.Label>
                    <Form.Control type="text" className="py-3" name="cast" onChange={(event) => handleMovieDescription(event)} />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label>Synopsis</Form.Label>
                    <textarea className="form-control py-3" name="synopsis" onChange={(event) => handleMovieDescription(event)}> </textarea>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Col xs={12} className="d-grid p-0 my-3">
              <button type="submit" className="btn bg-theme text-white fw-bold rounded py-3 border-0">Create Cinema and Schedule</button>
            </Col>
          </Row>
        </Col>
        <Col lg={4} className="px-4">
          <Row>
            <p className="fs-5 fw-bold">Premiere Location</p>
          </Row>
          <Row>
            <Card>
              <Card.Body>
                <Row>
                  <Col lg={10}>
                    <Form>
                      <Form.Group className="bg-light border-0 position-relative d-flex align-items-center">
                        <img src={MapIcon} className=" position-absolute mx-3 text-muted" alt="map icon" />
                        <select className="custom-select form-control py-2 ps-5 border-0 text-muted" id="inputGroupSelect02" style={{ backgroundColor: '#f0f0f0' }} name="city" onChange={(event) => handleSchedule(event)}>
                          {listLocation === null
                            ? 'Loading...'
                            : listLocation.map((city, index) => {
                              return (
                                <>
                                  <option key={index} selected value={`${city.city}`}>{city.city}</option>
                                </>
                              )
                            })
                          }
                        </select>
                        <i className="fas fa-chevron-down position-absolute d-none d-lg-block text-muted" style={{ left: '87%' }} />
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
                <Row>
                  {
                    listCinema === null
                      ? 'Loading'
                      : listCinema.map((items, index) => {
                        return (
                          <Col lg={4} key={index.toString()}>
                            <label>
                              <input type="radio" className="selected-movie" id={items.id} name="selectCinema" value="small" />
                              <img src={items.logo} className="logo-cinema_admin my-4" alt="logo cinema" />
                            </label>
                          </Col>
                        )
                      })
                  }
                </Row>
              </Card.Body>
            </Card>
          </Row>
          <Row className="mt-3">
            <p className="fs-5 fw-bold">Showtimes</p>
          </Row>
          <Row>
            <Card>
              <Card.Body>
                <Row>
                  <Col lg={10}>
                    <Form>
                      <Form.Group className="position-relative d-flex align-items-center">
                        <i className="far fa-calendar-minus icon-calendar position-absolute mx-3 text-muted" />
                        <Form.Control id="showDate" type="date" className="border-0 ps-5" name="dateShow" style={{ backgroundColor: '#f0f0f0' }} onChange={(event) => handleSchedule(event)} />
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
                <Row>
                  {
                    listTimes === null
                      ? 'Loading'
                      : listTimes.map((time, index) => {
                        return (
                          <Col lg={4} className="my-2" key={index.toString()}>
                            <div className="d-flex align-items-center mt-3 position-relative" key={index}>
                              <input type="checkbox" className="checkbox-time position-absolute" name="timeShow" id={time.id} onChange={(event) => handleSchedule(event)} />
                              <label className="checkbox-time_label">{time.name}</label>
                            </div>
                          </Col>
                        )
                      })
                  }

                </Row>
              </Card.Body>
            </Card>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default BodyAdmin
