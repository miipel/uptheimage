import { SET_IMAGES, START_ADD_IMAGE, IMAGE_ADDED } from '../actions/actionTypes'

const initialState = {
  images: [],
  placeAdded: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_IMAGES:
      return {
        ...state,
        images: action.images
      }
    case START_ADD_IMAGE:
      return {
        ...state,
        placeAdded: false
      }
    case IMAGE_ADDED:
      return {
        ...state,
        placeAdded: true
      }
    default:
      return state
  }
}

export default reducer
