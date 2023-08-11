import { createContext } from 'react';

type Props = {
    city: string;
    changeCity: (city: string) => void;
};

export const CityContext = createContext<Props>({
    city: '',
    changeCity: () => {},
});
