import React, { Component } from 'react'
import { View, Image, Button } from 'react-native'
import ImagePicker from 'react-native-image-picker'

class PickImage extends Component {
  state = {
    pickedImage: null
  }

  pickImageHandler = () => {
    ImagePicker.showImagePicker(
      { title: 'Pick an Image', maxWidth: 800, maxHeight: 600 },
      res => {
        if (res.didCancel) {
          console.log('User cancelled!')
        } else if (res.error) {
          console.log('Error')
        } else {
          this.setState({
            pickedImage: null // TODO:
          })
        }
      }
    )
  }

  render() {
    return (
      <View>
        <View>
          <Image />
        </View>
        <View>
          <Button title="Pick Your Image" onPress={this.pickImageHandler} />
        </View>
      </View>
    )
  }
}

export default PickImage
