import {combineReducers} from 'redux'
import authReducer from './auth'
import scheduleReducer from './findSchedule'
import selectedMovieReducer from './movieSelected'
import registerReducer from './register'
import transactionReducer from './transaction'

const reducer = combineReducers({
   auth: authReducer,
   register: registerReducer,
   transaction: transactionReducer,
   schedule: scheduleReducer,
   selectedMovie: selectedMovieReducer
})

export default reducer