import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { authenticationReducer } from '../reducers/authReducer';
import thunk from 'redux-thunk';
import { albumsReducers } from '../reducers/albumsReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers (
  {
    authReducer: authenticationReducer,
    albumsReducer: albumsReducers
  }
)

export const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)
