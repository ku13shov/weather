import s from './Hours.module.scss';
import { ReactComponent as Wind } from '../../../../images/wind.svg';
import { extractNumber, isDay } from '../ThisDay/ThisDay';
import { kmhToMs } from '../ThisDayInfo/ThisDayInfo';

type HourProps = {
    weather: string;
    time: number;
    index: number;
    dayOrNight: number;
    img: string;
    temp: number;
    windSpeed: number;
};

const formattedTime = (time: number) => {
    const date = new Date(time * 1000);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
};

const Hour = ({ weather, time, index, dayOrNight, img, temp, windSpeed }: HourProps) => {
    return (
        <div className={s.hour}>
            <div className={s.hour__time}>{index === 0 ? 'Сейчас' : formattedTime(time)}</div>
            <img
                className={s.hour__img}
                src={`https://raw.githubusercontent.com/ku13shov/weather-images/main/${isDay(
                    dayOrNight,
                )}/${extractNumber(img)}.svg`}
                alt="weather"
            />
            <div className={s.hour__temp}>{Math.round(temp)}°</div>
            <div className={s.hour__wind}>
                <Wind /> {Math.round(kmhToMs(windSpeed))} м/с
            </div>
            <div className={s.hour__weather}>{weather}</div>
        </div>
    );
};

export default Hour;
