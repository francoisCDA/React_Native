import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {

  const [listeDeCourses,setListeDeCourses] = useState([]) 


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
                  <Text onPress={() => navigation.navigate('details',article.item)}>{article.item.label}</Text>
                </View>
              )
          }}
        
        />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})