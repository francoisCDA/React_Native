import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Etiquette = ({cat}) => {

    const navigation = useNavigation();

      return (
        <View style={styles.ombre} >
          <Pressable onPress={() => {navigation.navigate('categorie',{categories:cat.id,favoris:[]})}}  style={ ({pressed}) => pressed ? {backgroundColor: 'salmon', borderRadius:15} : {backgroundColor: cat.color, borderRadius:15} } >
            <Text style={ styles.etiquette } >{cat.title}</Text>
          </Pressable>
        </View> 
      )
      
    }

const styles = StyleSheet.create({
    etiquette : {
        textAlign:'center',
        textAlignVertical:'center',
        aspectRatio: 1,
        borderRadius: 15,
        fontSize:20,
        fontWeight:'800',
        overflow:'hidden',
    },
    ombre : {
        elevation: 3,
        shadowColor: "#000",
        width: '42%',
        margin:5,
        borderRadius: 15,
    }
})

export default Etiquette