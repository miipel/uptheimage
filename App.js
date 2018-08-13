import { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

import AuthScreen from './src/screens/Auth'
import UploadImageScreen from './src/screens/UploadImage'
import configureStore from './src/store/configureStore'

const store = configureStore()

// Register Screens
// Navigation.registerComponent(
//   'uptheimage.AuthScreen',
//   () => AuthScreen,
//   store,
//   Provider
// )

Navigation.registerComponent(
  'uptheimage.UploadImageScreen',
  () => UploadImageScreen,
  store,
  Provider
)

// Start App
export default () =>
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'uptheimage.AuthScreen',
      title: 'Login'
    }
  })
