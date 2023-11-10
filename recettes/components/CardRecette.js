import { StyleSheet, Text, View, Pressable,Image } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native'

const CardRecette = ({plat}) => {

    const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('details',plat.id)} style={ ({pressed}) => pressed && {backgroundColor:'salmon'} } >
        <View style={styles.card}>
            <Image 
                source={
                    {uri: plat.imageUrl}
                }
                style={styles.image}
            />
            <Text style={styles.titre}>{plat.title}</Text>
            <View style={styles.info}>
                <Text style={styles.infoTxt}>{plat.duration}m</Text>
                <Text style={styles.infoTxt}>{plat.complexity.toUpperCase()}</Text>
                <Text style={styles.infoTxt}>{plat.affordability.toUpperCase()}</Text>
            </View>
        </View>
    </Pressable>
  )
}

export default CardRecette

const styles = StyleSheet.create({
    card: {
        width:'80%',
        backgroundColor:'#f1f1f1',
        borderRadius: 15,
        alignSelf:'center',
        marginVertical:20,
        overflow:'hidden',
        elevation: 4,
        shadowColor: "#000",
    },
    image: {
        width:'100%',
        height: 200,

    },
    titre :{
        textAlign:'center',
        fontSize:22,
        marginVertical:12,
        fontWeight:'800',
    },
    info: {
        flexDirection:'row',
        justifyContent:'center',
        marginVertical:12,
    },
    infoTxt: {
        marginHorizontal:6,
        fontWeight:'600',
        color:'#1a1a1a'
    }
})