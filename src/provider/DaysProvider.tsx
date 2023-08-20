import { ReactElement, useState } from 'react';
import { DaysContext } from '../context/DaysContext';

type Props = {
    children: ReactElement;
};

export const DaysProvider = ({ children, ...props }: Props) => {
    const [days, setDays] = useState<string>('2');

    const changeDays = (days: string) => {
        return setDays(days);
    };

    return (
        <DaysContext.Provider value={{ days, changeDays }} {...props}>
            {children}
        </DaysContext.Provider>
    );
};
