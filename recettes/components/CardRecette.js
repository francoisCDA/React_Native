import { StyleSheet, Text, View, Pressable,Image } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

const CardRecette = ({plat}) => {

    const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('details',plat.id)}>
        <View style={styles.card}>
            <Image 
                source={
                    {uri: plat.imageUrl}
                }
                style={styles.image}
            />
            <Text style={styles.titre}>{plat.title}</Text>
            <View style={styles.info}>
                <Text>{plat.duration}</Text>
                <Text>{plat.complexity}</Text>
                <Text>{plat.affordability}</Text>
            </View>
        </View>
    </Pressable>
  )
}

export default CardRecette

const styles = StyleSheet.create({
    card: {
        width:'80%',
        backgroundColor:'F1F1F1',
        borderRadius:'15px'
    },
    image: {
        width:'100%',
        height:'auto',
    },
    titre :{
        textAlign:'center',
        fontSize:20,
    },
    info: {
        flexDirection:'row',
        justifyContent:'space-around',
    }
})