import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PokeDim = ({taille, poids}) => {
  return (
    <View style={styles.container}>
        <View style={styles.subContainer}>
            <Text style={styles.title}>Taille</Text>
            <Text style={styles.data}>{taille * 10} cm</Text>
        </View>
        <View style={styles.subContainer}>
            <Text style={styles.title}>Poids</Text>
            <Text style={styles.data}>{poids / 10} kg </Text>
        </View>
    </View>
  )
}

export default PokeDim

const styles = StyleSheet.create({
    container: {
        width:'80%',
        padding:12,
        borderRadius:15,
        marginVertical:16,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        elevation:5,
        shadowColor:"#000",
        backgroundColor:'white',
    },
    subContainer:{
        alignItems:'center',
    },
    title: {
        fontSize:14,
    },
    data: {
        fontSize:16,
        padding:6,
    }

})