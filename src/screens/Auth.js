import React, { Component } from 'react'
import { MainText, HeadingText } from 'react-native'
import { connect } from 'react-redux'

class AuthScreen extends Component {
  state = {
    controls: {
      email: {
        value: '',
        valid: false,
        validationRules: {
          isEmail: true
        },
        touched: false
      },
      password: {
        value: '',
        valid: false,
        validationRules: {
          minLength: 6
        },
        touched: false
      },
      confirmPassword: {
        value: '',
        valid: false,
        validationRules: {
          equalTo: 'password'
        },
        touched: false
      }
    }
  }

  render() {
    return (
      <MainText>
        <HeadingText>Please Log In</HeadingText>
      </MainText>
    )
  }
}

export default AuthScreen
