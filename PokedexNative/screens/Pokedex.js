import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import pokeSlice, { axiosDataSpecies } from '../slices/pokeSlice';
import Etiquette from '../components/Etiquette';


const Pokedex = () => {

    const { pokedex } = useSelector( state => state.pokemon )

    const dispatch = useDispatch();

  /*   pokedex.forEach( pokemon => { 
      dispatch(axiosDataSpecies(pokemon.id))
    }); */

  return (
    <View style={styles.container}>

    <FlatList 
        data={pokedex}
        keyExtractor={ (item, index) => index }
        renderItem={ ({item}) => <Etiquette nom={item.nom} types={item.types} spriteUrl={item.image} speciesUrl={item.speciesUrl} /> }
        numColumns={2}
        showsVerticalScrollIndicator={false}
        //contentContainerStyle={{backgroundColor:'orange'}}
    />


    </View>
  )
}

export default Pokedex

const styles = StyleSheet.create({
    container: {
        width:'100%',
        backgroundColor:'rbga(255,200,20,0.8)',
      //  alignItems:'center',
         
    }
    
})