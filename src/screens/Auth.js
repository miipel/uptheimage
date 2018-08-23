import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import ButtoWithBackground from '../components/UI/ButtonWithBackground'

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
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text>Please log in</Text>
          <ButtoWithBackground color="#008BEC" onPress={this.authHandler}>
            Log In
          </ButtoWithBackground>
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

const mapDispatchToProps = dispatch => {
  return {
    onTryAuth: () => dispatch(tryAuth())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AuthScreen)
