import { createContext } from 'react';

type Props = {
    city: { value: string; label: string };
    changeCity: (value: string, label: string) => void;
};

export const CityContext = createContext<Props>({
    city: { value: '', label: '' },
    changeCity: () => {},
});
