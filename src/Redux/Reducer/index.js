import {combineReducers} from 'redux'
import authReducer from './auth'
import registerReducer from './register'

const reducer = combineReducers({
   auth: authReducer,
   register: registerReducer
})

export default reducer