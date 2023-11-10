import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Etiquette from '../components/Etiquette'

import { CATEGORIES } from '../data/data'


const Home = ({navigation}) => {

  return (
    <View >
    <View style={styles.grp}>
        <Etiquette cat={CATEGORIES[0]}/>
        <Etiquette cat={CATEGORIES[1]}/>
    </View>
    <View style={styles.grp}>
        <Etiquette cat={CATEGORIES[2]} />
        <Etiquette cat={CATEGORIES[3]}/>
    </View>
    <View style={styles.grp}>
        <Etiquette cat={CATEGORIES[4]} />
        <Etiquette cat={CATEGORIES[5]}/>
    </View>
    <View style={styles.grp}>
        <Etiquette cat={CATEGORIES[6]} />
        <Etiquette cat={CATEGORIES[7]}/>
    </View>
    <View style={styles.grp}>
        <Etiquette cat={CATEGORIES[8]} />
        <Etiquette cat={CATEGORIES[10]}/>
    </View>

</View>
  )
}

export default Home

const styles = StyleSheet.create({
    grp :{
        flexDirection:'row',
    }
})

