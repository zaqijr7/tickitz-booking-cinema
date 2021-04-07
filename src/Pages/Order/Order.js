import React, { Component } from 'react';
import './Order.css'
import { Container } from 'react-bootstrap';
import BodyOrder from '../../Component/BodyOrder/BodyOrder'
import Footer from '../../Component/Footer/Footer';
import NavigationBar from '../../Component/Navbar/Navbar';

class Order extends Component {

  render() {
    return (
      <>
        <NavigationBar>
          <div className="bg-light py-4">
            <Container>
              <BodyOrder />
            </Container>
          </div>
          <Container>
            <Footer />
          </Container>
        </NavigationBar>
      </>
    )
  }

}

export default Order;
