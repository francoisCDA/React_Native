import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './screens/Home'
import Contacts from './screens/Contacts'
import About from './screens/About'


const Tab = createBottomTabNavigator()

const AppDemoTab = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{tabBarIconStyle:{display:'none'},tabBarLabelPosition:'beside-icon'}}>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Contacts' component={Contacts} />
            <Tab.Screen name='About' component={About} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppDemoTab