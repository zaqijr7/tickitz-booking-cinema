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

export const errorMsg = (data) => {
  return async dispatch => {
    dispatch({
      type: 'SET_MSG_SCHEDULE',
      payload: data
    })
  }
}
