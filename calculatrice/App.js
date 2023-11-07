import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import BtnUnique from './component/BtnUnique';


export default function App() {

    const monASCII = [0,1,2,3,4,5,6,7,8,9,'.','Del','AC','^','%','/','X','-','+','='];
    const order = [];

    const evalTouch = (touche) => {
        console.log(touche)
    }


  return (
    <View style={styles.container}>
       <View style={styles.header} >
            <Text style={styles.titre}>Calcultor</Text>
            <TextInput style={styles.input} />
        </View>
         <View style={styles.body}>
            <FlatList data={monASCII} 
                        renderItem={(touche) => {
                            return (
                                <BtnUnique css={touche.index < 11 ? styles.rond : styles.carre} text={touche.item} callBack={eval} />
                            )
                        }}
                        keyExtractor={ (item, index) => index}
                        
            />
         </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    header: {
        flex: 2,
        //height:'35%',
        backgroundColor:'orange'
    },
    body: {
        flex: 5,
        backgroundColor:'blue',
       //width: '100%',
        //height:'65%',
       // gap: 10,
       // flexDirection: 'row',
        flexWrap: "wrap",
    },
    titre: {
        fontSize:30,
        fontWeight:'500',
    },
    input : {
        width: '100%',  
        textAlign: 'right',
        fontSize: 40,
    },
    rond : {
        borderRadius: 100,
        backgroundColor: "#F1F1F1",

        fontWeight:'800',
        color:'#111111'
    },
    carre : {
        borderRadius: 12,
        backgroundColor: "grey",
        color: 'white',
    }

})