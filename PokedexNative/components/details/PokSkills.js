import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const PokSkills = ({data}) => {
  return (
    <View>
        <FlatList 
            data={data}
            keyExtractor={(item,index) => index }
            renderItem={ ({item}) => {
                return (
                    <View>
                        <Text>{item}</Text>
                    </View>
                )
            }}
            horizontal={true}
   
        />
    </View>
  )
}

export default PokSkills

const styles = StyleSheet.create({})