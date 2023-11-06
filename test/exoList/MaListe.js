import { useState } from "react";
import { Button, FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import FormItem from "./FormItem";


const MaListe = () => {

    const [modal,setModal] = useState(false);

    const [list,setList] = useState([]);

    function rm(el) {
        let listCp = [...list];
        listCp = listCp.filter( l => l !=el )
        setList(listCp);
    }

    
    return ( 
        <View >

            <FormItem visible={modal} ajouter={(item) => setList([...list,item])} fermer={() => setModal(false)} />
        
            <Button title="Ajouter un élément" onPress={() => setModal(true)}  />

            <View style={styles.flatList}>

                <FlatList  data={list} renderItem={(courses) => {
                    return (
                        <View>
                            <Text style={styles.itemList}  onPress={ () => rm(courses.item)}  >{courses.item}</Text>
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
        flatList: {
            display:'flex',
            flexDirection:'column',
            //alignItems: 'center'
        },
        itemList : {
            width:"85%",
            marginLeft:'5%',
            marginVertical:5,
            backgroundColor:'rgba(125,12,268,0.5)',
            padding:12,
            borderRadius: 15,
            fontSize:18,
            fontWeight: "700"
        }
     })

 
export default MaListe;