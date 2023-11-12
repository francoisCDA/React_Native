import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ListElements = ({titre, tableau}) => {

    
  // La SectionList fonctionnne mais comme pour les FlatList => VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.  
  
  /* return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.titre}>{data.title}</Text>
        </View>
        <SectionList 
            sections={data}
            renderItem={ ({item}) => {
                return (
                    <View>
                        <Text>{item}</Text>
                    </View>
                )
            }}
            renderSectionHeader={ ({section: {title}}) => {
                return (
                    <Text>{title}</Text>
                )
            }}
            keyExtractor={ (item,index) => item + index }
        />
    </View>
  ) */

    
  
  // il semblerait que le seul moyen de rendre correctement ces éléments dans une ScrollView est d'utiliser un map...

  return  (

    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.titre}>{titre}</Text>
        </View>
        {
            tableau.map( (itm,idx) => <Text key={idx} style={styles.item} >{itm}</Text>)
        }
    </View>


  )


}


const styles = StyleSheet.create({
    container : {
        width:'100%',
        marginBottom:16,
    },
    header :{
        borderBottomWidth:3,
        borderBottomColor:'darksalmon',
        width:'100%',
        alignItems:'center',
        marginBottom:12,
    },
    titre: {
        fontSize:22,
        fontWeight:"800",
        color: 'darksalmon',
        marginBottom:12,
        textShadowColor:"rgba(0,0,0,0.2)",
        textShadowOffset: {width:1,height:1},
        textShadowRadius: 5,
    },
    item: {
        backgroundColor: 'darksalmon',
        marginBottom:12,
        textAlign:'center',
        padding:8,
        borderRadius:8,
        fontSize:16,
        fontWeight:'600',
        elevation: 4,
        shadowColor: "#000",
    }
})

export default ListElements