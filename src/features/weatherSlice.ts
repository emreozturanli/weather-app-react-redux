import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
    loading: boolean
}

const initialState: ProductState = {
    loading: false,
}

export const getWeather = createAsyncThunk(
    'Weather/getWeather', async () => {
        return fetch(``)
            .then(res => {
                return res.json()
            })
    }
)

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        // addNewProduct : (state,action : PayloadAction<INewProduct>)=> {state.newProducts = [...state.newProducts, action.payload]}
    },
    extraReducers(builder: any) {
        // //GET
        // builder.addCase(getProducts.pending, (state: ProductState) => {
        //     state.loading = true;
        // })
        // builder.addCase(getProducts.fulfilled, (state: ProductState, action: PayloadAction<IProducts>) => {
        //     state.loading = false;
        //     state.products = action.payload.products

        // })
        // builder.addCase(getProducts.rejected, (state: ProductState) => {
        //     state.loading = false;
        //     state.products = [];
        // })
    },
})

// export const { addNewProduct } = weatherSlice.actions

export default weatherSlice.reducer