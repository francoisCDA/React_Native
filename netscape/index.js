/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AppDemoTab from './AppDemoTab';
import AppDemoDrawer from './AppDemoDrawer';

AppRegistry.registerComponent(appName, () => AppDemoDrawer);
