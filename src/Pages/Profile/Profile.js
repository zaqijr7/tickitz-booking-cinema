import React, { Component } from 'react';
import './Profile.css'
import BodyProfile from '../../Component/BodyProfile/BodyProfile';
import { Container } from 'react-bootstrap';
import Footer from '../../Component/Footer/Footer';

export default class Profile extends Component {
    render() {
        return (
            <>
            <div className="body py-5">
                <BodyProfile/>
            </div>
            <Container>
                <Footer/>
            </Container>
            </>
        )
    }
}
