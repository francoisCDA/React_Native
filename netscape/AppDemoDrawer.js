import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './drawer/Home'
import About from './drawer/About'

const Tiroir = createDrawerNavigator()

const AppDemoDrawer = () => {
  return (
    <NavigationContainer>
        <Tiroir.Navigator>
            <Drawer.Screen name="home" component={Home} />
            <Drawer.Screen name="about" component={About} />
        </Tiroir.Navigator>
    </NavigationContainer>
  )
}

export default AppDemoDrawer