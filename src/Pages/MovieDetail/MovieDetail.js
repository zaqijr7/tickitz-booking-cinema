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

function MovieDetail() {
    const [schedule, setSchedule] = useState([])
    const [status, setStatus] = useState('')
    const date = useSelector(state => state.schedule.showDate)
    const city = useSelector(state => state.schedule.city)
    const moviePrice = useSelector(state => state.selectedMovie.detailMovie.price)
    const dispatch = useDispatch()
    const fetchDataSchedule = async (date, city) => {
        try{
            const params = new URLSearchParams()
            params.append('showDate', date)
            params.append('city', city)
            const response = await http().post(`schedule`, params)
            setSchedule(response.data.results)
            setStatus(response.status)
        }catch(err){
            setSchedule([])
            setStatus(404)
            dispatch(errorMsg(schedule.message))
        }
    }
    console.log(status);
    useEffect(() => {
        fetchDataSchedule(date, city)
        
    }, [date, city])
    return (
        <React.Fragment>
            <NavigationBar>
                <Container>
                    <MovieInfo/>
                    <ButtonTimeTicket/>
                        <Row className="my-4 d-flex">
                        {
                            status === 200 ? 
                            schedule.map(item => {
                                return (
                                    <CinemaCard 
                                    key={item.id_cinema}
                                    id={item.id_cinema}
                                    cinema={item.name}
                                    address={item.address}
                                    logo={item.logo}
                                    listShowTime={item.listShowTime}
                                    price={moviePrice}/>
                                )
                            })
                            :

                            <h1 className="text-center"> Opss sorry, schedule not found</h1>

                        }
                        </Row>
                    <Footer/>
                </Container> 
            </NavigationBar>
        </React.Fragment>
    )
}

export default MovieDetail;