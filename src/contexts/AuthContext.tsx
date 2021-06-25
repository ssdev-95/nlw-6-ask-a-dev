import { createContext, useState, useEffect } from "react";
import { IAuthContextData, ProviderProps } from "../types";

import { auth, firebase } from '../services/firebase.config';
import { IUser } from '../types';

export const AuthContext = createContext({} as IAuthContextData)

export const AuthProvider = ({ children }: ProviderProps) => {
    const [user, setUser] = useState<IUser|undefined>();

    async function signInWithGoogle() {
        const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
        const results = await auth.signInWithPopup(googleAuthProvider)

        if(results.user) {
            const { displayName, photoURL, uid } = results.user;
            
            if(!displayName || !photoURL) {
                throw new Error('Missing info from Google Account');
            }

            setUser({
                id: uid,
                name: displayName,
                avatar: photoURL
            });
        }

    };

    useEffect(()=> {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user) {
                const { displayName, photoURL, uid } = user;
                
                if(!displayName || !photoURL) {
                    throw new Error('Missing info from Google Account');
                }
    
                setUser({
                    id: uid,
                    name: displayName,
                    avatar: photoURL
                });
            }
        });

        return () => {
            unsubscribe();
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            signInWithGoogle
        }}>
            { children }
        </AuthContext.Provider>
    )
}