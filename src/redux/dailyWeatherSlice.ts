import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from './store';

export interface DailyWeather {
    data: any;
    status: string;
}

export const fetchDailyWeather = createAsyncThunk(
    'dailyWeather/fetchDailyWeather',
    async (city: string) => {
        const { data } = await axios.get(
            `http://api.weatherapi.com/v1/forecast.json?key=f01b2211beed42a397d175217231608&q=${city}&days=5&lang=ru`,
        );

        console.log(data);
        
        return data;
    },
);

const initialState: DailyWeather = {
    data: '',
    status: 'loading',
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
        });
        builder.addCase(fetchDailyWeather.rejected, (state) => {
            state.status = 'error';
        });
    },
});

export const { setDailyWeather } = dailyWeatherSlice.actions;
export const getData = (state: RootState) => state.dailyWeather.data;

export default dailyWeatherSlice.reducer;
