# React_Native

## CLI

node -v

JDK version  Microsoft Build of OpenJDK with Hotspot 11 Microsoft.OpenJDK.11               11.0.21.9

android studio pour l'emulateur

###

npx react-native@latest init nomduprojet

npx react-native run-android


### react-native navigation


#### Stack
npm i @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm i @react-navigation/native-stack

import {NAvigationContainer} from '@react-navigation/native'
import { createNAtiveStackNavigator } from '@react-navigation/native/native-stack'



### navigation TAB

npm i @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm i @react-navigation/bottom-tabs


### navigation tiroire

npm i @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm i @react-navigation/drawer
npm i react-native-gesture-handler
npm i react-native-reanimated

#### dans babel.config.js :
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['react-native-reanimated/plugin']
};

### sauvegarde des données Async Storage ~ local storage ~

npm i @react-native-async-storage/async-storage

import AsyncStorage from '@react-native-async-storage/async-storage' 



### GPS 

npm install @react-native-community/geolocation


To request access to location, you need to add the following line to your app's AndroidManifest.xml:

\android\app\src\main\AndroidManifest.xml

<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />

or

<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />