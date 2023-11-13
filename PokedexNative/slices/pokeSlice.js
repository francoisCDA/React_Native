import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";



function pokeExtractData(dataBrut) {

    const newPoke = {};

    newPoke.id = dataBrut.id
    newPoke.nom = dataBrut.name;
    newPoke.image = dataBrut.sprites.front_default;
    newPoke.height = dataBrut.height;
    newPoke.weight = dataBrut.weight;
    newPoke.xp = dataBrut.base_experience;
    newPoke.abilities = dataBrut.abilities.map( a => a.ability.name);
    newPoke.types = dataBrut.types.map( t => t.type.name);
    newPoke.moves = dataBrut.moves.map( m => m.move.name);
    newPoke.speciesUrl = dataBrut.species.url;

    return newPoke;
}


export const axiosGetPokemonByUrl = createAsyncThunk(
    'pokemon/axiosGetPokemonByUrl',
    async(url) => {
        try {
            const reponse = await axios.get(url);
            return reponse.data;
        } catch (error) {
            console.error(error);
        }
    }
)





const pokeSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokedex: [],
        pokeball: [],
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(axiosGetPokemonByUrl.fulfilled, (state,action) => {
            const pokeData = pokeExtractData(action.payload);
            console.log(pokeData);
            state.pokedex.push(pokeData);
        })
    }
})



export default pokeSlice.reducer