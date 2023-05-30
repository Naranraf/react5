import { createSlice } from '@reduxjs/toolkit';

export const username = createSlice({
    name: 'username',
    initialState: "Usuario",
    reducers: {
        changeName: state => {
            return {
                
            }

        }


    }
})

export const { changeName} = username.actions;

export default username.reducer;
