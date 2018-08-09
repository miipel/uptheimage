import React, { Component } from 'react'
import { View, Text, Button, Image } from 'react-native'

import PickImage from '../components/PickImage'

class UploadImageScreen extends Component {
  state = {
    controls: {
      imageName: {
        value: '',
        valid: false,
        touched: false,
        validationRules: {
          notEmpty: true
        }
      },
      image: {
        value: null,
        valid: false
      }
    }
  }

  render() {
    return (
      <View>
        <h1>Share an image</h1>
        <PickImage />
      </View>
    )
  }
}
