import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from './store';

export interface DailyWeather {
    data: {};
    status: string;
    forecast_array: [];
}

type Params = {
    cityName: string;
    daysCount: string;
};

export const fetchDailyWeather = createAsyncThunk(
    'dailyWeather/fetchDailyWeather',
    async (params: Params) => {
        const { cityName, daysCount } = params;
        const { data } = await axios.get(
            `https://api.weatherapi.com/v1/forecast.json?key=185560efff444f0a86d180312231511&q=${cityName}&days=${daysCount}&lang=ru`,
        );
        return data;
    },
);

const initialState: DailyWeather = {
    data: {},
    status: 'loading',
    forecast_array: [],
};

export const dailyWeatherSlice = createSlice({
    name: 'dailyWeather',
    initialState,
    reducers: {
        setDailyWeather(state, action) {
            state.data = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchDailyWeather.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchDailyWeather.fulfilled, (state, action) => {
            state.status = 'success';
            state.data = action.payload;
            state.forecast_array = action.payload.forecast.forecastday;
        });
        builder.addCase(fetchDailyWeather.rejected, (state) => {
            state.status = 'error';
        });
    },
});

export const { setDailyWeather } = dailyWeatherSlice.actions;
export const getData = (state: RootState) => state.dailyWeather.data;

export default dailyWeatherSlice.reducer;
