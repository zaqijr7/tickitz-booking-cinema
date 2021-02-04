import React from 'react';
import { Container } from 'react-bootstrap';
import BodyPayment from '../../Component/BodyPayment/BodyPayment';
import ButtonPayment from '../../Component/ButtonPayment/ButtonPayment';
import Footer from '../../Component/Footer/Footer';
import NavigationBar from '../../Component/Navbar/Navbar';
import './Payment.css';

function Payment() {
    return (
        <>
        <NavigationBar>
            <div className="body">
                <Container>
                    <BodyPayment> 
                        <ButtonPayment/>
                    </BodyPayment>
                </Container>
            </div>
                <Container>
                    <Footer/>
                </Container>
        </NavigationBar>
        </>
    )
}
export default Payment;