import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Formulaire = () => {

  const [titre,setTitre] = useState('');
  const [details,setDetails] = useState('');
  const [budget,setBudget] = useState('');

  return (
    <View>
      <View>
        <TextInput placeholder='Titre' onChangeText={(txt) => {setTitre(txt)}} value={titre} />
        <TextInput style={styles.input} placeholder="Détails" onChangeText={(txt) => {setDetails(txt)}} value={details} multiline={true} numberOfLines={3} />
        <TextInput style={styles.input} placeholder="Budget" onChangeText={(txt) => {setBudget(txt)}} value={budget} />
      </View>
      <View>
        <Button />
      </View>
    </View>
  )
}

export default Formulaire

const styles = StyleSheet.create({})