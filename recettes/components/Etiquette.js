import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Etiquette = ({cat}) => {

    const navigation = useNavigation();

  return (
    <View>
      <Text style={[styles.etiquette,{backgroundColor:cat.color}]} onPress={() => {navigation.navigate('categorie',cat.id)}} >{cat.title}</Text>
    </View>
  )
}

export default Etiquette

const styles = StyleSheet.create({
    etiquette : {
        padding:30,
        margin:10,
        textAlign:'center',
        textAlignVertical:'center',
        width:180,
        height:180,
        borderRadius: 15
    }
})