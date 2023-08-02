import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as Theme } from '../../images/theme.svg';
import Select from 'react-select';

type Props = {};

const options = [
    { value: 'city-1', label: 'Минск' },
    { value: 'city-2', label: 'Брест' },
    { value: 'city-3', label: 'Гомель' },
];

const colourStyles = {
    control: (styles: object) => ({
        ...styles,
        backgroundColor: 'rgba(71, 147, 255, 0.20)',
        width: '194px',
        height: '37px',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
    }),
};

const Header = (props: Props) => {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <Link to="/" className={s.link}>
                    <Logo className={s.logo} />
                </Link>
                <Link to="/" className={s.link}>
                    <h1 className={s.title}>Weather</h1>
                </Link>
            </div>

            <div className={s.wrapper}>
                <Theme className={s.theme} />
                <Select styles={colourStyles} options={options} defaultValue={options[0]} />
            </div>
        </header>
    );
};

export default Header;
