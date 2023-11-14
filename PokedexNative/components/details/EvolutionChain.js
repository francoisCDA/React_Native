import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

const EvolutionChain = ({chain}) => {

   const {pokedex, pokedexExtra } = useSelector(state => state.pokemon )

   const getUrlImage = (nom) => {
    const poke = pokedex.find( poke => poke.nom == nom)
    if (poke != undefined) {
        return poke.image
    } else {
        return pokedexExtra[`${nom}`];
    }
   }


  return (
     <View style={styles.container}>
        <FlatList 
            data={chain}    
            keyExtractor={(item,index) => index}
            renderItem={ ({item}) => {

                const urlImage = getUrlImage(item)

                return (
                    <View style={styles.spriteContainer}>
                        <Image 
                            source={{
                                uri: urlImage,
                            }}
                            style={styles.sprite}
                        />
                        <Text style={styles.titre}>{item}</Text>
                    </View>
                )
            }}
            horizontal={true}
        />

    </View>
  )
}

export default EvolutionChain

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        marginBottom:15,
    },
    sprite :{
        width: 120,
        height: 120,
    },
    spriteContainer:{
        alignItems:'center',
    },
    titre: {
        fontSize: 18,
        textTransform:'capitalize',
    }
})