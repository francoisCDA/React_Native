import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home';
import Details from './screens/Details';

const Pile = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
        <Pile.Navigator initialRouteName='Accueil'>
            <Pile.Screen name='Accueil' component={Home} options={{headerShown: true}} />
            <Pile.Screen name='Details' component={Details} />
        </Pile.Navigator>
    </NavigationContainer>    
  )
}

export default App

//const styles = StyleSheet.create({})