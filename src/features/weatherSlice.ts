import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IWeatherInfo } from "../types/interfaces";
import toast from "react-hot-toast";

interface AppState {
    loading: boolean
    weather: IWeatherInfo
}

const initialState: AppState = {
    loading: false,
    weather: {} as IWeatherInfo,
}

export const getWeather = createAsyncThunk(
    'Weather/getWeather', async (data: {lat : string, lon: string}) => {
        const apiKey = sessionStorage.getItem('apiKey')
        return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=${apiKey}&units=metric`)
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
        builder.addCase(getWeather.pending, (state: AppState) => {
            state.loading = true;
        })
        builder.addCase(getWeather.fulfilled, (state: AppState, action: PayloadAction<IWeatherInfo>) => {
            state.loading = false;
            state.weather = action.payload
        })
        builder.addCase(getWeather.rejected, (state: AppState,action: PayloadAction<IWeatherInfo>) => {
            state.loading = false;
            toast.error('An error occurred while fetching the data')
            state.weather = {} as IWeatherInfo;
        })
    },
})

// export const { addNewProduct } = weatherSlice.actions

export default weatherSlice.reducer