import {createSlice} from "@reduxjs/toolkit";
export interface UserState {
    is_auth:boolean,

}

const initialState:UserState = {
    is_auth:false,
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        setLogin: (state,{payload}) => {
            state.is_auth = payload
        },
    }
})

export const {actions,reducer} = userSlice