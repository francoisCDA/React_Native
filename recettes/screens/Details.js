import { StyleSheet, Text, View, Image,FlatList } from 'react-native'
import React from 'react'

import { MEALS } from '../data/data'



const Details = ({route}) => {

    const plat = MEALS.find( mil => mil.id == route.params)

  return (
    <View>
    <Image 
        source={
            {uri: plat.imageUrl}
        }
    />
      <Text>Details {plat.title}</Text>
      <View style={styles.info}>
        <Text>{plat.duration}</Text>
        <Text>{plat.complexity}</Text>
        <Text>{plat.affordability}</Text>
      </View>

        <Text>Ingredients</Text>

        <FlatList 
            data={plat.ingredients}
            renderItem={ (ingre) => {
                return (
                    <View>
                        <Text>{ingre.item}</Text>
                    </View>
                )
            }}
            keyExtractor={ (item,index) => { 
                return index
            }}
        
        />

        <Text>Etapes</Text>

        <FlatList 
            data={plat.steps}
            renderItem={ (step) => {
                return (
                    <View>
                        <Text>{step.item}</Text>
                    </View>
                )
            }}
            keyExtractor={ (item,index) => { 
                return index
            }}
        />
        <View style={styles.info}>
            { plat.isVegan && <Text>Vegan</Text>}
            { plat.isVegetarian && <Text>Végète t'as rien</Text>}
            { plat.isLactoseFree && <Text>Sans Lactose</Text>}
        </View>

    </View>
  )
}

export default Details

const styles = StyleSheet.create({
    info: {
        flexDirection:"row",
        justifyContent:'space-around'
    }
})