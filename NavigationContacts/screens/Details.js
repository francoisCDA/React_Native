import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Details = ({route}) => {
  return (
    <View>
      <Text>Prénom : {route.params.first}</Text>
      <Text>Nom : {route.params.last}</Text>
      <Text>Téléphone: {route.params.phone}</Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})