import React from 'react';
import './FilmNowShow.css';
import {Row, Col, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function FilmNowShow(props) {
        return (
        <Row>
            <Link to={`/moviedetail/${props.id}`}>
                <Col className=" mx-3 d-flex justify-content-center align-items-center">
                    <Card className="cover-carousel">
                        <Card.Body className=" d-flex justify-content-center align-items-center">
                            <img className="carousel" src={props.poster} alt="poster-film"/>
                        </Card.Body>
                    </Card>
                </Col>
            </Link>
        </Row>
    )
}
export default FilmNowShow;