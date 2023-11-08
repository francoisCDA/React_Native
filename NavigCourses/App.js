import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import Formulaire from './screens/Formulaire'
import Details from './screens/Details'



const Pile = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
        <Pile.Navigator initialRouteName='home'>
            <Pile.Screen name='home' component={Home} options={{headerShown: false}} />
            <Pile.Screen name='form' component={Formulaire} option={{title: 'Ajouter un article :'}}/>
            <Pile.Screen name='details' component={Details} option={{title: 'Détails'}} />

        </Pile.Navigator>
    </NavigationContainer>
  )
}

export default App