import { ReactElement, useState } from 'react';
import { CityContext } from '../context/CityContext';

type Props = {
    children: ReactElement;
};

export const CityProvider = ({ children, ...props }: Props) => {
    const [city, setCity] = useState<string>('Минск');

    const changeCity = (city: string) => {
        return setCity(city);
    };

    return (
        <CityContext.Provider value={{ city, changeCity }} {...props}>
            {children}
        </CityContext.Provider>
    );
};
