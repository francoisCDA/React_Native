import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import PokeballCard from '../components/PokeballCard'
import { useSelector } from 'react-redux'

const Pokeball = () => {

  const {pokeball,pokedex} = useSelector(state => state.pokemon)

  const getColor = (nom) => {
    const poke = pokedex.find( pk => pk.nom == nom )
  
    return {couleur:poke.couleur,url:poke.image}
  }

  return (
    <View>
      <FlatList 
        data={pokeball} 
        keyExtractor={ (item,index) =>  item+index }
        renderItem={ ({item,index}) => {
          return (
            <PokeballCard nom={item} idx={index} deco={getColor(item)} />
          )
        }}
          
      />
    </View>
  )
}

export default Pokeball

const styles = StyleSheet.create({
 
})