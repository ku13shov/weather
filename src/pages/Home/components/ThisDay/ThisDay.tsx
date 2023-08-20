import { useState, useEffect, useContext } from 'react';
import s from './ThisDay.module.scss';
import { RootState, useAppSelector } from '../../../../redux/store';
import { CityContext } from '../../../../context/CityContext';

type Props = {};

const getFormattedTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
};

export const extractNumber = (url: string) => {
    const regex = /\/(\d+)\.png/;
    const match = url.match(regex);
    if (match && match[1]) {
        return parseInt(match[1]);
    }
};

export const isDay = (num: number) => {
    if (num === 0) {
        return 'night';
    } else {
        return 'day';
    }
};

const ThisDay = ({}: Props) => {
    const [currentTime, setCurrentTime] = useState(getFormattedTime());
    const { temp, icon, is_day } = useAppSelector((state: RootState) => state.currentWeather);

    const city = useContext(CityContext);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(getFormattedTime());
        }, 15000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={s.day}>
            <div className={s.day__top}>
                <div className={s.day__wrapper}>
                    <div className={s.day__temp}>{Math.round(temp)}°</div>
                    <div className={s.day__name}>Сегодня</div>
                </div>
               
                {icon &&  <img className={s.day__icon} src={`https://raw.githubusercontent.com/ku13shov/weather-images/main/${isDay(is_day)}/${extractNumber(icon)}.svg`} alt="weater" />}
            </div>

            <div className={s.day__bottom}>
                <div className={s.day__time}>
                    Время: <span>{currentTime}</span>
                </div>
                <div className={s.day__city}>
                    Город: <span>{city.city.label}</span>
                </div>
            </div>
        </div>
    );
};

export default ThisDay;
