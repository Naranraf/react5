import { createSlice } from '@reduxjs/toolkit';
import { Navigate } from 'react-router-dom';

export const usernameSlice = createSlice({
    name: 'username',
    initialState: "",
    reducers: {
        changeName: (state, action) => {
            return "Diego";
        },
        changeNameValue: (state, action) => {
            return action.payload;
        }
    }
});

export const { changeName, changeNameValue } = usernameSlice.actions;

export const checkAccess = () => (dispatch, getState) => {
    const username = getState().username;

    if (username === "") {
        alert("No puedes acceder sin un nombre de usuario");
    } else {
        navigate('Pokedex'); // Reemplaza 'Pokedex' con la pantalla de destino correcta
    }
};

export default usernameSlice.reducer;
