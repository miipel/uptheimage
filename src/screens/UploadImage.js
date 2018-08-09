import React, { Component } from 'react'

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
}
