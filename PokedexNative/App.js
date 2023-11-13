
import React from 'react'

import { Provider } from 'react-redux'
import store from './store'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import Pokedex from './screens/Pokedex'
import Pokemon from './screens/Pokemon'
import Pokeball from './screens/Pokeball'


const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator initialRouteName='home' >
                <Stack.Screen name='home' component={Home} options={{headerShown: false}} />
                <Stack.Screen name='pokedex' component={Pokedex} options={{title:'Pokedex'}} />
                <Stack.Screen name='pokemon' component={Pokemon} />
                <Stack.Screen name='pokeball' component={Pokeball} options={{title:'Vos Pokemons'}} />
            </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  )
}

export default App