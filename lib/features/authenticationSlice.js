'use client'

import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    userName: '',
    jwtToken: '',
    STSID: ''
};

export const registerSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        setUserData(state, action) {
            state.userName = action.payload.userName;
            state.jwtToken = action.payload.jwtToken;
            state.STSID = action.payload.STSID;
        },
        setUserName(state, action) {
            state.userName = action.payload;
        },
        setJWTToken(state, action) {
            state.jwtToken = action.payload;
        },
        setSTSID(state, action) {
            state.STSID = action.payload;
        },
        removeUserData(state, action){
            state.userName = '';
            state.jwtToken = '';
            state.STSID = '';
        }
    }
});

export const {setUserData, setUserName, setJWTToken, setSTSID, removeUserData} = registerSlice.actions;
export default registerSlice.reducer;