import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'

import { MEALS } from '../data/data'
import CardRecette from '../components/CardRecette'


const Categorie = ({route}) => {

  let CatMeal ;

  if (route.params.favoris.length == 0 ) {
      CatMeal = MEALS.filter( mil => mil.categoryIds.includes(route.params.categories))
  } else {
      CatMeal = MEALS.filter( mil => route.params.favoris.includes(mil.id) )
  }


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