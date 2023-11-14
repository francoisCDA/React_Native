import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, {useEffect} from 'react'
import Header from '../components/details/Header'
import PokeDim from '../components/details/PokeDim'
import PokeInfo from '../components/details/PokeInfo'
import EvolutionChain from '../components/details/EvolutionChain'
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux';

const Pokemon = ({route}) => {

  const {pokedex, pokespecies } = useSelector(state => state.pokemon)

  const pokemon = pokedex.find(poke => poke.nom == route.params)

  console.log('urlchaine ',pokemon.evolutionChainUrl)

  useEffect( () => {
    if (pokespecies[pokemon.evolutionChainUrl] == null) {
      console.log('get chaine')
      axios.get(pokemon.evolutionChainUrl)
      .then (reponse => {
        console.log(reponse.data)
      })
      .catch (error => console.log(error))


    } else {
      console.log('chaine connue')
    }
  })


  return (
    <ScrollView>
      <Header nom={pokemon.nom} types={pokemon.types} image={pokemon.image} couleur={pokemon.couleur} />
      <Text>Détails</Text>
      <PokeInfo flavorText={pokemon.flavorTextFr} />
      <PokeDim taille={pokemon.height} poids={pokemon.weight} />
      <Text>Chaine d'évolutions</Text>

    </ScrollView>

  )
}

export default Pokemon

const styles = StyleSheet.create({})