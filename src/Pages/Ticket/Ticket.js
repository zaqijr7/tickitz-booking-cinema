import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../Component/Footer/Footer';
import TicketCard from '../../Component/TicketCard/TicketCard';
import './Ticket.css';

export default class Ticket extends Component {
    render() {
        return (
            <>
            <div className="bg-theme">
                <TicketCard/>
            </div>
            <Container>
                 <Footer/>
            </Container>
            </>
        )
    }
}
