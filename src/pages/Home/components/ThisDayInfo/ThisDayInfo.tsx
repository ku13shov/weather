import s from './ThisDayInfo.module.scss';
import cloud from '../../../../images/cloud.webp';
import ThisDayItem from './ThisDayItem';
import { RootState, useAppSelector } from '../../../../redux/store';

type Props = {};

const determinePressureStatus = (atmosphericPressure: number) => {
    if (atmosphericPressure < 750) {
        return 'пониженное';
    } else if (atmosphericPressure >= 750 && atmosphericPressure <= 770) {
        return 'нормальное';
    } else {
        return 'повышенное';
    }
};

const getWindDirection = (degrees: number) => {
    const directions = [
        'северный',
        'северо-восточный',
        'восточный',
        'юго-восточный',
        'южный',
        'юго-западный',
        'западный',
        'северо-западный',
    ];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
};

export const kmhToMs = (kmh: number) => {
    const ms = kmh * (1000 / 3600);
    return ms;
}

const getWindScale = (windSpeed: number) => {
    if (kmhToMs(windSpeed) < 3) {
        return 'штиль';
    } else if (kmhToMs(windSpeed) >= 3 && kmhToMs(windSpeed) < 6) {
        return 'слабый ветер';
    } else if (kmhToMs(windSpeed) >= 6 && kmhToMs(windSpeed) < 10) {
        return 'умеренный ветер';
    } else if (kmhToMs(windSpeed) >= 10 && kmhToMs(windSpeed) < 18) {
        return 'сильный ветер';
    } else if (kmhToMs(windSpeed) >= 18 && kmhToMs(windSpeed) < 30) {
        return 'щторм';
    } else {
        return 'ураган';
    }
};

const ThisDayInfo = ({}: Props) => {
    const { feels_like, temp, pressure, humidity, wind_speed, wind_deg } = useAppSelector(
        (state: RootState) => state.currentWeather,
    );

    const items = [
        {
            item_icon: 'temp',
            item_name: 'Температура',
            item_value: `${Math.round(temp)}° - ощущается как ${Math.round(feels_like)}°`,
        },

        {
            item_icon: 'pressure',
            item_name: 'Давление',
            item_value: `${Math.round(
                pressure / 1.33,
            )} мм ртутного столба - ${determinePressureStatus(Math.round(pressure / 1.33))}`,
        },

        {
            item_icon: 'humidity',
            item_name: 'Влажность',
            item_value: `${humidity}%`,
        },

        {
            item_icon: 'wind',
            item_name: 'Ветер',
            item_value: `${Math.round(kmhToMs(wind_speed))} м/с ${getWindDirection(
                wind_deg,
            )} - ${getWindScale(Math.round(wind_speed))}`,
        },
    ];

    return (
        <div className={s.info}>
            <img className={s.info__img} src={cloud} alt="cloud" />

            {items.map((obj) => (
                <ThisDayItem key={obj.item_name} {...obj} />
            ))}
        </div>
    );
}

export default ThisDayInfo;
