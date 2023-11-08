import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Details = ({route}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.etiquette}>Prénom : {route.params.first}</Text>
      <Text style={styles.etiquette}>Nom : {route.params.last}</Text>
      <Text style={styles.etiquette}>Téléphone: {route.params.phone}</Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    container : {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    etiquette : {
        width:'90%',
        fontSize:20,
        backgroundColor:"orange",
        marginVertical:10,
        padding: 10,
        borderRadius: 10,
    }
})