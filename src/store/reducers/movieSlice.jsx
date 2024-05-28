import { createSlice } from '@reduxjs/toolkit'
import { info } from 'autoprefixer'

const initialState = {
  info: null , 
}


export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {

        loadmovie: (state, action) => {
            state.info = action.payload;
        },
        removemovie: (state, action) => {
            state.info = null;
        },


    },
  });
  
  
  export const { loadmovie , removemovie } = movieSlice.actions
  
  export default movieSlice.reducer