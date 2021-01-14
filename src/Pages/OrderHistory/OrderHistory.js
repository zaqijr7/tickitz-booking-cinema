import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import BodyOrderHistory from '../../Component/BodyOrderHistory/BodyOrderHistory'
import Footer from '../../Component/Footer/Footer'

export default class OrderHistory extends Component {
    render() {
        return (
            <>
            <div className="body py-5">
                <BodyOrderHistory/>
            </div>
            <Container>
                <Footer/>
            </Container>
            </>
        )
    }
}
