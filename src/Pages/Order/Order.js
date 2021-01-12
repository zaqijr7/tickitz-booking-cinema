import React, { Component } from 'react';
import './Order.css'
import { Container } from 'react-bootstrap';
import BodyOrder from '../../Component/BodyOrder/BodyOrder'
import Footer from '../../Component/Footer/Footer';

class Order extends Component{

    render() {
        return (
            <>
                <div className="bg-light py-4">
                    <Container>
                        <BodyOrder/>
                    </Container>
                </div>
                <Container>
                    <Footer/>
                </Container>
            </>
        )
    }

}

export default Order;