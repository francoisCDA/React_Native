import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { axiosGetPokemonByUrl } from '../slices/pokeSlice';
import axios from 'axios';


const Home = ({navigation}) => {

    const { pokedex, pokeball } = useSelector(state => state.pokemon );
    const dispatch = useDispatch();

    useEffect( () => {
              
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
    <View style={styles.container}>
      <Image 
        source={
          {uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'}
        }
        style={styles.bandeau}
      />
      <Text style={styles.sousTitre}>Attrapez les tous !</Text>
      <View style={styles.subContainer}>
        <Pressable onPress={() => navigation.navigate('pokedex')} >
            <Text style={[styles.section,{backgroundColor:'#ee5555'}]}>Pokedex ({pokedex.length})</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate('pokeball')}>
            <Text style={[styles.section,{backgroundColor:'#5555ee'}]}>Pokeball ({pokeball.length})</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#999999',
    alignItems:'center',
    justifyContent:'center',
  },
  subContainer: {
    flexDirection:'row',
    justifyContent:'space-evenly',
    width:'95%',
    //backgroundColor:'red'
  },
  section: {
    fontSize: 25,
    fontWeight:'700',
    padding:12,
    borderRadius:15,
    color:'#eeeeee'
  },
  bandeau: {
    width:"95%",
    height:140,
  },
  sousTitre: {
    fontSize:32,
    marginBottom:50,
  }

})