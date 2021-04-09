/* eslint-disable no-use-before-define */
import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './Subscription.css';

function Subcription () {
  return (
    <div className="py-5" id="moviegoer">
      <Container fluid className="d-flex justify-content-center align-items-center">
        <Card style={{ width: '90%' }} className="card py-5 rounded shadow border-0 main-row-4">
          <Card.Body>
            <div className="d-flex justify-content-center align-items-center flex-column text-center">
              <p className="sub-title-main-row-4">Be the vanguard of the</p>
              <p className="fw-bold title-main-row-4 font-color-costums">Moviegoers</p>
              <form action className="row g-2 mt-3 mb-4 d-sm-flex justify-content-md-center">
                <div className="col-auto">
                  <input type="email" placeholder="Type your email" className="form-control rounded input-email-join-now input-hover" id="email" name="email" />
                </div>
                <div className="col-auto">
                  <button type="submit" className="btn rounded btn-join-now text-white">Join now</button>
                </div>
              </form>
              <small className="text-muted">
                By joining you as a Tickitz member,<br />
                we will always send you the latest updates via email .
              </small>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>

  )
}

export default Subcription;
