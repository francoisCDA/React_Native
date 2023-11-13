import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const Etiquette = ({nom,types,spriteUrl,speciesUrl}) => {

        
    //, {backgroundColor: pokespecies[`${id}`].couleur }

    const [couleur,setCouleur] = useState('ligthgrey') ;

     useEffect(() => {
        axios.get(speciesUrl)
        .then (reponse => {
            setCouleur(reponse.data.color.name)
        }).catch (error => console.log(error))
        
    }, []);
 

  return (
    <View style={[styles.container,{backgroundColor: couleur}]}>
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