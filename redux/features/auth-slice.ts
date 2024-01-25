import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {v4} from "uuid"
type AuthState={
    auth: boolean
    userName: string
    uid: string
    isModerator: boolean
}
type InitialState={
    value: AuthState
}
const initialState:InitialState = {
    value: {
        auth: false,
        userName: "",
        uid: "",
        isModerator: false
    }
}
export const authSlice=createSlice({
    name: "auth",
    initialState,
    reducers: {
        onLogout: ()=>{
            return initialState
        },
        onLogIn: (state,action:PayloadAction<string>)=>{
            return {
                value: {
                    auth: true,
                    userName: action.payload,
                    uid: v4(),
                    isModerator: action.payload === 'MukulPhougat'
                }
            }
        }
    }
})
export const {onLogIn,onLogout}=authSlice.actions
export default authSlice.reducer