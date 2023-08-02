import React from 'react';
import ThisDay from './components/ThisDay/ThisDay';
import s from './Home.module.scss';

type Props = {};

function Home({}: Props) {
    return <div className={s.home}>
        <ThisDay />
    </div>;
}

export default Home;
