import { createStore, combineReducers } from 'redux'

import imagesReducer from './reducers/images'

const rootReducer = combineReducers({
  images: imagesReducer
})

const configureStore = () => {
  return createStore(rootReducer)
}
