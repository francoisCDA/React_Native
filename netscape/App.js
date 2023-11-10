import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PageA from './component/PageA'
import PageB from './component/PageB'
import PageC from './component/PageC'


//creer un objet stack navigation pour obtenir un navigator
const Stack = createNativeStackNavigator()



const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Accueil'>
            <Stack.Screen name='Accueil' component={PageA} options={{headerShown:false}} /> 
            <Stack.Screen name='body' component={PageB}  options={{title: "Mes articles"}}/> 
            <Stack.Screen name='option' component={PageC}  options={{title: "Mes options"}}/> 
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App