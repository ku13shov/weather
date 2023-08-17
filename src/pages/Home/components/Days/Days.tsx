import { useContext, useEffect } from 'react';
import Day from './Day';
import s from './Days.module.scss';
import Tabs from './Tabs';
import { RootState, useAppDispatch, useAppSelector } from '../../../../redux/store';
import { fetchDailyWeather } from '../../../../redux/dailyWeatherSlice';
import { CityContext } from '../../../../context/CityContext';
import { DaysContext } from '../../../../context/DaysContext';
import MySwiper from './Swipper';

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
    const { forecast_array } = useAppSelector((state: RootState) => state.dailyWeather);

    const daysCount = days.days;
    const cityName = city.city.value;

    console.log(forecast_array);

    useEffect(() => {
        dispatch(fetchDailyWeather({ cityName, daysCount }));
    }, [city.city.value, daysCount]);

    return (
        <>
            <Tabs />
            <div className={s.days}>
                {/* {forecast_array.map((obj: any, i) => (
                    <Day
                        key={i}
                        weather={obj.day.condition.text}
                        icon={obj.day.condition.icon}
                        temp_day={obj.day.maxtemp_c}
                        temp_night={obj.day.mintemp_c}
                        timestamp={obj.date_epoch}
                        index={i}
                    />
                ))} */}
                <MySwiper />
            </div>
        </>
    );
};

export default Days;
