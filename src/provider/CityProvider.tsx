import { ReactElement, useState } from 'react';
import { CityContext } from '../context/CityContext';

type Props = {
    children: ReactElement;
};

export const CityProvider = ({ children, ...props }: Props) => {
    const [city, setCity] = useState({ value: '53.9,27.57', label: 'Минск' });

    const changeCity = (cityValue: string, cityLabel: string) => {
        return setCity((prev: {}) => ({
            ...prev,
            value: cityValue,
            label: cityLabel,
        }));
    };

    return (
        <CityContext.Provider value={{ city, changeCity }} {...props}>
            {children}
        </CityContext.Provider>
    );
};
