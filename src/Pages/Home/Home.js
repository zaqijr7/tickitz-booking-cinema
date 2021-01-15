import React from 'react';
import { Container } from 'react-bootstrap';
import FilmNowShow from '../../Component/FilmNowShow/FilmNowShow';
import Footer from '../../Component/Footer/Footer';
import RowTitle from '../../Component/HomeComponent/RowTitle';
import NowShow from '../../Component/NowShow/NowShow';
import Subcription from '../../Component/Subcription/Subcription';
import UpcomingMovie from '../../Component/UpcomingMovie/UpcomingMovie';
import dataMovie from '../../DataDummy/DataMovieNowShow';


function Home(){
    return (
        <React.Fragment>
            <Container>
                <RowTitle/>
                <NowShow>
                    {
                    dataMovie.map((value) => {
                        return (
                            <FilmNowShow id={value.id} poster={value.poster}/>
                        )
                    })
                    }
                </NowShow>
                <UpcomingMovie/>
                <Subcription/>
                <Footer />
            </Container>
        </React.Fragment>
    )
}

export default Home;