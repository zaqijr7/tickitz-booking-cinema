import React from 'react';
import { Container } from 'react-bootstrap';
import './MovieDetail.css'
import MovieInfo from '../../Component/MovieInfo/MovieInfo';
import ButtonTimeTicket from '../../Component/ButtonTimeTicket/ButtonTimeTicket';
import CinemaCard from '../../Component/CinemaCard/CInemaCard';
import Footer from '../../Component/Footer/Footer';
import NavigationBar from '../../Component/Navbar/Navbar';

function MovieDetail() {
    return (
        <React.Fragment>
            <NavigationBar>
                <Container>
                    <MovieInfo/>
                    <ButtonTimeTicket/>
                    <CinemaCard/>
                    <CinemaCard/>
                    <CinemaCard/>
                    <Footer/>
                </Container> 
            </NavigationBar>
        </React.Fragment>
    )
}

export default MovieDetail;