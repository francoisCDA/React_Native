import { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View, TextInput, Button, FlatList } from "react-native";
import MaModal from "./MaModal";


export default function FirstDemo() {

    const [textInput,setTextInput] = useState('')
    const [modal,setModal] = useState(false);

    function RecupInput(newText) {
        setTextInput(newText)
        console.log(newText)
    }

    function messageConsole() {
        console.log('hello console')
        setTextInput("HELLO BOUTON")
    }

    const tab = [
        { text: "toto", id:1},
        { text: "tutu", id:2},
        { text: "titi", id:3},
        { text: "tata", id:75}
    ]


    return (
        <SafeAreaView style={styles.arPlan}>
            <View style={styles.fond}>
                <MaModal bool={modal} callBack={() => setModal(false)} />
                <Image
                    width={50}
                    height={50}
                    source={
                        {uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/langfr-220px-React-icon.svg.png'}
                    }
                    style={styles.img}
                 />
                <Text style={styles.text}>Hello React Native !</Text>
                <Text>Hello React Native !</Text>
                <Text>Hello React Native !</Text>
                <TextInput onChangeText={RecupInput} value={textInput} style={styles.input} />
                <Button title="Bouton" onPress={messageConsole} style={styles.button} />
                <Button title="Modal" onPress={() => setModal(true)} style={styles.button} />

                <FlatList data={tab} renderItem={(itemData) => {
                    return (
                        <View>
                            <Text style={styles.textGras}>{itemData.item.text} {itemData.item.id}</Text>
                        </View>
                    )

                }} keyExtractor={(item,index) => {
                    return index
                }}
                
                
                
                />
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: 'blue',
        fontSize: 30
    },
    textGras: {
        fontWeight: "900",
        fontSize: 25
    },
    fond: {
        display: 'flex',
        height: '90%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        marginVertical:'10%'
    },
    arPlan: {
        backgroundColor:"yellow",
        height: '100%'
    },
    img: {
        marginTop:15,
        marginBottom:30
    },
    input: {
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        width:'80%',
        marginTop:30,
        marginBottom:30
    },
    button: {
        marginBottom: 30
    }

})