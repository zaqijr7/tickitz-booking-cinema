import http from '../../Helper/http'

export const addMovieToCart = (data) => {
  return async dispatch => {
    const dataSchedule = await http().get(`schedule?idMovie=${data}`)
    dispatch({
      type: 'DATA_DATE_SCHEDULE',
      payload: dataSchedule.data.results.dateShow
    })
    dispatch({
      type: 'DATA_CITY_SCHEDULE',
      payload: dataSchedule.data.results.city
    })
    dispatch({
      type: 'CHOOSE_MOVIE',
      payload: data
    })
  }
}

export const selectedTime = (data) => {
  return async dispatch => {
    try {
      const dataTime = await http().get(`showtime/${data}`)
      dispatch({
        type: 'SHOWTIME_NAME',
        payload: dataTime.data.results.name
      })
      dispatch({
        type: 'CHOOSE_SHOWTIME',
        payload: data
      })
    } catch (err) {
      dispatch({
        type: 'SHOWTIME_NAME',
        payload: ''
      })
    }
  }
}

export const selectedCinema = (data) => {
  return async dispatch => {
    dispatch({
      type: 'CHOOSE_CINEMA',
      payload: data
    })
  }
}

export const selectedSeat = (data) => {
  return async dispatch => {
    dispatch({
      type: 'CHOOSE_SEAT',
      payload: data
    })
  }
}

export const selectedCinemaName = (data) => {
  return async dispatch => {
    dispatch({
      type: 'CINEMA_NAME',
      payload: data
    })
  }
}

export const selectedShowTimeName = (data) => {
  return async dispatch => {
    dispatch({
      type: 'SHOWTIME_NAME',
      payload: data
    })
  }
}

export const totalPayment = (data) => {
  return async dispatch => {
    dispatch({
      type: 'TOTAL_PAYMENT',
      payload: data
    })
  }
}
