import React from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { RootState, useAppSelector } from '../../../../redux/store';
import s from '../Days/Days.module.scss';
import Hour from './Hour';
import HourSkeleton from './HourSkeleton';

SwiperCore.use([Navigation]);

const SwiperHours: React.FC = () => {
    const { hours_forecast, status } = useAppSelector((state: RootState) => state.hourlyWeather);
    const currentTimeEpoch = Math.floor(Date.now() / 1000);

    const hoursArr = hours_forecast
        .filter((obj: any) => {
            return obj.time_epoch > currentTimeEpoch - 3600;
        })
        .slice(0, 15);

    const hourSkeletonHTML = (
        <div className={s.skeleton_container}>
            {new Array(7).fill(1).map((_, i) => (
                <HourSkeleton key={i} />
            ))}
        </div>
    );

    const swiperHoursHTML = (
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
            {hoursArr.map((obj: any, i) => (
                <SwiperSlide key={i} className={s.slide}>
                    <Hour
                        weather={obj.condition.text}
                        time={obj.time_epoch}
                        index={i}
                        dayOrNight={obj.is_day}
                        img={obj.condition.icon}
                        temp={obj.temp_c}
                        windSpeed={obj.wind_kph}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );

    return <>{status === 'loading' ? hourSkeletonHTML : swiperHoursHTML}</>;
};

export default SwiperHours;
