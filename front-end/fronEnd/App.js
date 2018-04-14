/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
var PushNotification = require('react-native-push-notification');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  configureNotifications = () => {
    PushNotification.configure({
      onRegister: (token) => {
        console.log("Registered with token "+token);
      },

      onNotification: (notification) => {
        console.log("Notification received "+notification);

        notification.finish();
      },
    })
  }

  sendTestingNotification = () => {
    PushNotification.localNotification({
      id: 0,
      title: "GLaDoS says...",
      message: "This is a triumph",
      playSound: true,
      soundName: "default",
      repeatType: 'minute',
      actions: '["I\'m making a note here", "Huge success!" ]',
    });
  }
  constructor() {
    super();
    this.configureNotifications();
    this.sendTestingNotification();
  }

  render() {
    this.sendTestingNotification();
    return (
      <Text>Prueba de notificaciones</Text>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});