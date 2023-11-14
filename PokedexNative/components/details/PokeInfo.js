import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const PokeInfo = ({flavorText}) => {
  return (
    <View>
        <FlatList 
            data={flavorText}
            keyExtractor={ (item,index) => index}
            renderItem={({item}) => <Text>{item.split('\n').join(' ')}</Text> }       
        />

    </View>
  )
}

export default PokeInfo

const styles = StyleSheet.create({})