import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as Theme } from '../../images/theme.svg';
import Select, { SingleValue } from 'react-select';
import { ThemeContext } from '../../context/ThemeContext';
import { fetchCurrenthWeather } from '../../redux/currentWeatherSlice';
import { RootState, useAppDispatch, useAppSelector } from '../../redux/store';
import { CityContext } from '../../context/CityContext';

type Props = {};

const Header = (props: Props) => {
    const theme = useContext(ThemeContext);
    const city = useContext(CityContext);
    const dispatch = useAppDispatch();

    const options = [
        { value: 'city-1', label: 'Минск' },
        { value: 'city-2', label: 'Витебск' },
        { value: 'city-3', label: 'Брест' },
        { value: 'city-4', label: 'Гомель' },
        { value: 'city-5', label: 'Гродно' },
        { value: 'city-6', label: 'Могилёв' },
    ];

    const colourStyles = {
        control: (styles: object) => ({
            ...styles,
            backgroundColor: theme.theme === 'light' ? 'rgba(71, 147, 255, 0.20)' : '#4f4f4f',
            color: '#fff',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
        }),

        singleValue: (styles: object) => ({
            ...styles,
            color: theme.theme === 'light' ? '#000' : '#fff',
        }),

        menu: (styles: object) => ({
            ...styles,
            backgroundColor: theme.theme === 'light' ? '#fff' : '#4f4f4f',
            zIndex: '1000',
        }),

        option: (styles: object, state: any) => ({
            ...styles,
            color: theme.theme === 'light' ? '#000' : '#fff',
            backgroundColor: state.isFocused
                ? '#4793ff'
                : theme.theme === 'light'
                ? 'rgba(71, 147, 255, 0.20)'
                : '#4f4f4f',
        }),
    };

    const changeThemeHandler = () => {
        theme.changeTheme(theme.theme === 'light' ? 'dark' : 'light');
        localStorage.setItem('theme', theme.theme === 'light' ? 'dark' : 'light');
    };

    const changeCityHandler = (e: any) => {
        e?.label && city.changeCity(e?.label)
    }

    useEffect(() => {
        theme.changeTheme(localStorage.theme);
    }, []);

    useEffect(() => {
        theme.changeTheme(localStorage.theme);
        dispatch(fetchCurrenthWeather(city.city));
    }, [city.city]);

    useEffect(() => {
        const root = document.querySelector(':root') as HTMLElement;

        const components = [
            '--body-background',
            '--blocks-background',
            '--text',
            '--cards-background',
            '--shadow',
        ];

        components.forEach((component) => {
            root.style.setProperty(`${component}-default`, `var(${component}-${theme.theme})`);
        });
    }, [theme.theme]);

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
                <Theme className={s.theme} onClick={changeThemeHandler} />
                <Select
                    styles={colourStyles}
                    options={options}
                    defaultValue={options[0]}
                    onChange={(e) => {
                        changeCityHandler(e);
                    }}
                />
            </div>
        </header>
    );
};

export default Header;
