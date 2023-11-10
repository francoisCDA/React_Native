import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

import { MEALS } from '../data/data'
import CardRecette from '../components/CardRecette'


const Categorie = ({route}) => {

    const CatMeal = MEALS.filter( mil => mil.categoryIds.includes(route.params))


  return (
    <View style={styles.body}>
     
      <FlatList
            data={CatMeal}
            renderItem={ (mil) => {
                return (
                    <CardRecette plat={mil.item} />
                )
            }}
            keyExtractor={ (item,index) => { 
                return index
            }}
      
      />

    </View>
  )
}

export default Categorie

const styles = StyleSheet.create({
    body: {
        backgroundColor:'#e5e5e5',
        flex:1,
    }
})