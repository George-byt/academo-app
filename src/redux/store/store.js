import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { authenticationReducer } from '../reducers/authReducer';
import thunk from 'redux-thunk';
import { albumsReducers } from '../reducers/albumsReducer';

const reducers = combineReducers (
  {
    authReducer: authenticationReducer,
    albumsReducer: albumsReducers
  }
)

export const store = createStore(
  reducers
)
