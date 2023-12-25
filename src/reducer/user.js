import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getData = createAsyncThunk('/', async(arg, {}) => {
    const data = await fetch('https://interview-test-mock-api.azurewebsites.net/clients');
    return await data.json();
});

export const getDataDetailProfile = createAsyncThunk('/detail', async(arg, {}) => {
    const dataDetail = await fetch('https://interview-test-mock-api.azurewebsites.net/profile');
    return await dataDetail.json();
});

const user = createSlice({
    name: 'user',
    initialState: {
        value: 0,
        data: [],
        dataDetail: [],
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
            state.isLoading = false
            state.isError = payload
        }),
        builder.addCase(getDataDetailProfile.pending, (state) => {
            state.isLoading = true
        }),
        builder.addCase(getDataDetailProfile.fulfilled, (state, {payload}) => {
            state.isLoading = false
            state.dataDetail = payload
        }),
        builder.addCase(getDataDetailProfile.rejected, (state, {payload}) => {
            state.isLoading = false
            state.isError = payload
        })
    }
});

export default user.reducer;
