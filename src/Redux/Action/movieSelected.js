export const selectedMovie = (data) => {
  return async dispatch => {
    dispatch({
      type: 'SELECTED_MOVIE',
      payload: data
    })
  }
}
