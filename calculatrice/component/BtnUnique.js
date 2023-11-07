import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function BtnUnique({css,text,callBack}) {
  return (
    <View >
      <Text style={[styles.touche, css]} onPress={() => callBack(text)}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    touche: {
        padding: 20,
        fontSize: 30,
        textAlign:'center',
        
    }
})