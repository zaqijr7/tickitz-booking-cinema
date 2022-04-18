/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './MovieDetail.css'
import MovieInfo from '../../Component/MovieInfo/MovieInfo';
import ButtonTimeTicket from '../../Component/ButtonTimeTicket/ButtonTimeTicket';
import CinemaCard from '../../Component/CinemaCard/CInemaCard';
import Footer from '../../Component/Footer/Footer';
import NavigationBar from '../../Component/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import http from '../../Helper/http';
import { errorMsg } from '../../Redux/Action/findSchedule';
import { useParams } from 'react-router-dom';

function MovieDetail () {
  const [schedule, setSchedule] = useState([])
  const [status, setStatus] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const date = useSelector(state => state.schedule.showDate)
  const city = useSelector(state => state.schedule.city)
  const moviePrice = useSelector(state => state.selectedMovie.detailMovie.price)
  const { id } = useParams();
  const messageError = useSelector(state => state.schedule.message)
  const dispatch = useDispatch()

  const fetchDataSchedule = async (id, date, city) => {
    setIsLoading(true)
    try {
      console.log(id, 'INI ID MOVIE');
      const params = new URLSearchParams()
      params.append('movie', id)
      params.append('city', city)
      params.append('showDate', date)
      const response = await http().post('schedule', params)
      setSchedule(response.data.results)
      setStatus(response.status)
      setIsLoading(false)
    } catch (err) {
      setSchedule([])
      setStatus(err.response.status)
      dispatch(errorMsg(err.response.data.message))
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchDataSchedule(id, date, city)
  }, [date, city])
  return (
    <React.Fragment>
      <NavigationBar>
        <Container>
          <MovieInfo />
          <ButtonTimeTicket />
          <Row className="my-4 d-flex">
            {isLoading === true
              ? <div className="d-flex justify-content-center align-items-center mt-3">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
              : <>
                {status === 404 && !schedule.length
                  ? <h1 className="text-center"> {messageError} </h1>
                  : schedule.map(item => {
                    return (
                      <CinemaCard
                        key={item.id_cinema}
                        idCinema={item.id_cinema}
                        cinema={item.name}
                        address={item.address}
                        logo={item.logo}
                        listShowTime={item.listShowTime}
                        price={moviePrice}
                      />
                    )
                  })
                }
              </>
            }
          </Row>
          <Footer />
        </Container>
      </NavigationBar>
    </React.Fragment>
  )
}

export default MovieDetail;
