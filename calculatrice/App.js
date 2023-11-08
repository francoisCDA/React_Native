import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect } from 'react';
import BtnUnique from './component/BtnUnique';
import { useState } from 'react';



export default function App() {

    const monASCII = ['AC',7,4,1,'.','^',8,5,2,0,'%',9,6,3,'Del','/','X','-','+','='];
    
    const [affichage,setAffichage] = useState('');
    const [saisie, setSaisie] = useState('');
    const [operateur,setOperateur] = useState('')
    const [operation,setOperation] = useState(0);


    const calculator = (arg) => {

        console.log('arg :', arg)
        if (!isNaN(arg) || arg == '.') {
           
            setSaisie(state => state + arg)
        } else
        if (arg == 'Del'){
            setSaisie(state => state.substring(0,state.length-1))
        } else
        if (arg == 'AC') {
            setOperateur('AC');
        } else
        if (arg == '=') {
            //setSaisie(state => Number(operation) + Number(saisie));
            
            if (operateur == '+') {
                setOperation(state => Number(operation) + Number(saisie))
  
            }
            if (operateur == '-') {
                setOperation(state => Number(operation) - Number(saisie))

            }
            if (operateur == 'X') {
                setOperation(state => Number(operation) * Number(saisie))
 
            }
            if (operateur == '/') {
                setOperation(state => Number(operation) / Number(saisie))

            }
        } else
        {
            setOperateur(arg)
        }
      
    }

    useEffect( () => {
       setAffichage(saisie)
       console.log('saisie :',saisie);
    },[saisie])


    useEffect( () => {
        console.log('operateur : ',operateur,' ','operation : ', operation)
        if (operateur == '+') {
            setOperation( Number(saisie))
            setSaisie('+')
        }
        if (operateur == '-') {
            setOperation( Number(saisie))
            setSaisie('-');
        }
        if (operateur == 'X') {
            setOperation(Number(saisie))
            setSaisie('*');
        }
        if (operateur == '/') {
            setOperation( Number(saisie))
            setSaisie('/');
        }
        
    },[operateur]) 

    useEffect( () => {
        console.log('operation : ', operation)
        setSaisie(operateur)
        
    }, [operation])



 return (
    <View style={styles.container}>
       <View style={styles.header} >
            <Text style={styles.titre}>Calcultor</Text>
            <Text style={styles.input}>{affichage}</Text> 
        </View>
         <View style={styles.body}>
            {
                monASCII.map( (touche,i) => <BtnUnique key={i} css={ !isNaN(touche) || touche == '.' || touche =='Del' ? styles.rond : styles.carre} text={touche} callBack={calculator} />)
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
        backgroundColor:'orange',
        justifyContent:'space-between',
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
        fontSize: 60,
        marginBottom: 13,
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