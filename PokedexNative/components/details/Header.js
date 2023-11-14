import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import TypeList from '../TypeList'

const Header = ({nom, types, image, couleur}) => {
  return (
    <View style={[styles.container, {backgroundColor: couleur}]}>
      <Text style={styles.title}>{nom}</Text>
      <View style={styles.subContainer}>
        <View style={styles.subSubContainer}>
            <TypeList types={types} />
        </View>
      <Image 
            source={{uri:image}}
            style={styles.sprite}
      />

      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container : {
        width: '100%',
    },
    subContainer : {
        flexDirection:'row',
        margin:15,
        justifyContent:'space-around',
        
    },
    subSubContainer: {
        width:'20%',
    },
    title: {
        fontSize: 25,
        textTransform:'capitalize',
        color:'#000',
        fontWeight:'900',
    },
    sprite: {
        width:150,
        height:150,

    }
})