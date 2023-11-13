import { StyleSheet, View, ScrollView } from 'react-native'
import React, { useEffect } from 'react'

import Etiquette from '../components/Etiquette'
import { CATEGORIES } from '../data/data'
import { useDispatch } from 'react-redux'
import { getFavoris } from '../slice/bookmarkSlice'

const Accueil = () => {

    const dispatch = useDispatch();


    useEffect( () => {
        dispatch(getFavoris())
    },[])


  return (
    <ScrollView>
        <View style={styles.grp}>
            <Etiquette cat={CATEGORIES[0]} />
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
            <Etiquette cat={CATEGORIES[9]}/>
        </View>

    </ScrollView>
  )
}

export default Accueil

const styles = StyleSheet.create({
    grp : {
        flexDirection:'row',
        justifyContent:'space-around',
        marginVertical: 15,
    }
})