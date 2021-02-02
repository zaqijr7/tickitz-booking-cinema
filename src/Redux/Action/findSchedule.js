export const inputDate = (data) => {
    return async dispatch => {
        dispatch({
            type: 'INPUT_DATE',
            payload: data
        })

    }
}

export const inputCity = (data) => {
    return async dispatch => {
        dispatch({
            type: 'INPUT_CITY',
            payload: data
        })

    }
}