import { useEffect, useState } from "react";
import { Button, Modal, TextInput, View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const FormItem = ({visible, ajouter , fermer}) => {


    const [titre,setTitre] = useState('');
    const [details,setDetails] = useState('');
    const [budget,setBudget] = useState(0);
    

    const addItem = () => {
        ajouter({title: titre, details: details, budget: budget});
        fermer();
    }

    useEffect( () => {
        setTitre('');
        setDetails('');
        setBudget(0);
    },[visible])

    return ( 
        <Modal visible={visible}>
            <View style={styles.container} >
            <Image
                    source={
                        require('./asset/pngegg.png')
                    }
                    style={styles.img}
            />
                <Text style={styles.h2} >Ajouter un élément :</Text>
                <TextInput style={styles.input} placeholder="Titre" onChangeText={(txt) => {setTitre(txt)}} value={titre} />
                <TextInput style={styles.input} placeholder="Détails" onChangeText={(txt) => {setDetails(txt)}} value={details} multiline={true} numberOfLines={3} />
                <TextInput style={styles.input} placeholder="Budget" onChangeText={(txt) => {setBudget(txt)}} value={budget} />


                <View style={styles.btnGrp} >
                    <Button title="Ajouter" onPress={addItem} style={styles.boutonAjouter} />
                    <Button title="Annuler" onPress={fermer} color={'orange'} style={styles.boutonAnnuler}/>
                </View>
            </View>
        </Modal>
     );
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor: '#82e0aa',
        justifyContent:"center",
        alignItems:"center"
    },
    btnGrp : {
        width:'70%',
        flexDirection:'row',
        justifyContent:"space-around"
    },
    img:{
        marginTop:15,
        marginBottom:30,
        width: 120,
        height: 80,
    },
    boutonAjouter: {
        marginBottom:15
    },
    boutonAnnuler: {
        color: 'orange'
    },
    h2: {
        fontSize:22
    },
    input: {
        backgroundColor: '#F1F1F1',
        borderStyle: 'solid',
        borderWidth: 3,
        borderColor: 'darkgrey',
        borderRadius: 10,
        width: '85%',
        marginVertical: 15,
        color: '#111111',
        fontSize: 24,
        textAlign:'center'
    }

})
 
export default FormItem;