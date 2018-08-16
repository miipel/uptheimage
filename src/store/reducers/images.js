import {
  SET_IMAGES,
  START_ADD_IMAGE,
  IMAGE_ADDED
} from '../actions/actionTypes'

const initialState = {
  images: [],
  imageAdded: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGES:
      return {
        ...state,
        images: action.images
      }
    case START_ADD_IMAGE:
      return {
        ...state,
        imageAdded: false
      }
    case IMAGE_ADDED:
      return {
        ...state,
        imageAdded: true
      }
    default:
      return state
  }
}

export default reducer
