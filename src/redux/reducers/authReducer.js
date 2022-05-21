import { authTypes } from '../types/types';

export const authenticationReducer = (state = {}, action) => {
  switch (action.type) {
    case authTypes.LOGIN:
      return {
        user: action.payload.user,
        password: action.payload.password
      }
    case authTypes.REGISTER:
      return {
        email: action.payload.email,
        pass: action.payload.pass,
        name: action.payload.name,
      }
    case authTypes.LOGOUT:
      return {
      }
    default:
      return state
  }
}


