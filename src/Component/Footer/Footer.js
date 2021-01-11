import React from 'react';
import { Col, Row } from 'react-bootstrap';
import LogoFooter from '../../Assets/Images/logo-navbar.png';
import EbuLogo from '../../Assets/Images/ebu.id.png';
import CineOneLogo from '../../Assets/Images/cineone.png';
import HiflixLogo from '../../Assets/Images/hiflix.png';
import FbIcon from '../../Assets/Images/fbicon.png';
import IgIcon from '../../Assets/Images/igicon.png';
import TwitIcon from '../../Assets/Images/twiticon.png';
import YtIcon from '../../Assets/Images/yticon.png';

function Footer() {
    return (
      <React.Fragment>
        <div className="footer-1 py-3 px-lg-5">
          <Col className="px-5">
            <Row>
              <Col lg={4} className="p-lg-4 mt-5">
                <img src={LogoFooter} alt srcSet />
                <p className="text-left text-muted mt-3">Stop waiting in line. Buy tickets <br />
                  conveniently, watch movies quietly.
                </p>
              </Col>
              <Col lg={2} className="p-lg-4 mt-5">
                <h5 className="fw-bolder">Explore</h5>
                <ul className="list-unstyled text-muted lh-lg">
                  <li>Cinemas</li>
                  <li>Movies List</li>
                  <li>My Ticket</li>
                  <li>Notification</li>
                </ul>
              </Col>
              <Col lg={3} className="p-lg-4 mt-5">
                <h5 className="fw-bolder">Our Sponsor</h5>
                <ul className="list-unstyled text-muted">
                  <li className="my-3"><img src={EbuLogo} alt srcSet /></li>
                  <li className="my-3"><img src={CineOneLogo} alt srcSet /></li>
                  <li className="my-3"><img src={HiflixLogo} alt srcSet /></li>
                </ul>
              </Col>
              <Col lg={3} className="p-lg-4 mt-5">
                <h5 className="fw-bolder">Follow us</h5>
                <div className="list my-3">
                  <div className="d-flex">
                    <ul className="list-unstyled">
                      <li className="d-flex align-items-center">
                        <p>
                          <img src={FbIcon} className="me-2" alt srcSet /> 
                          Tickitz Cinema id
                        </p>
                      </li>
                      <li>
                        <p>
                          <img src={IgIcon} className="me-2" alt srcSet /> 
                          tickitz.id
                        </p>
                      </li>
                      <li>
                        <p>
                          <img src={TwitIcon} className="me-2" alt srcSet /> 
                          tickitz.id
                        </p>
                      </li>
                      <li>
                        <p>
                          <img src={YtIcon} className="me-2" alt srcSet /> 
                          Tickitz Cinema id
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </div>
        <div className="footer-2 py-3">
          <p className="text-center text-muted">© 2020 Tickitz. All Rights Reserved.</p>
        </div>
      </React.Fragment>
  )
}
export default Footer;