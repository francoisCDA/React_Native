import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { axiosGetPokemonByUrl } from '../slices/pokeSlice';
import axios from 'axios';


const Home = ({navigation}) => {

    const { pokedex, pokeball } = useSelector(state => state.pokemon );
    const dispatch = useDispatch();

    useEffect( () => {
        console.log('useEffect');
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=10&limit=50)')
        .then (reponse => {
            reponse.data.results.forEach( poke => {
                dispatch(axiosGetPokemonByUrl(poke.url))
            });
        })
        .catch( (error) => {
          console.log(error);
        })

    },[])



  return (
    <View>
      <Text>Attrapez les tous</Text>
      <View>
        <Pressable onPress={() => navigation.navigate('pokedex')} >
            <Text>Pokedex ({pokedex.length})</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('pokeball')}>
            <Text>Pokeball ({pokeball.length})</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})