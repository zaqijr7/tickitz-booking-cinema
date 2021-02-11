const stateSelectedMovie = {
    type: "SELECTED_MOVIE",
    detailMovie: [],
    dateSchedule: [],
    dataCitySchedule: []

}

const selectedMovieReducer = (state = stateSelectedMovie, action) => {
    switch (action.type) {
        case 'SELECTED_MOVIE':
            return {
                ...state,
                detailMovie: action.payload
            }
        case 'DATA_DATE_SCHEDULE':
            return {
                ...state,
                dateSchedule: action.payload
            }
        case 'DATA_CITY_SCHEDULE':
            return {
                ...state,
                dataCitySchedule: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default selectedMovieReducer