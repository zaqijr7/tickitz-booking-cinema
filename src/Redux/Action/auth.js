import http from '../../Helper/http'


export const login = (email, password) => {
   return async dispatch => {
      const params = new URLSearchParams()
      params.append('email', email)
      params.append('password', password)
      try {
         const results = await http().post(`auth/login`, params)
         dispatch({
            type: 'LOGIN',
            payload: results.data.results.token
         })
      } catch (err) {
         const { message } = err.response.data
         dispatch({
            type: 'SET_LOGIN_MESSAGE',
            payload: message
         })
      }
   }
}

export const resetMsg = () => {
   return dispatch => {
      dispatch({
         type: 'SET_LOGIN_MESSAGE',
         payload: ''
      })
   }
}