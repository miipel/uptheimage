import React, { Component } from 'react'
import { View, Text, Button, Image } from 'react-native'
import { connect } from 'react-redux'

import PickImage from '../components/PickImage'
import { addImage } from '../store/actions/index'

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

const mapStateToProps = state => {
  return {
    imageAdded: state.images.imageAdded
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddImage: (imageName, image) =>
      dispatch(addImage(imageName, image))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadImageScreen)
