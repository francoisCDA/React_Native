import { useEffect, useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import FormItem from "./FormItem";


const MaListe = () => {

    const [modal,setModal] = useState(false);

    const [list,setList] = useState([]);

    const [detail,setDetail] = useState(-1);

    function rm(el) {
        let listCp = [...list];
        listCp.splice(el,1);
        setList(listCp);
    }

    useEffect(()=> {
        console.log(list)
    }, [list])

    
    return ( 
        <View style={styles.container} >

            <FormItem visible={modal} ajouter={(item) => setList([...list,item])} fermer={() => setModal(false)} />

            <DetailsItem data={details} />
        
            <Button title="Ajouter un élément" onPress={() => setModal(true)}  />

            <View style={styles.flatList}>

                <FlatList  data={list} renderItem={(courses) => {
                    return (
                        <View>
                            <Text style={styles.itemList}  onPress={() => setDetail(courses.index)}  >{courses.item.title}</Text>
                        </View>
                    )
                }} keyExtractor={(item,index) => {
                    return index
                }}
            
                />
            </View>
        </View>
     );
    }


    const styles = StyleSheet.create({
        container: {
            flex:1 //aucun effet
        },
        flatList: {
            flex:1, //mieux
            width:'100%',
            //flexWrap:"wrap",
            //alignItems: 'center',
            backgroundColor: '#fcf3cf'
        },
        itemList : {
            width:"80%",
            marginLeft:'10%',
            marginVertical:5,
            backgroundColor:'rgba(125,12,268,0.5)',
            padding:12,
            borderRadius: 15,
            fontSize:18,
            fontWeight: "700"
        }
     })

 
export default MaListe;