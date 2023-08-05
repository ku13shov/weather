import React from 'react';
import ThisDay from './components/ThisDay/ThisDay';
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo';
import s from './Home.module.scss';
import Days from './components/Days/Days';

type Props = {};

function Home({}: Props) {
    return (
        <div className={s.home}>
            <div className={s.home__wrapper}>
                <ThisDay />
                <ThisDayInfo />
            </div>

            <Days />
        </div>
    );
}

export default Home;
