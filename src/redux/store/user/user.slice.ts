import {createSlice} from "@reduxjs/toolkit";
export interface UserState {
    is_auth:boolean,
    id: number | null,
    login:string | null
    first_name: string | null,
    last_name: string | null,
    email: string | null,
    auth_token: string | null,
    phone_number: string | null
}

const initialState:UserState = {
    is_auth:false,
    id: null,
    login:null,
    first_name: null,
    last_name: null,
    email: null,
    auth_token: null,
    phone_number: null
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        setUserData: (state,{payload}) => {
            state.is_auth = true
            state.login = payload.login
        }
    }
})

export const {actions,reducer} = userSlice