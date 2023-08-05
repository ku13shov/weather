import React from 'react';
import s from './Days.module.scss';
import { DaysProps } from './Days';
import { ReactComponent as Cloudy } from '../../../../images/cloudy.svg';
import { ReactComponent as MainlyCloudy } from '../../../../images/mainly_cloudy.svg';
import { ReactComponent as Rain } from '../../../../images/rain.svg';
import { ReactComponent as SmallRain } from '../../../../images/small_rain.svg';
import { ReactComponent as Sun } from '../../../../images/sun.svg';

const Day = ({ day_of_week, day_of_month, img, day_temp, night_temp, weather }: DaysProps) => {
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

    return (
        <div className={s.day}>
            <div className={s.day__of_week}>{day_of_week}</div>
            <div className={s.day__of_month}>{day_of_month}</div>
            {RenderWeatherImg(img)}
            <div className={s.day__daily_temp}>
                {day_temp}
            </div>
            <div className={s.day__night_temp}>
                {night_temp}
            </div>
            <div className={s.day__weather}>
                {weather}
            </div>
        </div>
    );
};

export default Day;
