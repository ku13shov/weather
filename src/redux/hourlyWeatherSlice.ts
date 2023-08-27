import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from './store';

export interface HourlyWeather {
    data: {};
    status: string;
    hours_forecast: [];
}

type Params = {
    cityName: string;
    daysCount: string;
};

export const fetchHourlyWeather = createAsyncThunk(
    'hourlyWeather/fetchHourlyWeather',
    async (params: Params) => {
        const { cityName, daysCount } = params;
        const { data } = await axios.get(
            `https://api.weatherapi.com/v1/forecast.json?key=f01b2211beed42a397d175217231608&q=${cityName}&days=${daysCount}&lang=ru`,
        );
        return data;
    },
);

const initialState: HourlyWeather = {
    data: {},
    status: 'loading',
    hours_forecast: [],
};

export const hourlyWeatherSlice = createSlice({
    name: 'hourlyWeather',
    initialState,
    reducers: {
        setHourlyWeather(state, action) {
            state.data = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchHourlyWeather.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchHourlyWeather.fulfilled, (state, action) => {
            state.status = 'success';
            state.data = action.payload;
            state.hours_forecast = action.payload.forecast.forecastday;

            state.hours_forecast = action.payload.forecast.forecastday.map((obj: {hour: number}) => obj.hour).reduce((acc: [], curr: []) => acc.concat(curr), []);
        });
        builder.addCase(fetchHourlyWeather.rejected, (state) => {
            state.status = 'error';
        });
    },
});

export const { setHourlyWeather } = hourlyWeatherSlice.actions;
export const getData = (state: RootState) => state.hourlyWeather.data;

export default hourlyWeatherSlice.reducer;
