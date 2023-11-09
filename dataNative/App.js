import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'


const App = () => {
    const [data,setdata] = useState({nom:"",prenom:""});
    
    const addData = async () => {
        try {
            await AsyncStorage.setItem('keyPrenom',JSON.stringify({nom:"Doe",prenom:"John"}))
        } catch (error) {
            console.error(error);
        }

    }

    const getData = async () => {
        try {
            let data = await AsyncStorage.getItem('keyPrenom')
            if (data !== null) {
                data = JSON.parse(data);
                setdata(data)
            }
        } catch (error) {
            console.error(error)
        }
    }

    const deleteData = async () => {
        try {
            await AsyncStorage.removeItem('keyPrenom')
            setdata({nom:"",prenom:""})
        } catch (error) {
            console.error();
        }
    }

    useEffect( ()=> {
        getData()
    },[])
    
    return (
        <View>
        <Text>prenom : {data.prenom}, nom : {data.nom}</Text>

        <View>
            <Button title='add' onPress={addData} />
            <Button title='get' onPress={getData} />
            <Button title='del' onPress={deleteData}/>
        </View>

        </View>
    )
}

export default App