import { createContext } from 'react';

type Props = {
    days: string;
    changeDays: (days: string) => void;
};

export const DaysContext = createContext<Props>({
    days: '',
    changeDays: () => {},
});
