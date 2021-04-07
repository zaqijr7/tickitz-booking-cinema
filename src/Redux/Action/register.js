import axios from 'axios'
const { REACT_APP_API_URL: API_URL } = process.env

export const register = (email, password) => {
   return async dispatch => {
      const params = new URLSearchParams()
      params.append('email', email)
      params.append('password', password)
      try {
         const results = await axios.post(`${API_URL}auth/register`, params)
         dispatch({
            type: 'REGISTER',
            payload: results.data.result.email
         })
         dispatch({
          type: 'SET_REGISTER_MESSAGE',
          payload: results.data.message
       })
      } catch (err) {
         const { message } = err.response.data
         dispatch({
            type: 'SET_REGISTER_MESSAGE',
            payload: message
         })
      }
   }
}

export const cleanMsg = () => {
  return async dispatch => {
    dispatch({
      type: 'SET_REGISTER_MESSAGE',
      payload: ''
   })
   dispatch({
    type: 'SET_LOGIN_MESSAGE',
    payload: ''
 })
  }
}

export const resetMsg = () => {
   return dispatch => {
      dispatch({
         type: 'SET_REGISTER_MESSAGE',
         payload: ''
      })
   }
}
