/*  eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import colors from '../../styles/colors.json';
import { errorPageStyle } from '../../styles/error.styles';

export const NotFound = () => {
    const { push } = useHistory();
    const { theme } = useTheme();
    const {
        pageContainer,
        errorCode,
        errorMessageContainer,
        errorMessageTitle,
        errorMessage
    } = errorPageStyle();

    useEffect(()=>{
        setTimeout(()=>{
            push('/');
        }, 7000);
    }, []);

    return (
        <div style={{backgroundColor: theme==='light'?colors.background.light:colors.background.dark}} className={pageContainer}>
            <h1 className={errorCode}>404</h1>
            <div className={errorMessageContainer}>
                <p className={errorMessageTitle}>You acting kinda sus bro</p>
                <p className={errorMessage}>You are about to be redirected to the home, <span style={{color: colors.red.dark}}>imposter</span>!</p>
            </div>
        </div>
    )
}