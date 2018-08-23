import React from 'react'

import DefaultInput from '../components/UI/DefaultInput'

const imageInput = props => (
  <DefaultInput
    placeholder="Your description"
    value={props.imageData.value}
    valid={props.placeData.valid}
    touched={props.placeData.touched}
    onChangeText={props.onChangeText}
  />
)

export default imageInput
