export const addMovieToCart = (data) => {
    return async dispatch => {
        dispatch({
            type: 'CHOOSE_MOVIE',
            payload: data
        })

    }
}