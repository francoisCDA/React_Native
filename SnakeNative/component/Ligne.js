import { StyleSheet, View } from 'react-native'
import React from 'react'
import Bloc from './Bloc'


const Ligne = ({ligne, i}) => {
    
   

    return (
        <View style={styles.ligneContainer}>
                { ligne.map( (cell,j) => <Bloc key={j} cell={cell} i={i} j={j} /> ) }
        </View>
    )
}

export default Ligne

const styles = StyleSheet.create({
    ligneContainer: {
        flexDirection:'row',
    }
})