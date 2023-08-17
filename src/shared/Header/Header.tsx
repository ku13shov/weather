import { useContext, useEffect } from 'react';
import s from './Header.module.scss';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as Theme } from '../../images/theme.svg';
import Select from 'react-select';
import { ThemeContext } from '../../context/ThemeContext';
import { fetchCurrenthWeather } from '../../redux/currentWeatherSlice';
import { useAppDispatch } from '../../redux/store';
import { CityContext } from '../../context/CityContext';

const Header = () => {
    const theme = useContext(ThemeContext);
    const city = useContext(CityContext);
    const dispatch = useAppDispatch();

    const options = [
        { value: '53.9,27.57', label: 'Минск' },
        { value: '55.19,30.21', label: 'Витебск' },
        { value: '52.09,23.69', label: 'Брест' },
        { value: '52.42,31.01', label: 'Гомель' },
        { value: '53.68,23.81', label: 'Гродно' },
        { value: '53.91,30.34', label: 'Могилев' },
    ];

    const colourStyles = {
        control: (styles: object) => ({
            ...styles,
            backgroundColor: theme.theme === 'light' ? 'rgba(71, 147, 255, 0.20)' : '#4f4f4f',
            color: '#fff',
            width: '175px',
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
        e?.label && city.changeCity(e?.value, e?.label);
    };

    useEffect(() => {
        theme.changeTheme(localStorage.theme);
    }, []);

    useEffect(() => {
        theme.changeTheme(localStorage.theme);
        dispatch(fetchCurrenthWeather(city.city.value));
    }, [city.city.value]);

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
                <Logo className={s.logo} />
                <h1 className={s.title}>Weather</h1>
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
