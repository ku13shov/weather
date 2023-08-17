import s from './Days.module.scss';
import { DaysProps } from './Days';

const Day = ({ weather, icon, temp_day, temp_night, timestamp, index }: DaysProps) => {

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
