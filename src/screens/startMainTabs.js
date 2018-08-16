import { Navigation } from 'react-native-navigation'
import { Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const startTabs = () => {
  Promise.all([
    Icon.getImageSource(
      Platform.OS === 'android' ? 'md-list-box' : 'ios-list-box',
      30
    ),
    Icon.getImageSource(
      Platform.OS === 'android' ? 'md-cloud-upload' : 'ios-cloud-upload',
      30
    ),
    Icon.getImageSource(Platform.OS === 'android' ? 'md-menu' : 'ios-menu', 30)
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'uptheimage.UploadLogScreen',
          label: 'Uploaded Images',
          title: 'Uploaded Images',
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: 'Menu'
              }
            ]
          }
        },
        {
          screen: 'uptheimage.UploadImageScreen',
          label: 'Upload Your Image',
          title: 'Upload Your Image',
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: 'Menu'
              }
            ]
          }
        }
      ],
      tabsStyle: {
        tabBarSelectedButtonColor: 'blue'
      },
      appStyle: {
        tabBarSelectedButtonColor: 'blue'
      }
    })
  })
}

export default startTabs
