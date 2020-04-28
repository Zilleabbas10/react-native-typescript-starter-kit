import * as React from 'react';
import FlashMessage, { showMessage } from "react-native-flash-message";
import Icon from 'react-native-vector-icons/AntDesign'

import { Metrics, Colors } from '../../Themes';

type NotificationParams = {
  message: string,
  description: string,
  autoHide?: boolean
  duration?: number
}

const toggleSuccessNotification = (params: NotificationParams) => {
  const { message, description, autoHide = true } = params
  showMessage({
    message: message,
    description: description,
    type: "default",
    backgroundColor: Colors.white, // background color
    color: Colors.black, // text color
    textStyle: {
      width: Metrics.screenWidth - Metrics.doubleBaseMargin * 4,
      //@ts-ignore
      maxFontSizeMultiplier: 1.1
    },
    icon: 'success',
    ...(autoHide ? { duration: 3500 } : { autoHide: false })
  })
}

const toggleErrorNotification = (params: NotificationParams) => {
  const { message, description, autoHide = true, duration = 4000 } = params
  showMessage({
    message: message,
    description: description,
    type: "default",
    backgroundColor: Colors.white, // background color
    color: Colors.black, // text color
    textStyle: {
      width: Metrics.screenWidth - Metrics.doubleBaseMargin * 4,
    },
    icon: 'danger',
    ...(autoHide ? { duration } : { autoHide: false })
  })
}


const FlashMessageIcon = (props) => {
  const iconName = props === 'success' ? 'checkcircleo' : 'closecircleo'
  const color = props === 'success' ? Colors.green : Colors.error
  return <Icon name={iconName} style={{ color: color, fontSize: 40, paddingRight: Metrics.baseMargin }} />
}

const AppFlashMessage = () => {
  return (
    <FlashMessage
      position="top"
      renderFlashMessageIcon={FlashMessageIcon}
      style={{
        borderBottomRightRadius: Metrics.baseMargin,
        borderBottomLeftRadius: Metrics.baseMargin,
        shadowColor: Colors.lightGrey,
        shadowOffset: { width: 0.5, height: 2 },
        shadowOpacity: 0.75,
        shadowRadius: 2,
        elevation: 2,
      }}
    />
  )
}

export default {
  AppFlashMessage,
  toggleSuccessNotification,
  toggleErrorNotification
}