import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

//Get user from Localstorage
const user = JSON.parse(localStorage.getItem('user'))

const intialState = {
    user : user ? user : null,
    isError : false,
    isSuccess : false,
    isLoading : false,
    message :''
}

//Register User
export const register = createAsyncThunk('auth/register', async(user,thunkAPI) => {
    try {
        return await authService.register(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const authSlice = createSlice({
    name : 'auth',
    intialState,
    reducers:{
        reset : (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state,action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(register.rejected, (state,action) => {
                state.isLoading = false 
                state.isError = true
                state.message = false
                action.isError = true
            })
    }
})

export const {reset} = authSlice.actions

export default authSlice.reducer

