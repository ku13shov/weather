import { useContext, useEffect } from 'react';
import Day from './Day';
import s from './Days.module.scss';
import Tabs from './Tabs';
import { RootState, useAppDispatch, useAppSelector } from '../../../../redux/store';
import { fetchDailyWeather } from '../../../../redux/dailyWeatherSlice';
import { CityContext } from '../../../../context/CityContext';

export type DaysProps = {
    weather: string;
    icon: string;
    temp_day: number;
    temp_night: number;
    timestamp: number;
    index: number;
};

// const days: DaysProps[] = [
//     {
//         day_of_week: 'Сегодня',
//         day_of_month: '28 авг',
//         img: 'cloudy',
//         day_temp: '+18°',
//         night_temp: '+15°',
//         weather: 'Облачно',
//     },

//     {
//         day_of_week: 'Завтра',
//         day_of_month: '29 авг',
//         img: 'rain',
//         day_temp: '+15°',
//         night_temp: '+10°',
//         weather: 'Небольшой дождь',
//     },

//     {
//         day_of_week: 'Пн',
//         day_of_month: '30 авг',
//         img: 'mainly_cloudy',
//         day_temp: '+18°',
//         night_temp: '+15°',
//         weather: 'Облачно',
//     },

//     {
//         day_of_week: 'Сегодня',
//         day_of_month: '28 авг',
//         img: 'sun',
//         day_temp: '+18°',
//         night_temp: '+15°',
//         weather: 'Облачно',
//     },

//     {
//         day_of_week: 'Сегодня',
//         day_of_month: '28 авг',
//         img: 'small_rain',
//         day_temp: '+18°',
//         night_temp: '+15°',
//         weather: 'Облачно',
//     },

//     {
//         day_of_week: 'Сегодня',
//         day_of_month: '28 авг',
//         img: 'cloudy',
//         day_temp: '+18°',
//         night_temp: '+15°',
//         weather: 'Облачно',
//     },

//     {
//         day_of_week: 'Сегодня',
//         day_of_month: '28 авг',
//         img: 'cloudy',
//         day_temp: '+18°',
//         night_temp: '+15°',
//         weather: 'Облачно',
//     },
// ];

const Days = () => {
    const dispatch = useAppDispatch();
    const city = useContext(CityContext);
    const { forecast_array } = useAppSelector((state: RootState) => state.dailyWeather);

    console.log(forecast_array)

    useEffect(() => {
        dispatch(fetchDailyWeather(city.city.value));
    }, [city.city.value]);    

    return (
        <>
            <Tabs />
            <div className={s.days}>
                {/* {days.map((obj, i) => (
                    <Day key={i} {...obj} />
                ))} */}

                {forecast_array.map((obj: any, i) => (
                    <Day key={i} weather={obj.day.condition.text} icon={obj.day.condition.icon} temp_day={obj.day.maxtemp_c} temp_night={obj.day.mintemp_c} timestamp={obj.date_epoch} index={i} />
                ))}
            </div>
        </>
    );
};

export default Days;
