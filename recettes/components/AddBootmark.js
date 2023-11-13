import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRoute } from '@react-navigation/native'
import { add, rm, saveFavoris } from '../slice/bookmarkSlice'



const AddBootmark = () => {

    const route = useRoute();
    const dispatch = useDispatch();

    const bookmarked = useSelector( state => state.bookmark.lstPreference )

    const toogleRecette = () => {
        if (bookmarked.includes(route.params)) {
            dispatch(rm(route.params))
            dispatch(saveFavoris(bookmarked.filter( mil => mil != route.params)))
        } else {
            dispatch(add(route.params))
            dispatch(saveFavoris([...bookmarked,route.params]))
        }
    }


  return (
    <View>
        <Pressable onPress={toogleRecette}>
            {
                bookmarked.includes(route.params) ?
                    <Image 
                        source={ require('./assets/starFill.png')}
                        style={styles.etoile}
                    />
                :
                    <Image 
                        source={ require('./assets/starVide.png')}
                        style={styles.etoile}
                    />
            }
        </Pressable>

    </View>
  )
}

export default AddBootmark

const styles = StyleSheet.create({
    etoile: {
        width:22,
        height:22,
        
    }
})

