import { SET_IMAGES, START_ADD_IMAGE, IMAGE_ADDED } from './actionTypes'

export const startAddImage = () => {
  return {
    type: START_ADD_IMAGE
  }
}

export const addImage = (imageDescription, image) => {
  return {
    type: START_ADD_IMAGE
  }
}

export const imageAdded = () => {
  return {
    type: IMAGE_ADDED
  }
}

export const getImages = () => {
  console.log('TODO: getImages')
}

export const setImages = images => {
  return {
    type: SET_IMAGES,
    images: images
  }
}
