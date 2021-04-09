/* eslint-disable no-use-before-define */
import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import BodyOrderHistory from '../../Component/BodyOrderHistory/BodyOrderHistory'
import Footer from '../../Component/Footer/Footer'
import NavigationBar from '../../Component/Navbar/Navbar'

export default class OrderHistory extends Component {
  render () {
    return (
      <>
        <NavigationBar>
          <div className="body py-5">
            <BodyOrderHistory />
          </div>
          <Container>
            <Footer />
          </Container>
        </NavigationBar>
      </>
    )
  }
}
