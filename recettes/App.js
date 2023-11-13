import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Provider } from 'react-redux'
import { store } from'./store.js'

import React from 'react'
import Accueil from './screens/Accueil'
import Categorie from './screens/Categorie'
import Details from './screens/Details'
import AddBootmark from './components/AddBootmark.js'
import Favoris from './components/Favoris.js'

const Stack = createNativeStackNavigator()


const App = () => {

    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='accueil'>
              <Stack.Screen name='accueil' component={Accueil} options={{title:'Toutes les catégories',headerRight: Favoris}} />
              <Stack.Screen name='categorie' component={Categorie} options={{title:'Liste des plats'}} />
              <Stack.Screen name='favoris' component={Categorie} options={{title:'Plats favoris'}} />
              <Stack.Screen name='details' component={Details} options={{title:'Recette',headerRight:AddBootmark}} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }


export default App