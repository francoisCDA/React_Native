import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Provider } from 'react-redux'

import { Text, View } from 'react-native'
import React from 'react'
import Home from './screens/Home'
import Accueil from './screens/Accueil'
import Categorie from './screens/Categorie'
import Details from './screens/Details'


const Stack = createNativeStackNavigator()


const App = () => {

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='accueil'>
            <Stack.Screen name='accueil' component={Accueil} options={{title:'Toutes les catégories'}} />
            <Stack.Screen name='categorie' component={Categorie} options={{title:'Liste des plats'}} />
            <Stack.Screen name='details' component={Details} option={{title:'Recette'}} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }


export default App