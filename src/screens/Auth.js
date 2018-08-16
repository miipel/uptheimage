import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

import { tryAuth } from '../store/actions/index'

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

  authHandler = () => {
    this.props.onTryAuth()
  }

  render() {
    return (
      <View>
        <Text>Please log in</Text>
        <Button
          onPress={this.authHandler}
          title="Please Log In"
          color="#841584"
        />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAuth: () => dispatch(tryAuth())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AuthScreen)
