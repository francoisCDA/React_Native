import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const EvolutionChain = ({chain}) => {

   const {pokedex} = useSelector(state => state.pokemon )

   const getUrlImage = (nom) => {
    const poke = pokedex.find( poke => poke.nom == nom)
    console.log('sprite evolution ',poke.image)
    return poke.image
   }


  return (
     <View>
        <Text>EvolutionChain</Text>
        <FlatList 
            data={chain}    
            keyExtractor={(item,index) => index}
            renderItem={ ({item}) => {

                const urlImage = getUrlImage(item)

                return (
                    <View>
                        <Image 
                            source={{
                                uri: urlImage,
                            }}
                            style={styles.sprite}
                        />
                        <Text>{item}</Text>
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
    sprite :{
        width: 120,
        height: 120,
    }
})