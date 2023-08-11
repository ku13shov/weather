import { useState, useEffect, useContext } from 'react';
import s from './ThisDay.module.scss';
import { ReactComponent as Sun } from '../../../../images/sun.svg';
import { RootState, useAppSelector } from '../../../../redux/store';
import { CityContext } from '../../../../context/CityContext';

type Props = {};

const getFormattedTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
};

const ThisDay = ({}: Props) => {
    const [currentTime, setCurrentTime] = useState(getFormattedTime());
    const { temp, icon } = useAppSelector((state: RootState) => state.currentWeather);

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

                {/* <Sun className={s.day__icon} /> */}
                {icon && <img className={s.day__icon} src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="weater icon" />}
            </div>

            <div className={s.day__bottom}>
                <div className={s.day__time}>
                    Время: <span>{currentTime}</span>
                </div>
                <div className={s.day__city}>
                    Город: <span>{city.city}</span>
                </div>
            </div>
        </div>
    );
};

export default ThisDay;
