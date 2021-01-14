import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import BodyAdmin from '../../Component/BodyAdmin/BodyAdmin';

import './Admin.css';

export default class Admin extends Component {
    render() {
        return (
            <>
            <Container>
                <BodyAdmin/>
            </Container>
            </>
        )
    }
}
