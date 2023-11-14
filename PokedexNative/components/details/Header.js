import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import TypeList from '../TypeList'

const Header = ({nom, types, image, couleur}) => {

  const color = (couleur == 'white' || couleur == 'yellow' || couleur == 'pink' ) ? {color:"#222"} : {color:"#eee"}

  return (
    <View style={[styles.container, {backgroundColor: couleur}]}>
      <Text style={[styles.title,color]}>{nom}</Text>
      <View style={styles.subContainer}>
        <View style={styles.subSubContainer}>
            <TypeList types={types} css={styles.types}/>
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
        paddingTop:12,
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
       // color:'#EEE',
        fontWeight:'900',
        marginLeft:12,
    },
    sprite: {
        width:150,
        height:150,
    },
    types: {
        padding:6,
        fontSize:16,
    }
})