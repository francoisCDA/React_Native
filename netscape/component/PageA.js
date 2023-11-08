import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'


const PageA = ({navigation}) => {
  return (
    <View>
      <Text>PageA</Text>
      <Button title='Articles' onPress={() => navigation.navigate('body',{message: "article 2"}) }/>
      <Button title='Option' onPress={() => navigation.navigate('option') }/>
    </View>
  )
}

export default PageA

const styles = StyleSheet.create({})