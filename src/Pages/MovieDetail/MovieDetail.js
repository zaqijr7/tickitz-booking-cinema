import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './MovieDetail.css'
import MovieInfo from '../../Component/MovieInfo/MovieInfo';
import ButtonTimeTicket from '../../Component/ButtonTimeTicket/ButtonTimeTicket';
import CinemaCard from '../../Component/CinemaCard/CInemaCard';
import Footer from '../../Component/Footer/Footer';

function MovieDetail() {
    return (
        <React.Fragment>
            <Container>
                <MovieInfo/>
                <ButtonTimeTicket/>
                <CinemaCard/>
                <CinemaCard/>
                <CinemaCard/>
                <Footer/>
            </Container> 
        </React.Fragment>
    )
}

export default MovieDetail;