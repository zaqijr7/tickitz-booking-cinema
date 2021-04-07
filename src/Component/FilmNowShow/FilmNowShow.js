import React from 'react';
import './FilmNowShow.css';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMovieToCart } from '../../Redux/Action/transaction';




function FilmNowShow(props) {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(addMovieToCart(props.id))
  }
  return (
    <Row>
      <Link to={`/moviedetail/${props.id}`} onClick={handleClick}>
        <Col className=" mx-3 d-flex justify-content-center align-items-center">
          <Card className="cover-carousel">
            <Card.Body className=" d-flex justify-content-center align-items-center">
              <img className="carousel" src={props.poster} alt="poster-film" />
            </Card.Body>
          </Card>
        </Col>
      </Link>
    </Row>
  )
}
export default FilmNowShow;
