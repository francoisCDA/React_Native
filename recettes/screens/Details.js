import { StyleSheet, Text, View, Image,FlatList, ScrollView } from 'react-native'
import React from 'react'

import { MEALS } from '../data/data'
import ListElements from '../components/ListElements'



const Details = ({route}) => {

    const plat = MEALS.find( mil => mil.id == route.params)

  return (
    <ScrollView>
        <View style={styles.body}>
        <Image 
            source={
                {uri: plat.imageUrl}
            }
            style={styles.image}
        />
            <View style={styles.bodyContainer}>
                <Text style={styles.titre}>{plat.title}</Text>

                <View style={styles.info}>
                    <Text style={styles.infoTxt}>{plat.duration}m</Text>
                    <Text style={styles.infoTxt}>{plat.complexity.toUpperCase()}</Text>
                    <Text style={styles.infoTxt}>{plat.affordability.toUpperCase()}</Text>
                </View>

               
{/*  structure de donnés correspondant à la SectionList
                <ListElements data={[
                        {title:"Ingredients",data:plat.ingredients},
                        {title:"Etapes",data:plat.steps}
                    ]}  
                    />
 */}

                <ListElements titre="Ingredients" tableau={plat.ingredients} />
                <ListElements titre="Etapes" tableau={plat.steps} />

                <View style={[styles.info,styles.marginBottom15]}>
                    <View style={[styles.logoContainer, plat.isVegan ? styles.elevation : styles.vide ]}>
                        <Image source={require('../components/assets/logo_vegan.png')} style={styles.logo} />   
                        { !plat.isVegan && <View style={styles.shadow} ></View> }
                    </View>
                    <View style={[styles.logoContainer, plat.isVegetarian ? styles.elevation : styles.vide ]}>
                        <Image source={require('../components/assets/logo_vegetarian.png')} style={styles.logo} />
                        { !plat.isVegetarian && <View style={styles.shadow} ></View> }
                    </View>
                    <View style={[styles.logoContainer, plat.isLactoseFree ? styles.elevation : styles.vide ]}>
                        <Image source={require('../components/assets/logo_lactosefree.png')} style={styles.logo} />
                        { !plat.isLactoseFree && <View style={styles.shadow} ></View> }
                    </View>
                </View>
            </View>


           

        </View>
    </ScrollView>
  )
}

export default Details

const styles = StyleSheet.create({
    body: {
        flex:1,
        backgroundColor:'#f1f1f1',
        alignItems:'center',
    },
    image: {
        width :'100%',
        aspectRatio: 1,

    },
    bodyContainer :{
        width: '80%',
        alignItems:'center',
    },
    titre: {
        textAlign: 'center',
        fontSize:28,
        fontWeight:'800',
        color:'#111111',
        marginBottom:18,
    },
    info: {
        flexDirection:"row",
        justifyContent:'center',
    },
    marginBottom15: {
        marginBottom:15,
    },
    infoTxt: {
        color:'#111111',
        marginHorizontal:5,
        marginBottom: 18,
    },
    logo: {
        width:56,
        height:56,
        
        marginBottom:16,
    },
    logoContainer:{
        position:'relative', // pas claire, c'est dans la doc, mais ça semble inutile...
        marginHorizontal:8,
    },
    shadow: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.6)',
        width:56,
        height:56,
        //left:8,
        borderRadius:100,
    },
    elevation: {
        width:56,
        aspectRatio:1,
        borderRadius:100,
        elevation: 10,
        shadowColor:'#000',
    },
    vide: {
        // pour le ternaire
    }

})