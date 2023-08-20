import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import currentWeather from './currentWeatherSlice';
import dailyWeather from './dailyWeatherSlice';
import hourlyWeather from './hourlyWeatherSlice';
import { useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        currentWeather,
        dailyWeather,
        hourlyWeather
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
