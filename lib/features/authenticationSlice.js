// Function to initialize state with data from local storage if available
const getInitialState = () => {
    // if (typeof window !== "undefined") {
    //     const storedUserData = localStorage.getItem("userData");
    //     if (storedUserData) {
    //         return JSON.parse(storedUserData);
    //     }
    // }
    return {
        userName: "",
        jwtToken: "",
        STSID: "",
        isAdmin: false,
        isEmployee: false,
    };
};

import { createSlice } from "@reduxjs/toolkit";

const initialState = getInitialState();

export const registerSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        setUserData(state, action) {
            console.log("setUserData reducer called with payload:", action.payload);
            state.userName = action.payload.userName;
            state.jwtToken = action.payload.jwtToken;
            state.STSID = action.payload.STSID;
            state.isAdmin = action.payload.userName === 'admin';
            state.isEmployee = action.payload.userName !== 'admin';
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
        removeUserData(state, action) {
            state.userName = '';
            state.jwtToken = '';
            state.STSID = '';
            state.isAdmin = false;
            state.isEmployee = false;
        }
    }
});

export const { setUserData, setUserName, setJWTToken, setSTSID, removeUserData } = registerSlice.actions;
export default registerSlice.reducer;
