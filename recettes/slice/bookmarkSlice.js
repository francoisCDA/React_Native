import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveFavoris = createAsyncThunk(
    'bookmark/saveFavoris',
    async (lstFavoris) => {
        try {
            await AsyncStorage.setItem('recettesFavorites',JSON.stringify(lstFavoris))
            return lstFavoris;
        } catch (error) {
            console.error(error);
        }
    }
)

export const getFavoris = createAsyncThunk(
    'bookmark/getFavoris',
    async () => {
        try {
            const favoris = await AsyncStorage.getItem('recettesFavorites')
            if (favoris != null) {
                return JSON.parse(favoris);
            } else {
                return []
            }
        } catch (error) {
            console.error(error);
        }
    }
)


const bookmarkSlice = createSlice({
    name: 'bookmark',
    initialState: {
        lstPreference: []
    },
    reducers: {
        add: (state,action) => {
            state.lstPreference.push(action.payload);
        },
        rm: (state,action) => {
            const idx = state.lstPreference.indexOf(action.payload);
            state.lstPreference.splice(idx,1);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(saveFavoris.fulfilled, (state,action) => {
            console.log(action.payload)
        })
        builder.addCase(getFavoris.fulfilled, (state,action) => {
            state.lstPreference = action.payload
        })
    }
})


export const {add, rm} = bookmarkSlice.actions ;

export default bookmarkSlice.reducer;