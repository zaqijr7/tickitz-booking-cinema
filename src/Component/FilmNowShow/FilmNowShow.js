import React from 'react';
import './FilmNowShow.css';
import {Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function FilmNowShow(props) {
    return (
        <Row>
            <Link to="/moviedetail">
            <Col className="cover-carousel mx-3 d-flex justify-content-center align-items-center">
                <div className={props.className} />
            </Col>
            </Link>
        </Row>
    )
}
export default FilmNowShow;