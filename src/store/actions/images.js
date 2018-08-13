import SET_IMAGES from './actionTypes'

export const addImage = (imageName, image) => {
  console.log(imageName)
}

export const setImages = images => {
  return {
    type: SET_IMAGES,
    images: images
  }
}
