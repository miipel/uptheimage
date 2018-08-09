import React, { Component } from 'react'
import { View, Image, Button } from 'react-native'

import ImagePicker from 'react-native-image-picker'

class PickImage extends Component {
  state = {
    pickedImage: null
  }

  pickImageHandler = () => {
    ImagePicker.showImagePicker()
  }

  render() {
    return (
      <View>
        <View>
          <Image />
        </View>
        <View>
          <Button />
        </View>
      </View>
    )
  }
}
