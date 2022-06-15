import { combineReducers } from 'redux'
import authReducer from './authReducer'
import albumesReducer from './albumesReducer'

const rootReducer = combineReducers({
  // TODO: Add reducers here
  auth: authReducer,
  albumes: albumesReducer
})

export default rootReducer