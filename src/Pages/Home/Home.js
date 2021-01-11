import React from 'react';
import { Container } from 'react-bootstrap';
import FilmNowShow from '../../Component/FilmNowShow/FilmNowShow';
import Footer from '../../Component/Footer/Footer';
import RowTitle from '../../Component/HomeComponent/RowTitle';
import NowShow from '../../Component/NowShow/NowShow';
import Subcription from '../../Component/Subcription/Subcription';
import UpcomingMovie from '../../Component/UpcomingMovie/UpcomingMovie';


function Home(){
    return (
        <React.Fragment>
            <Container>
                <RowTitle/>
                <NowShow>
                    <FilmNowShow className="carousel-1"/>
                    <FilmNowShow className="carousel-2"/>
                    <FilmNowShow className="carousel-3"/>
                    <FilmNowShow className="carousel-1"/>
                    <FilmNowShow className="carousel-2"/>
                    <FilmNowShow className="carousel-3"/>
                </NowShow>
                <UpcomingMovie/>
                <Subcription/>
                <Footer />
            </Container>
        </React.Fragment>
    )
}

export default Home;