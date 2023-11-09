import { View, Text, Button } from 'react-native'
import React, {useState, useEffect} from 'react'
import Geolocation from '@react-native-community/geolocation'
import axios from 'axios'

const AppGPS = () => {

    const [latitude,setLatitude] = useState(null);
    const [longitude,setLongitude] = useState(null);

    const [data,setData] = useState()
    const [pays,setPays] = useState(null);
    const [localisation,setLocalisation] = useState(null);
    

    const getPosition = () => {
        Geolocation.getCurrentPosition(postion => {
            setLatitude(postion.coords.latitude)
            setLongitude(postion.coords.longitude)
        },
         error => console.error(error),
         {
            timeout: 20000,
            maximumAge: 1000,
            enableHighAccuracy: true,
        }
        )
    }

    /// http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=LpgEQcPXeClTSFUPDlmG3efOfTkbwI8w&q=38.9%2C125.74&language=fr-FR

    const getDataPosition = async () => {
        try {
            const dataLocation = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=LpgEQcPXeClTSFUPDlmG3efOfTkbwI8w&q=${latitude}%2C${longitude}&language=fr-FR`)
            if (dataLocation !== null) {
               setData(dataLocation.data.Country)
               setPays(dataLocation.data.Country.LocalizedName)
               setLocalisation(dataLocation.data.AdministrativeArea.LocalizedName)
            }

        } catch (error) {
            console.error(error);
        }

    }

    useEffect( () => {
        Geolocation.requestAuthorization();
        getPosition();
    },[])


  return (
    <View>
      <Text>AppGPS</Text>
      <Text>Latitude : {latitude} </Text>
      <Text>Longitude : {longitude} </Text>

      <View>
        <Button title="update location" onPress={getPosition} />
      </View>
      <View>
        <Button title="Où suis-je ?" onPress={getDataPosition} />
      </View>

      <Text>Pays : {pays} </Text>
      <Text>Localisation : {localisation} </Text>

      <View>
        <Button title="Console log" onPress={()=> console.log(data)} />
      </View>
    </View>
  )
}

export default AppGPS