import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import pokeSlice from '../slices/pokeSlice';
import Etiquette from '../components/Etiquette';

const Pokedex = () => {

    const { pokedex } = useSelector( state => state.pokemon )

  return (
    <View style={styles.container}>
      <Text>Pokedex</Text>
    <FlatList 
        data={pokedex}
        keyExtractor={ (item, index) => index }
        renderItem={ ({item}) => <Etiquette nom={item.nom} types={item.types} spriteUrl={item.image} /> }
        numColumns={2}
    />


    </View>
  )
}

export default Pokedex

const styles = StyleSheet.create({
    container: {
        width:'100%',
        alignItems:'center',
    }
})