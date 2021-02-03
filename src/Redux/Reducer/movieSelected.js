const stateSelectedMovie = {
    type: "SELECTED_MOVIE",
    detailMovie: []
}

const selectedMovieReducer = (state = stateSelectedMovie, action) => {
    switch (action.type) {
        case 'SELECTED_MOVIE':
            return {
                ...state,
                detailMovie: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default selectedMovieReducer