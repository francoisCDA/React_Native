import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'


const TypeList = ({types, css }) => {

  return (
    <>
    {types.map( (t,i) => {
                    const color = getTypeCouleur(t)
                    return (
                        

                        <View key={i} >
                            <Text style={[styles.type,{backgroundColor:color},css]}>{t}</Text>
                        </View>
                    )
    })}        
    
    {/* <FlatList 
        data={types}
        keyExtractor={(item,index) => index}
        renderItem={ ({item}) => {
            const color = getTypeCouleur(item)
            return (
                <View>
                    <Text style={{backgroundColor:color}}>{item}</Text>
                </View>
            )
        }}
    /> */}
    </>
  )
}

export default TypeList

const styles = StyleSheet.create({
    type: {
        marginBottom:5,
        borderRadius:15,
        textAlign:'center',
        fontWeight:'600',
        color:'#111'
    }
})

function getTypeCouleur(type) {
    switch (type) {
        case 'fire':
            return "#F7786B"
            break;

        case 'water':
            return "#77C4FE"
            break;
           
        case 'poison':
            return "#7C538C"
            break;    
   
        case 'grass':
            return "#4FC1A6";
            break;

        case 'electric':
            return "#FFCE4B";
            break;  
       
        case 'rock':
            return "#B1736C";
            break;  
       
        case 'dark':
            return "#565669";
            break;
       
        case 'flying':
            return "#cdcde6";
            break;
       
        case 'dragon':
            return "#f7af5a";
            break;

        case 'bug':
            return "#92df68";
            break;

        case 'ground':
            return "#be7447";
            break;

        case 'psychic':
            return "#405483";
            break;

        case 'fighting':
            return "#a2a29b";
            break;
        case 'ghost':
            return '#9473b4';
            break;
        case 'ice':
            return '#a4def6';
            break;

        default:
            return "#c5c5c5"
    }
}