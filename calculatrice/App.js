import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import BtnUnique from './component/BtnUnique';


export default function App() {

    const monASCII = [0,1,2,3,4,5,6,7,8,9,'.','Del','AC','^','%','/','X','-','+','='];
    const order = [10,4,9,14,3,8,13,2,7,12,5,15,1,6,11,20,20,20,20,20,20,20,20,20];

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
            {
                monASCII.map( (touche,i) => <BtnUnique key={i} css={i < 11 ? styles.rond : styles.carre} order={order[i]} text={touche} callBack={eval} />)
            }
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
        marginLeft:'5%',
        flex: 3,
        //backgroundColor:'blue',
       //width: '100%',
        //height:'65%',
        gap: 10,
       // flexDirection: 'row',
        flexWrap: "wrap",
       width: "90%",
        //flexDirection: "row",
    justifyContent: "space-around",
    alignContent:'space-around',
    
    
    //marginVertical: 10,
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