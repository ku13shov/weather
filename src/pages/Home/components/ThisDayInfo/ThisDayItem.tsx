import React from 'react';
import s from './ThisDayItem.module.scss';
import { ReactComponent as Temp } from '../../../../images/temp.svg';
import { ReactComponent as Pressure } from '../../../../images/pressure.svg';
import { ReactComponent as Humidity } from '../../../../images/humidity.svg';
import { ReactComponent as Wind } from '../../../../images/wind.svg';

type Props = {};

type ItemNameProp = {
    item_name: string;
    item_value: string;
    item_icon: string;
};

const renderIcon = (iconName: string) => {
    switch (iconName) {
        case 'temp':
            return <Temp />;
            break;
        case 'pressure':
            return <Pressure />;
            break;
        case 'humidity':
            return <Humidity />;
            break;
        case 'wind':
            return <Wind />;
            break;
        default:
            return null;
            break;
    }
};

const ThisDayItem = ({ item_name, item_icon, item_value }: ItemNameProp) => {
    return (
        <div className={s.item}>
            <div className={s.item__icon}>
                {renderIcon(item_icon)}
            </div>
            <div className={s.item__name}>{item_name}</div>
            <div className={s.item__value}>{item_value}</div>
        </div>
    );
};

export default ThisDayItem;
