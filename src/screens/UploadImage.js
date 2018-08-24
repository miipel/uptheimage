import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import PickImage from '../components/PickImage'
import { addImage } from '../store/actions/index'
import ImageInput from '../components/ImageInput'

class UploadImageScreen extends Component {
  state = {
    controls: {
      imageDescription: {
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

  imageDescriptionChangedHandler = val => {
    console.log('Desc.changed')
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          placeName: {
            ...prevState.controls.placeName,
            value: val,
            valid: false, // TODO: validation
            touched: true
          }
        }
      }
    })
  }

  imagePickedHandler = image => {
    this.setState(prevState => {
      return {
        controls: {
          ...prevState.controls,
          image: {
            value: image,
            valid: true
          }
        }
      }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <PickImage
            onImagePicked={this.imagePickedHandler}
            ref={ref => (this.imagePicker = ref)}
          />
          <ImageInput
            imageData={this.state.controls.imageDescription}
            onChangeText={this.imageDescriptionChangedHandler}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const mapStateToProps = state => {
  return {
    imageAdded: state.images.imageAdded
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddImage: (imageDescription, image) =>
      dispatch(addImage(imageDescription, image))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadImageScreen)
