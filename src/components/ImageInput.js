import React from 'react'

import DefaultInput from './UI/DefaultInput'

const imageInput = props => (
  <DefaultInput
    placeholder="Your description"
    value={props.imageData.value}
    valid={props.imageData.valid}
    touched={props.imageData.touched}
    onChangeText={props.onChangeText}
  />
)

export default imageInput
