import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { rmToPokeball } from '../slices/pokeSlice'

const PokeballCard = ({nom, idx, deco}) => {

    const netscape = useNavigation();
    const dispatch = useDispatch();

    console.log('pokeCard ',deco)

  return (
    <View style={[styles.container, {shadowColor: deco.couleur}]}>
      <Text style={styles.nom}>{nom}</Text>
      <Image 
        source={{
            uri:deco.url
        }}
        style={styles.image}
      />
    <View style={styles.grpBtn}>
      <View style={styles.btn}>
        <Button title='Relâcher' color={'#ff9911'} onPress={() => dispatch(rmToPokeball(idx)) }/>
      </View>
      <View style={styles.btn} >
        <Button title='Détails' color={'#66bbff'} onPress={() => netscape.navigate('pokemon',nom)}/>
      </View>
    </View>
    </View>
  )
}

export default PokeballCard

const styles = StyleSheet.create({
    container: {
        width:'80%',
        alignSelf:'center',
        marginTop:8,
        marginBottom:40,
        padding:14,
        backgroundColor:'rgba(220,220,220,.8)',
        borderRadius:15,
        alignItems:'center',
        elevation:12,

    },
    nom:{
        textAlign:'center',
        fontSize:25,
        textTransform:'capitalize',
        marginBottom:14,
    },
    image:{
        width:100,
        height:100,
    },
    grpBtn: {
        flexDirection:'row',
        justifyContent:'space-evenly',
        width:'100%'
    },
    btn: {
        width:'40%'
    }
})