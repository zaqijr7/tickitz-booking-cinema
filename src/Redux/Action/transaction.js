export const addMovieToCart = (data) => {
    return async dispatch => {
        dispatch({
            type: 'CHOOSE_MOVIE',
            payload: data
        })

    }
}

export const selectedTime = (data) => {
    return async dispatch => {
        dispatch({
            type: 'CHOOSE_SHOWTIME',
            payload: data
        })

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