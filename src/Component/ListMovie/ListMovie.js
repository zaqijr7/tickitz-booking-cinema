/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import './ListMovie.css'
import { addMovieToCart } from '../../Redux/Action/transaction';
import { useDispatch } from 'react-redux';

function ListMovie (props) {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(addMovieToCart(props.id_movie))
  }
  return (
      <div className="card shadow-none cover-movie">
        <div className="card-body d-flex flex-column align-items-center">
          <img src={props.poster} alt="movie" className="thumb-movie"/>
          <span className="mt-2 text-center">{props.title}</span>
          <span className="mt-2 text-muted text-center">{props.genre}</span>
          <span className="mt-2 fw-bold text-center">Rp. {props.price}</span>
          <Link to={`/moviedetail/${props.id_movie}`} onClick={handleClick} className="mt-3 btn btn-detail text-white fw-bold">Detail</Link>
        </div>
      </div>
  )
}

export default ListMovie
