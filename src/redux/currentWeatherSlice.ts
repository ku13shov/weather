import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from './store';

export interface CurrentWeather {
    data: any;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity:number;
    wind_speed: number;
    wind_deg: number;
    status: string;
}

export const fetchCurrenthWeather = createAsyncThunk(
    'currentWeather/fetchCurrenthWeather',
    async (city: string) => {
        const { data } = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=456beb8f2f494aa2e14e7e28c4fcbd9d`,
        );

        console.log(data);

        return data;
    },
);

const initialState: CurrentWeather = {
    data: '',
    temp: 0,
    feels_like: 0,
    pressure: 0,
    humidity: 0,
    wind_speed: 0,
    wind_deg: 0,
    status: 'loading',
};

export const currentWeatherSlice = createSlice({
    name: 'currentWeather',
    initialState,
    reducers: {
        setCurrentWeather(state, action) {
            state.data = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchCurrenthWeather.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchCurrenthWeather.fulfilled, (state, action) => {
            state.status = 'success';
            state.temp = action.payload.main.temp;
            state.feels_like = action.payload.main.feels_like;
            state.pressure = action.payload.main.pressure;
            state.humidity = action.payload.main.humidity;
            state.wind_speed = action.payload.wind.speed;
            state.wind_deg = action.payload.wind.deg;
        });
        builder.addCase(fetchCurrenthWeather.rejected, (state) => {
            state.status = 'error';
        });
    },
});

export const { setCurrentWeather } = currentWeatherSlice.actions;
export const getData = (state: RootState) => state.currentWeather.data;

export default currentWeatherSlice.reducer;
