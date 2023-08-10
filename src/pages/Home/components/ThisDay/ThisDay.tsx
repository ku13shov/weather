import React from 'react';
import s from './ThisDay.module.scss';
import {ReactComponent as Sun} from '../../../../images/sun.svg';
import { RootState, useAppSelector } from '../../../../redux/store';

type Props = {};

function ThisDay({}: Props) {
    const { temp } = useAppSelector((state: RootState) => state.currentWeather);

    return (
        <div className={s.day}>
            <div className={s.day__top}>
                <div className={s.day__wrapper}>
                    <div className={s.day__temp}>{Math.round(temp)}°</div>
                    <div className={s.day__name}>Сегодня</div>
                </div>

                <Sun className={s.day__icon} />
            </div>

            <div className={s.day__bottom}>
                <div className={s.day__time}>Время: <span>21:54</span></div>
                <div className={s.day__city}>Город: <span>Минск</span></div>
            </div>
        </div>
    );
}

export default ThisDay;
