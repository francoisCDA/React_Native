import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const Details = ({navigation, route}) => {
  return (
    <View>
      <View>
        <Text>{route.params.title}</Text>
        <Text>{route.params.details}</Text>
        <Text>{route.params.budget}</Text>
      </View>
      <View>
        <Button title='Supprimer' color='red' onPress={ () => {navigation.navigate('home',{idx:route.params.idx}) }} />
      </View>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})