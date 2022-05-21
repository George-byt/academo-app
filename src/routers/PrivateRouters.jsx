import { Navigate } from 'react-router-dom';

export const PrivateRouters = ({ isAuth, children }) => {
  return isAuth
    ? children
    : <Navigate to='/login' />
}
