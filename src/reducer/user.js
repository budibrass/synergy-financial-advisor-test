import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk('/', async(arg, {}) => {
    const data = await fetch('https://interview-test-mock-api.azurewebsites.net/clients');
    return await data.json();
})

const user = createSlice({
    name: 'user',
    initialState: {
        value: 0,
        data: [],
        isLoading: false,
        isError: null
    },
    // extraReducers: {
    //     [getData.fulfilled]: (state, action) => {
    //         state.data = action.payload
    //     }
    // }
    extraReducers: builder => {
        builder.addCase(getData.pending, (state) => {
            state.isLoading = true
        }),
        builder.addCase(getData.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.data = payload
        }),
        builder.addCase(getData.rejected, (state, {payload}) => {
            console.log(getData, `<<<< getData`);
            state.isLoading = false
            state.isError = payload
        })
    }
});

export default user.reducer;
