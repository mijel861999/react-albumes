import types from '../types/type'
import { app, analytics } from '../firebase/firebase'

export const StartLogin = () => {
  return (dispatch) => {
    console.log('Login')
    console.log(app)
  }
}
