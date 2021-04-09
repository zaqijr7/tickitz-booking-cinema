/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react'
import Footer from '../../Component/Footer/Footer';
import './ViewAll.css'
import ListMovie from '../../Component/ListMovie/ListMovie';
import http from '../../Helper/http';

import { useHistory } from 'react-router';

function ViewAll () {
  const [sort, setSort] = useState('ASC')
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [pageInfo, setPageInfo] = useState(1)
  const [sortBy, setSortBy] = useState('title')
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [messageRes, setMessageRes] = useState(null)
  const history = useHistory()

  const handleBtnSort = (value) => {
    if (value === 'ASC') {
      setSort('DESC')
    } else if (value === 'DESC') {
      setSort('ASC')
    }
  }

  const getDataMovie = async () => {
    setIsLoading(true)
    try {
      const response = await http().get(`nowshow?search=${search}&page=${page}&limit=6&sort=${sortBy}&order=${sort}`)
      const resultsMovie = response.data.results
      if (resultsMovie.length === 0) {
        setMessageRes('Movie not found')
      }
      setResults(resultsMovie)
      setPageInfo(response.data.pageInfo)
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getDataMovie()
    console.log(results, '<<<< ini list film');
  }, [search, sort, page, sortBy])
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-center">Find Movie</h2>
        </div>
      </div>
      <div className="row mt-3 p-costum">
        <div className="col-md-8 col-sm-12 mt-3 mt-md-0 rounded-3">
          <div className="input-group height-costum">
            <i className="input-group-text fas fa-search background-color-primary text-white px-3"></i>
            <input type="text" aria-label="First name" className="form-control" placeholder="Search Movie..." onChange={(e) => setSearch(e.target.value)}/>
          </div>
        </div>
        <div className="col-md-3 col-sm-12 mt-3 mt-md-0">
          <select className="form-select height-costum rounded-3" aria-label="Default select example" onChange={(e) => setSortBy(e.target.value)}>
            <option selected>Sort By</option>
            <option value="title">Title</option>
            <option value="price">Price</option>
          </select>
        </div>
        <div className="col-md-1 col-sm-12 mt-3 mt-md-0 d-grid">
          {sort === 'DESC'
            ? <div className="btn border border-1 btn-sort d-flex justify-content-center align-items-center rounded-3" onClick={() => handleBtnSort('DESC')}>
              <i className="fal fa-sort-amount-up fs-2"></i>
            </div>
            : <div className="btn border border-1 btn-sort d-flex justify-content-center align-items-center rounded-3" onClick={() => handleBtnSort('ASC')}>
              <i className="fal fa-sort-amount-down fs-2"></i>
            </div>
          }
        </div>
      </div>
      <div className="row">
        {isLoading === true
          ? <div className="d-flex justify-content-center align-items-center mt-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
          : <>
            {results.length === 0
              ? <div className="text-center fs-4 mt-5">{messageRes}</div>
              : results.map((item, index) => {
                return (
                  <div className="col-12 col-md-4 mt-5 d-flex justify-content-center">
                    <ListMovie key={index} id_movie={item.id} poster={item.poster} title={item.title} price={item.price} genre={item.genre}/>
                  </div>
                )
              })
             }
          </>
        }
      </div>
      <div className="d-flex justify-content-center mt-5">
        {
          [...Array(pageInfo.totalPage)].map((item, index) => {
            return <div className={`btn btn-paging justify-content-center d-flex align-items-center fw-bold mx-2 ${index + 1 === pageInfo.currentPage ? 'btn-paging-active text-white' : ''}`} onClick={(e) => setPage(index + 1)}>{index + 1}</div>
          })
        }
      </div>
        <Footer />
    </div>
  )
}

export default ViewAll
