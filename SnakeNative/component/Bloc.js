import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Bloc = ({cell,i,j}) => {

     //   console.log(i,' ',j,' => ',cell);

    let typeDeBloc ;

    switch (cell) {
        case 1:
            typeDeBloc = StyleSheet.create( { blocType : { backgroundColor: 'blue'}})
            break;
        case 2:
            typeDeBloc = StyleSheet.create( { blocType : { backgroundColor: 'red'}})
            break;            
        default:
            typeDeBloc = StyleSheet.create( {blocType : { display: 'none'}})
            break;
    }        

  return (
    <View style={[styles.containerBLoc]} >
      <View style={[styles.bloc, typeDeBloc.blocType]}></View>
    </View>
  )
}

export default Bloc

const styles = StyleSheet.create({
    containerBLoc :{
        width: 18,
        aspectRatio:1,
    },
    bloc: {
        width:'100%',
        aspectRatio:1,
    }
})