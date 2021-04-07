import {combineReducers} from 'redux'
import authReducer from './auth'
import scheduleReducer from './findSchedule'
import selectedMovieReducer from './movieSelected'
import registerReducer from './register'
import transactionReducer from './transaction'
import { persistReducer } from 'redux-persist'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import storage from 'redux-persist/lib/storage'

const authConfig = {
  key: 'auth',
  storage,
  stateReconciler: hardSet
}

const reducer = combineReducers({
   auth: persistReducer(authConfig, authReducer),
   register: registerReducer,
   transaction: transactionReducer,
   schedule: scheduleReducer,
   selectedMovie: selectedMovieReducer
})

export default reducer
