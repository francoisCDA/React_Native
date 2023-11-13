import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'

const Etiquette = ({nom,types,spriteUrl}) => {
  return (
    <View style={styles.container}>
        <View>
            <Text>{nom}</Text>
            <FlatList 
                data={types}
                keyExtractor={(item,index) => index}
                renderItem={ ({item}) => {
                    return (
                        <View>
                            <Text>{item}</Text>
                        </View>
                    )
                }}
            />
        </View>
        <View>
            <Image 
                source={{uri:spriteUrl}}
                style={styles.sprite}
            />
        </View>

    </View>
  )
}

export default Etiquette

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'lightgrey',
        width:'40%',
        margin:10,
        padding:12,
        borderRadius:8,
    },
    sprite: {
        width:60,
        height:60,
    }
})