import { ReactNode } from 'react';

export interface ProviderProps {
    children: ReactNode;
}

export interface ButtonProps {
    children: ReactNode;
    callback?: (()=>void)|(undefined)|(()=>Promise<void>);
    bgcolor?: string;
}

export interface ThemeData {
    theme: string;
    toggleTheme: (newTheme:string)=>void;
}

export interface IParams {
    id: string;
}

export interface IUser {
    id: string;
    name: string;
    avatar: string;
}

export interface IAuthContextData {
    user: IUser|undefined;
    signInWithGoogle: ()=>Promise<void>;
}