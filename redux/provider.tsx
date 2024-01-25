"use client"
import {Provider} from "react-redux";
import {store} from "./store"
import React from "react";
export const ReduxProvider=({Children}:{Children: React.ReactNode})=>{
    return (
        <Provider store={store}>
            {Children}
        </Provider>
    )
}