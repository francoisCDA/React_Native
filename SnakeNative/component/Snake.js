import { StyleSheet, View, Text, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch }  from 'react-redux'
import Ligne from './Ligne'
import { init, start, stop, move, test, queue, turnGauche, turnDroite } from '../redux/SnakeSlice'

import { hauteur, largeur } from '../redux/SnakeSlice'

const Snake = () => {

    const [ticTac,setTicTac] = useState(false)

    const {canvas, gameStart, player, snake  } = useSelector( state => state.snake )
    const reducers = useDispatch()

    const testLocal = () => {
        if (player.x < 0 || player.x > hauteur - 1 || player.y < 0 || player.y > largeur -1 ) {
            console.log('fail bordure local');
            reducers(stop());
           return  false;
        } else if (canvas[player.x][player.y] == 1 ) {
           console.log('fail se mord la queue ')
           reducers(stop());
            return false;
        }

        return true ;
    }

    useEffect ( () => {
        if (gameStart && testLocal() ) {
            setTimeout(() => {
                reducers(move());
                reducers(test());
                reducers(queue());
                setTicTac(tic => !tic);
            }, 100);
        }
    },[ticTac])


    const startPressed = () => {
        reducers(init());
        reducers(start());
        reducers(move());
        setTicTac(tic => !tic);
    }

  return (
    <View style={styles.mainContainer}>
        <View style={styles.gameBorder}>
            { canvas.map( (ligne,i) => <Ligne key={i} ligne={ligne} i={i}  /> ) }
        </View>

        <View style={styles.controller}>
            {
                gameStart ?
                <View style={styles.btnController}>
                    <Pressable onPress={() => reducers(turnGauche())} style={ ({pressed}) => pressed && { backgroundColor : 'rgba(220,200,200,0.6)', borderRadius:50} }>
                        <Text style={styles.btn}>&lt;</Text>
                    </Pressable>
                        <Text style={styles.titre}>Snake</Text>
                    <Pressable onPress={() => reducers(turnDroite())} style={ ({pressed}) => pressed && { backgroundColor : 'rgba(220,200,200,0.6)', borderRadius:50} }>
                        <Text style={styles.btn}>&gt;</Text>
                    </Pressable>
                </View>
                :
                <Pressable onPress={startPressed} style={ ({pressed}) => pressed && { borderColor : '#999999', borderWidth:10} }  >
                    <View style={styles.startContainer}>
                        <Text style={styles.start}>Press Start</Text>
                    </View>
                </Pressable>
            }
        </View>
    </View>
  )
}

export default Snake

const styles = StyleSheet.create({
    mainContainer: {
        alignItems:'center',
        marginTop:10,
    },
    gameBorder: {
        borderColor:'red',
        borderWidth:14,
        borderRadius:10,
        backgroundColor: '#BDD8E0'
    },
    controller : {
        marginTop:15,
        width:'90%',
        aspectRatio:2,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'orange',
        borderRadius:15,
        elevation:5,
        shadowColor:'#000',
    },
    startContainer: {
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignItems:'center',
    },
    start: {
        fontFamily: 'PressStart2P-Regular',
        fontSize:36,
        textAlign:'center',
        color:'#444444'
    },
    btnController: {
        width:'100%',
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    btn: {
        fontFamily: 'PressStart2P-Regular',
        fontSize:85,
        borderRadius:100,
        marginHorizontal:15,
        backgroundColor:'green',
        paddingTop:40,
        color:"#11dd11"
    },
    titre: {
        fontFamily: 'PressStart2P-Regular',
        fontSize:25,
    }
})