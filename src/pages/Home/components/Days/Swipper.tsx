import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Day from './Day';
import { RootState, useAppSelector } from '../../../../redux/store';
import s from './Days.module.scss';
import HourSkeleton from '../Hours/HourSkeleton';

SwiperCore.use([Navigation]);

const SwiperDays: React.FC = () => {
    const { forecast_array, status } = useAppSelector((state: RootState) => state.dailyWeather);

    const daysSkeletonHTML = (
        <div className={s.skeleton_container}>
            {new Array(7).fill(1).map((_, i) => (
                <HourSkeleton key={i} />
            ))}
        </div>
    );

    const swiperDaysHTML = (
        <Swiper
            navigation
            spaceBetween={25}
            slidesPerView={7}
            breakpoints={{
                320: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                },
                390: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 5,
                    spaceBetween: 25,
                },
                1020: {
                    slidesPerView: 7,
                    spaceBetween: 25,
                },
            }}>
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

    return <>{status === 'loading' ? daysSkeletonHTML : swiperDaysHTML}</>;
};

export default SwiperDays;
