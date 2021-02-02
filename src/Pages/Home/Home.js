import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import http from '../../Helper/http';
import FilmNowShow from '../../Component/FilmNowShow/FilmNowShow';
import Footer from '../../Component/Footer/Footer';
import RowTitle from '../../Component/HomeComponent/RowTitle';
import NowShow from '../../Component/NowShow/NowShow';
import Subcription from '../../Component/Subcription/Subcription';
import UpcomingMovie from '../../Component/UpcomingMovie/UpcomingMovie';


function Home(){
    const [nowshow, setNowshow] = useState([])
    const fetchDataNowshow = async () => {
        const movieNowshow = await http().get(`nowshow`)
        setNowshow(movieNowshow.data.results)
    }
    useEffect(() => {
        fetchDataNowshow()
    },[])
    return (
        <React.Fragment>
            <Container>
                <RowTitle/>
                <NowShow>
                    {
                    nowshow.map((value) => {
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