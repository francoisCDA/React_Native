import { StyleSheet, Image, View, Text, Pressable } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRoute } from '@react-navigation/native'
import { addToPokeball } from '../../slices/pokeSlice'

const BtnPokeBall = () => {

    const route = useRoute()

    const { pokeball } = useSelector(state => state.pokemon) ;
    const dispatch = useDispatch();

    const countPoke = () => {
        let cmpt = 0;

        pokeball.forEach( nom => {
            if (nom == route.params) cmpt++
        });

        return cmpt
    }

    
  return (
    <Pressable onPress={() => dispatch(addToPokeball(route.params)) }>
        <View style={styles.container}>
            <Text style={styles.compteur}>{countPoke()}</Text>
            <Image 
                source={ require('../../assets/pokeball.png') }
                style={styles.icone}
            />
        </View>
    </Pressable>
  )
}

export default BtnPokeBall

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        alignItems:'center',
    },
    icone: {
        width:28,
        height:28,
        marginLeft:6,
    },
    compteur: {
        fontSize:16,
    }
})