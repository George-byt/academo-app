import { Navigate } from 'react-router-dom';

export const PublicRouters = ({ isAuth, children }) => {
  return !isAuth
    ? children
    : <Navigate to='/*' />
}
