import React from 'react';
import s from './Popup.module.scss';
import { ReactComponent as Close } from '../../images/close.svg';
import { ReactComponent as Img } from '../../images/cloudy.svg';
import ThisDayItem from '../../pages/Home/components/ThisDayInfo/ThisDayItem';

type Props = {};

const items = [
    {
        item_icon: 'temp',
        item_name: 'Температура',
        item_value: '20° - ощущается как 17°',
    },

    {
        item_icon: 'pressure',
        item_name: 'Давление',
        item_value: '765 мм ртутного столба - нормальное',
    },

    {
        item_icon: 'precipitation',
        item_name: 'Осадки',
        item_value: 'Без осадков',
    },

    {
        item_icon: 'wind',
        item_name: 'Ветер',
        item_value: '3 м/с юго-запад - легкий ветер',
    },
];

const Popup = (props: Props) => {
    return (
        <>
            <div className={s.overlay}></div>
            <div className={s.popup}>
                <div className={s.popup__wrapper}>
                    <Close className={s.popup__close} />
                    <div className={s.popup__info}>
                        <div className={s.popup__temp}>12°</div>
                        <div className={s.popup__day}>Среда</div>
                        <Img />
                        <div className={s.popup__time}>Время: 01:54</div>
                        <div className={s.popup__city}>Город: Санкт-Петербург</div>
                    </div>

                    <div className={s.popup__items}>
                        {items.map((obj) => (
                            <ThisDayItem key={obj.item_name} {...obj} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Popup;
