import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Day from './Day';
import { RootState, useAppSelector } from '../../../../redux/store';
import s from './Days.module.scss';

SwiperCore.use([Navigation, Autoplay]);

const MySwiper: React.FC = () => {
    const { forecast_array } = useAppSelector((state: RootState) => state.dailyWeather);

    return (
        <Swiper navigation spaceBetween={25} slidesPerView={7}>
            {forecast_array.map((obj: any, i) => (
                <SwiperSlide key={i} className={s.slide}>
                    <Day
                        weather={obj.day.condition.text}
                        icon={obj.day.condition.icon}
                        temp_day={obj.day.maxtemp_c}
                        temp_night={obj.day.mintemp_c}
                        timestamp={obj.date_epoch}
                        index={i}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default MySwiper;
