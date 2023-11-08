import { FlatList, StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const contacts = [
    {last: "Gates", first:"Bill", phone: "555-3452233"},
    {last: "Ballmer", first:"Steeve", phone: "555-3434553"},
    {last: "Musk", first:"Elon", phone: "555-Xc'TY6#"}
]


const Home = ({navigation}) => {
  return (
    <View>
        <Text style={styles.titre}>Mes contacts :</Text>
        <FlatList data={contacts} renderItem={ (contact) => {
            return (
                <View style={styles.contact}>
                    <Button title={`${contact.item.first}`} onPress={ () => navigation.navigate('Details', contact.item)} />
                </View>
            )
            
        }} keyExtractor={(item,index) => {
            return index
        }} 
        />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    titre : {
        fontSize: 25,
        marginBottom: '5%',
    },
    contact : {
        marginVertical:10,
        marginStart:'10%',
        marginEnd:'10%',

    }
})