import { useContext, useEffect } from 'react';
import s from './Days.module.scss';
import Tabs from './Tabs';
import { RootState, useAppDispatch, useAppSelector } from '../../../../redux/store';
import { fetchDailyWeather } from '../../../../redux/dailyWeatherSlice';
import { CityContext } from '../../../../context/CityContext';
import { DaysContext } from '../../../../context/DaysContext';
import SwiperDays from './Swipper';
import { fetchHourlyWeather } from '../../../../redux/hourlyWeatherSlice';
import SwiperHours from '../Hours/SwipperHours';

export type DaysProps = {
    weather: string;
    icon: string;
    temp_day: number;
    temp_night: number;
    timestamp: number;
    index: number;
};

const Days = () => {
    const dispatch = useAppDispatch();
    const city = useContext(CityContext);
    const days = useContext(DaysContext);

    const daysCount = days.days;
    const cityName = city.city.value;

    useEffect(() => {
        dispatch(fetchHourlyWeather({ cityName, daysCount }));
        dispatch(fetchDailyWeather({ cityName, daysCount }));
    }, [city.city.value, daysCount]);

    return (
        <>
            <Tabs />
            <div className={s.days}>
                {+days.days > 2 ? <SwiperDays /> : <SwiperHours />}
                
            </div>
        </>
    );
};

export default Days;
