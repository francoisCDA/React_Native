import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, {useEffect} from 'react'
import Header from '../components/details/Header'
import PokeDim from '../components/details/PokeDim'
import PokeInfo from '../components/details/PokeInfo'
import EvolutionChain from '../components/details/EvolutionChain'
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux';
import { saveEvolutionChain } from '../slices/pokeSlice'
import PokSkills from '../components/details/PokSkills'

const Pokemon = ({route}) => {

  const dispatch = useDispatch();

  const {pokedex, pokespecies } = useSelector(state => state.pokemon)
  const pokemon = pokedex.find(poke => poke.nom == route.params)

  //console.log('urlchaine ',pokemon.evolutionChainUrl)

  useEffect( () => {
    if (pokespecies[pokemon.evolutionChainUrl] == null) {
      console.log('get chaine')
      axios.get(pokemon.evolutionChainUrl)
      .then (reponse => {
        // console.log(reponse.data.chain.species.name) // base
        // console.log(reponse.data.chain.evolves_to[0].species.name) //evolution 1
        // console.log(reponse.data.chain.evolves_to[0].evolves_to[0].species.name)
        
        let pokeChain = [];

        pokeChain.push(reponse.data.chain.species.name)
        if (reponse.data.chain.evolves_to[0] != null) {
          pokeChain.push(reponse.data.chain.evolves_to[0].species.name)
          if (reponse.data.chain.evolves_to[0].evolves_to[0] != null) {
            pokeChain.push(reponse.data.chain.evolves_to[0].evolves_to[0].species.name)
          }
        }
        console.log('nouvelle chaine d evolution',pokeChain)

        dispatch(saveEvolutionChain({url: pokemon.evolutionChainUrl,chain:pokeChain}))

      })
      .catch (error => console.log(error))

    } else {
      console.log('chaine d évolution connue')
      console.log(pokespecies[pokemon.evolutionChainUrl])
      //setEvolvChain([...pokespecies[pokemon.evolutionChainUrl]])
    }
  })


  return (
    <ScrollView>
      <Header nom={pokemon.nom} types={pokemon.types} image={pokemon.image} couleur={pokemon.couleur} />
      <Text>Détails</Text>
      <PokeInfo flavorText={pokemon.flavorTextFr} />
      <PokeDim taille={pokemon.height} poids={pokemon.weight} />
      <Text>Aptitudes</Text>
      <PokSkills data={pokemon.abilities} />
      <Text>Mouvements</Text>
      <PokSkills data={pokemon.moves} />
      <Text>Chaine d'évolutions</Text>
      { pokespecies[pokemon.evolutionChainUrl] != null && <EvolutionChain chain={pokespecies[pokemon.evolutionChainUrl]} /> }
    </ScrollView>

  )
}

export default Pokemon

const styles = StyleSheet.create({})