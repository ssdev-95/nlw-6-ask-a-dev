import { createContext, useState } from "react";
import { ProviderProps, ThemeData } from "src/types";

export const ThemeContext = createContext({} as ThemeData);

export const ThemeProvider = ({ children }: ProviderProps) => {
    const [ theme, setTheme ] = useState('light');

    const toggleTheme = (newTheme: string) => {
        setTheme(newTheme)
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme
        }}>
            { children }
        </ThemeContext.Provider>
    )
}