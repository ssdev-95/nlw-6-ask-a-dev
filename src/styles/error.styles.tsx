import { makeStyles } from '@material-ui/core';
import colors from './colors.json';

const { innerWidth:width } = window;

export const errorPageStyle = makeStyles({
    pageContainer: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: width>800?'url(/svgs/amongus.png)':'url(/svgs/amongus-sm.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50%',
        gap: '3rem'
    },
    errorCode: {
        color: colors.gray.dark,
        fontSize: width>800?'18rem':'12rem',
        fontWeight: 700,
        fontFamily: 'Roboto'
    },
    errorMessageContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem'
    },
    errorMessageTitle: {
        fontSize:  width>800?'5rem':'1.85rem',
        fontWeight: 700,
        fontFamily: 'Poppins',
        color: colors.gray.dark
    },
    errorMessage: {
        fontSize:  width>800?'2rem':'.95rem',
        fontWeight: 500,
        fontFamily: 'Poppins',
        color: colors.gray.dark,
        textAlign: 'center'
    }
});