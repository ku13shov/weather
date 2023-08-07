import { ReactElement, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

type Props = {
    children: ReactElement
}

export const ThemeProvider = ({ children, ...props }: Props) => {
    const [theme, setTheme] = useState<string>('light');

    const changeTheme = (theme: string) => {
        return setTheme(theme)
    }

    return <ThemeContext.Provider value={{theme, changeTheme}} {...props}>{children}</ThemeContext.Provider>;
};
