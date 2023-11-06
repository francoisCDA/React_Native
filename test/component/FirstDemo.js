import { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View, TextInput } from "react-native";


export default function FirstDemo() {

    const [textInput,setTextInput] = useState('')

    function RecupInput(newText) {
        setTextInput(newTextdz)
        console.log(newText)
    }

    return (
        <SafeAreaView style={styles.arPlan}>
            <View style={styles.fond}>
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
    fond: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    arPlan: {
        backgroundColor:"yellow",
        height: '100%'
    },
    img: {
        marginBottom:30
    },
    input: {
        backgroundColor: 'black',
        color: 'white',
        textAlign: 'center',
        width:'80%',
        marginTop:30

    }


})