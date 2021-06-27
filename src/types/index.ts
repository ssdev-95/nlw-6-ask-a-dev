import { ReactNode } from 'react';

export interface ProviderProps {
    children: ReactNode;
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

export interface IRoomCode {
    code: string;
}

export interface IQuestion {
    id: string;
    author: {
        name:string;
        avatar: string;
    };
    content: string;
    isAnswered: boolean;
    isHighlightened: boolean;
    likeCount: number;
    likeId: string|undefined;
}

export interface IQuestionProps {
    question: IQuestion;
    children?: ReactNode;
}