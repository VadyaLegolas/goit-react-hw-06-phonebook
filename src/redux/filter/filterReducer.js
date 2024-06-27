import { createReducer } from "@reduxjs/toolkit"
import { filterInitialState } from "./initialState"
import { filterContacts } from "./filterActions"

export const filterReducer = createReducer(filterInitialState, (builder)=>{
    builder.addCase(filterContacts, (_, action) => {
        return action.payload.value
    })
})