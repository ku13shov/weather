import { useContext, useEffect } from 'react';
import Day from './Day';
import s from './Days.module.scss';
import Tabs from './Tabs';
import { useAppDispatch } from '../../../../redux/store';
import { fetchDailyWeather } from '../../../../redux/dailyWeatherSlice';
import { CityContext } from '../../../../context/CityContext';

export type DaysProps = {
    day_of_week: string;
    day_of_month: string;
    img: string;
    day_temp: string;
    night_temp: string;
    weather: string;
};

const days: DaysProps[] = [
    {
        day_of_week: 'Сегодня',
        day_of_month: '28 авг',
        img: 'cloudy',
        day_temp: '+18°',
        night_temp: '+15°',
        weather: 'Облачно',
    },

    {
        day_of_week: 'Завтра',
        day_of_month: '29 авг',
        img: 'rain',
        day_temp: '+15°',
        night_temp: '+10°',
        weather: 'Небольшой дождь',
    },

    {
        day_of_week: 'Пн',
        day_of_month: '30 авг',
        img: 'mainly_cloudy',
        day_temp: '+18°',
        night_temp: '+15°',
        weather: 'Облачно',
    },

    {
        day_of_week: 'Сегодня',
        day_of_month: '28 авг',
        img: 'sun',
        day_temp: '+18°',
        night_temp: '+15°',
        weather: 'Облачно',
    },

    {
        day_of_week: 'Сегодня',
        day_of_month: '28 авг',
        img: 'small_rain',
        day_temp: '+18°',
        night_temp: '+15°',
        weather: 'Облачно',
    },

    {
        day_of_week: 'Сегодня',
        day_of_month: '28 авг',
        img: 'cloudy',
        day_temp: '+18°',
        night_temp: '+15°',
        weather: 'Облачно',
    },

    {
        day_of_week: 'Сегодня',
        day_of_month: '28 авг',
        img: 'cloudy',
        day_temp: '+18°',
        night_temp: '+15°',
        weather: 'Облачно',
    },
];

const Days = () => {
    const dispatch = useAppDispatch();
    const city = useContext(CityContext);

    useEffect(() => {
        dispatch(fetchDailyWeather(city.city.value));
    }, [city.city.value]);    

    return (
        <>
            <Tabs />
            <div className={s.days}>
                {days.map((obj, i) => (
                    <Day key={i} {...obj} />
                ))}
            </div>
        </>
    );
};

export default Days;
