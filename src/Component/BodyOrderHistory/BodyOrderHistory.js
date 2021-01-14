import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import InfoOrderHistory from '../InfoOrderHistory/InfoOrderHistory'
import SideProfileInfo from '../SideProfileInfo/SideProfileInfo'

export default class BodyOrderHistory extends Component {
    render() {
        return (
            <>
            <Container>
                <Row>
                    <SideProfileInfo />
                    <InfoOrderHistory />
                </Row>
            </Container>
            </>
        )
    }
}
