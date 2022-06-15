import types from '../types/type'

const initialState = {
  user: ''
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.authLogin:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}

export default authReducer