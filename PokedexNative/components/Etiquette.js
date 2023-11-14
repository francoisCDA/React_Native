import { StyleSheet, Text, View, FlatList, Image, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { saveDataSpecies } from '../slices/pokeSlice';
import TypeList from './TypeList';

const Etiquette = ({ nom, types, spriteUrl, speciesUrl }) => {

    const dispatch = useDispatch();
    const netscape = useNavigation();

    const { pokedex } = useSelector(state => state.pokemon)

    const [species, setSpecies] = useState({ couleur: 'ligthgrey' });

    useEffect(() => {

        const pokemon = pokedex.find(poke => poke.nom == nom)

        if (pokemon.couleur == null) {
            axios.get(speciesUrl)
                .then(reponse => {
                    let newspecies = {};
                    newspecies.couleur = reponse.data.color.name;
                    const flavTxtDoublons = reponse.data.flavor_text_entries.filter(txt => txt.language.name == 'fr').map(txt => txt.flavor_text);
                    newspecies.flavorTextFr = flavTxtDoublons.filter((txt, i) => flavTxtDoublons.indexOf(txt) == i)
                    newspecies.evolutionChainUrl = reponse.data.evolution_chain.url;

                    setSpecies(newspecies);
                    dispatch(saveDataSpecies({ name: nom, data: newspecies }))
                }).catch(error => console.log(error))
        } else {
            setSpecies({ couleur: pokemon.couleur });
            console.log('pokemon déjà connu');
        }


    }, []);


    const colorTxt = () => {
        if (species.couleur == 'blue') {
            return { color: "#eee" }
        }

        return { color: "#222" }
    }


    return (
        <View style={[styles.container, { backgroundColor: species.couleur }]}>
            <Pressable onPress={() => netscape.navigate('pokemon', nom)} >
                <Text style={[styles.titre, colorTxt()]}>{nom}</Text>
                <View style={styles.containerFlex} >
                    <View>
                        <TypeList types={types} css={styles.types} />
                    </View>
                    <View style={styles.spriteContainer}>
                        <Image
                            source={{ uri: spriteUrl }}
                            style={styles.sprite}
                        />
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

export default Etiquette

const styles = StyleSheet.create({
    container: {
        width: '45%',
        margin: 10,
        padding: 12,
        borderRadius: 15,
        elevation: 8,
        shadowColor: "#000"
    },
    containerFlex: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titre: {
        fontSize: 22,
        fontWeight: '700',
        textTransform: 'capitalize',
        marginBottom: 12,
    },
    spriteContainer: {
        marginTop: 'auto',
    },
    sprite: {
        width: 90,
        height: 90,
        backgroundColor: 'rgba(250,250,250,0.83)',
        borderRadius: 20,
    },
    types: {
        padding: 5,
        fontSize: 14,
        width: 60
    }
})