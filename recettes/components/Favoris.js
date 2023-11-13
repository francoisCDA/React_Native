import { Pressable, StyleSheet, Image} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'


const Favoris = () => {

    const favoris = useSelector(state => state.bookmark.lstPreference )

    const netscape = useNavigation();

  return (
    <>
        { 
            (favoris.length > 0) &&
            <Pressable onPress={() => netscape.navigate('favoris',{categorie:null,favoris:favoris}) } >
                <Image 
                    source={ require('./assets/starFill.png')}
                    style={styles.etoile}
                />
            </Pressable>
        }
    </>
  )
}

export default Favoris

const styles = StyleSheet.create({  etoile: {
    width:26,
    height:26,
    
}})