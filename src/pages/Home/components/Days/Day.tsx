import React from 'react';
import s from './Days.module.scss';
import { DaysProps } from './Days';
import { ReactComponent as Cloudy } from '../../../../images/cloudy.svg';
import { ReactComponent as MainlyCloudy } from '../../../../images/mainly_cloudy.svg';
import { ReactComponent as Rain } from '../../../../images/rain.svg';
import { ReactComponent as SmallRain } from '../../../../images/small_rain.svg';
import { ReactComponent as Sun } from '../../../../images/sun.svg';

const Day = ({ weather, icon, temp_day, temp_night, timestamp, index }: DaysProps) => {
    const RenderWeatherImg = (iconName: string) => {
        switch (iconName) {
            case 'cloudy':
                return <Cloudy />;
                break;
            case 'mainly_cloudy':
                return <MainlyCloudy />;
                break;
            case 'rain':
                return <Rain />;
                break;
            case 'small_rain':
                return <SmallRain />;
                break;
            case 'sun':
                return <Sun />;
                break;
            default:
                return null;
                break;
        }
    };

    const getDayAndMonth = (timestamp: number) => {
        const date = new Date(timestamp * 1000);
        const day = date.getDate();
        const monthNames = [
            'янв',
            'фев',
            'мар',
            'апр',
            'май',
            'июн',
            'июл',
            'авг',
            'сен',
            'окт',
            'ноя',
            'дек',
        ];
        const month = monthNames[date.getMonth()];
        return `${day} ${month}`;
    };

    const getWeekday = (timestamp: number) => {
        const date = new Date(timestamp * 1000);
        const weekday = date.getDay();
        const weekdays = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
        if (index === 0) {
            return 'Сегодня';
        } else if (index === 1) {
            return 'Завтра';
        } else {
            return weekdays[weekday];
        }
    };

    return (
        <div className={s.day}>
            <div className={s.day__of_week}>{getWeekday(timestamp)}</div>
            <div className={s.day__of_month}>{getDayAndMonth(timestamp)}</div>
            <img src={icon} alt="weather" />
            <div className={s.day__daily_temp}>{Math.round(temp_day)}°</div>
            <div className={s.day__night_temp}>{Math.round(temp_night)}°</div>
            <div className={s.day__weather}>{weather}</div>
        </div>
    );
};

export default Day;
