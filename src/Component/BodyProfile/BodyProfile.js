import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import SideProfileInfo from '../SideProfileInfo/SideProfileInfo';
import FormAccountSet from '../FormAccountSet/FormAccountSet';

export default class BodyProfile extends Component {
  render() {
    return (
      <Container>
        <Row>
          <SideProfileInfo />
          <FormAccountSet />
        </Row>
      </Container>
    )
  }
}
