import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

const PokSkills = ({data, couleur}) => {
  return (
    <View style={styles.container}>
        <FlatList 
            data={data}
            keyExtractor={(item,index) => index }
            renderItem={ ({item}) => {

                    const color = (couleur == 'white' || couleur == 'yellow'  || couleur == 'pink' ) ? {color:"#222"} : {color:"#eee"}

                   return (

                    <View>
                        <Text style={[styles.skill, {backgroundColor: couleur},color]}>{item}</Text>
                    </View>
                )
            }}
            horizontal={true}
   
        />
    </View>
  )
}

export default PokSkills

const styles = StyleSheet.create({
    container:{
        marginTop:6,
        marginBottom:12,
    },  
    skill : {
        padding:9,
        marginHorizontal:2,
        //color:'white',
        borderRadius:10,
        fontWeight:'800'
    }
})