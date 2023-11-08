import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PageB = ({navigation,route}) => {
  return (
    <View>
      <Text>Articles</Text>
      <Text>{route.params.message}</Text>
    </View>
  )
}

export default PageB

const styles = StyleSheet.create({})