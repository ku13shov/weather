import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from './store';

export interface CurrentWeather {
    data: any;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    wind_speed: number;
    wind_deg: number;
    current_time: number;
    icon: string;
    status: string;
}

export const fetchCurrenthWeather = createAsyncThunk(
    'currentWeather/fetchCurrenthWeather',
    async (city: string) => {
        const { data } = await axios.get(
            `https://api.weatherapi.com/v1/current.json?key=f01b2211beed42a397d175217231608&q=${city}`,
        );
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
    current_time: 0,
    icon: '',
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
            state.data = action.payload;
            state.temp = action.payload.current.temp_c;
            state.feels_like = action.payload.current.feelslike_c;
            state.pressure = action.payload.current.pressure_mb;
            state.humidity = action.payload.current.humidity;
            state.wind_speed = action.payload.current.wind_kph;
            state.wind_deg = action.payload.current.wind_degree;
            state.icon = action.payload.current.condition.icon;
        });
        builder.addCase(fetchCurrenthWeather.rejected, (state) => {
            state.status = 'error';
        });
    },
});

export const { setCurrentWeather } = currentWeatherSlice.actions;
export const getData = (state: RootState) => state.currentWeather.data;

export default currentWeatherSlice.reducer;
