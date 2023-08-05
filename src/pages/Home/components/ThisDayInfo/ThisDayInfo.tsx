import React from 'react';
import s from './ThisDayInfo.module.scss';
import cloud from '../../../../images/cloud.webp';
import ThisDayItem from './ThisDayItem';

type Props = {};

const items = [
    {
        item_icon: 'temp',
        item_name: 'Температура',
        item_value: '20° - ощущается как 17°'
    },

    {
        item_icon: 'pressure',
        item_name: 'Давление',
        item_value: '765 мм ртутного столба - нормальное'
    },

    {
        item_icon: 'precipitation',
        item_name: 'Осадки',
        item_value: 'Без осадков'
    },

    {
        item_icon: 'wind',
        item_name: 'Ветер',
        item_value: '3 м/с юго-запад - легкий ветер'
    },
]

function ThisDayInfo({}: Props) {
    return (
        <div className={s.info}>
            <img className={s.info__img} src={cloud} alt="cloud" />

            {items.map(obj => <ThisDayItem key={obj.item_name} {...obj} />)}
        </div>
    );
}

export default ThisDayInfo;
