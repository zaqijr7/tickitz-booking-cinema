import http from '../../Helper/http'
import jwt from 'jsonwebtoken'

export const login = (email, password) => {
  return async dispatch => {
    const params = new URLSearchParams()
    params.append('email', email)
    params.append('password', password)
    try {
      const results = await http().post('auth/login', params)
      dispatch({
        type: 'LOGIN',
        payload: results.data.results.token
      })
      const { id } = jwt.decode(results.data.results.token)
      const profile = await http(results.data.results.token).get(`profile?id=${id}`)
      dispatch({
        type: 'SET_PROFILE',
        payload: profile.data.results
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

export const updateProfileUser = (data) => {
  return dispatch => {
    dispatch({
      type: 'SET_PROFILE',
      payload: data
    })
  }
}

export const updatePhoto = (token, id) => {
  return async dispatch => {
    const profile = await http(token).get(`profile?id=${id}`)
    dispatch({
      type: 'SET_PROFILE',
      payload: profile.data.results
    })
  }
}
