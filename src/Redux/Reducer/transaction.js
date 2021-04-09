const stateTransaction = {
  type: 'TRANSACTION',
  id_movie: '',
  id_cinema: '',
  id_showtime: '',
  id_seat: [],
  cinemaName: '',
  showtimeName: '',
  totalPayment: 0
}

const transactionReducer = (state = stateTransaction, action) => {
  switch (action.type) {
    case 'CHOOSE_MOVIE':
      return {
        ...state,
        id_movie: action.payload
      }
    case 'CHOOSE_CINEMA':
      return {
        ...state,
        id_cinema: action.payload
      }
    case 'CHOOSE_SHOWTIME':
      return {
        ...state,
        id_showtime: action.payload
      }
    case 'CHOOSE_SEAT':
      return {
        ...state,
        id_seat: action.payload
      }
    case 'CINEMA_NAME':
      return {
        ...state,
        cinemaName: action.payload
      }
    case 'SHOWTIME_NAME':
      return {
        ...state,
        showtimeName: action.payload
      }
    case 'TOTAL_PAYMENT':
      return {
        ...state,
        totalPayment: action.payload
      }
    default:
      return {
        ...state
      }
  }
}

export default transactionReducer
