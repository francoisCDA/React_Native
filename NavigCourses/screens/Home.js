import { FlatList, StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

const Home = ({navigation,route}) => {

  const [listeDeCourses,setListeDeCourses] = useState([]) 

  useEffect( () => {
    console.log('params', route.params)
    if (route.params) {
      console.log(route.params.title)
      if (route.params.title != '') {
        setListeDeCourses(list => [...list,route.params])
      }
      if (route.params.idx) {
        let lst = [...listeDeCourses];
        lst.splice(route.params.idx,1)
        setListeDeCourses(lst)
      }
    }
  },[route.params])

  useEffect( () => {
    console.log(listeDeCourses)
  },[listeDeCourses])

  return (
    <View>
      <Text>Ma liste de courses</Text>
      <View>
        <Button title='Ajouter à la liste' onPress={ () => navigation.navigate('form')}/>
      </View>
      <View>
        <FlatList 
          data={listeDeCourses} 
          renderItem={ (article) => {
              return (
                <View>
                  <Text onPress={() => navigation.navigate('details',{...article.item,idx:article.index})}>{article.item.title}</Text>
                </View>
              )
          }} keyExtractor={(item,index) => {
            return index
        }}
        
        />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})