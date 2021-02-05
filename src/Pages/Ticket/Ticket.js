import React, { Component, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Footer from '../../Component/Footer/Footer';
import NavigationBar from '../../Component/Navbar/Navbar';
import TicketCard from '../../Component/TicketCard/TicketCard';
import jwt from 'jsonwebtoken'
import './Ticket.css';
import http from '../../Helper/http';

function Ticket() {
    const [statusres, setStatusres] = useState('')
    const idshowtime = useSelector(state => state.transaction.id_showtime)
    const dateShow = useSelector(state => state.schedule.showDate)
    const idcinema = useSelector(state => state.transaction.id_cinema)
    const dataTicket = useSelector(state => state.transaction.id_seat)
    const listSeat = dataTicket.join()
    const idMovie = useSelector(state => state.selectedMovie.detailMovie.id)
    const tokenUser = useSelector(state => state.auth.token)
    const dataUser = jwt.decode(tokenUser)
    const idUser = dataUser.id

    const handleClick = async (tokenUser, idUser, idMovie, idCinema, idShowTIme, date, seat) => {
        const params = new URLSearchParams()
        params.append('id_user', idUser)
        params.append('id_movie', idMovie)
        params.append('id_cinema', idCinema)
        params.append('id_showtime', idShowTIme)
        params.append('showDate', date)
        params.append('seat', seat)
        try {
           const results = await http(tokenUser).post(`transaction`, params)
           console.log(results);
        } catch (err) {
            setStatusres(500)
        }
    } 

    useEffect(() => {
        handleClick(tokenUser, idUser, idMovie, idcinema, idshowtime, dateShow, listSeat)
    }, [])
    return (
        <>
            <NavigationBar>
                <div className="bg-theme">
                    <TicketCard />
                </div>
                <Container>
                    <Footer />
                </Container>
            </NavigationBar>
        </>
    )
}

export default Ticket