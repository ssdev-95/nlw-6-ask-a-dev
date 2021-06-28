import { createContext, useState, useEffect } from "react";
import { ProviderProps, ThemeData } from "src/types";

export const ThemeContext = createContext({} as ThemeData);

export const ThemeProvider = ({ children }: ProviderProps) => {
    const [ theme, setTheme ] = useState('light');

    const toggleTheme = (newTheme: string) => {
        setTheme(newTheme)
    }

    useEffect(()=>{
        const persistedTheme = localStorage.getItem('theme');
        if(persistedTheme) {
            setTheme(persistedTheme);
            return;
        }
    }, []);

    useEffect(()=>{
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme
        }}>
            { children }
        </ThemeContext.Provider>
    )
}