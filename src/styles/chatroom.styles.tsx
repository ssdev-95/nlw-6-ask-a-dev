import { makeStyles } from '@material-ui/core';
import colors from './colors.json';

export const chatRoomStyles = makeStyles({
    chatRoomContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: colors.white.background
    },
    header: {
        flex: 1.2,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 3rem',
        borderBottom: `1px solid ${colors.gray.soft}`
    },
    content: {
        flex: 8.8,
        maxWidth: '800px',
        margin: '0 auto',
        overflowY: 'scroll'
    },
    logo: {
        height: '48px'
    },
    title: {
        margin: '32px 0 24px',
        display: 'flex',
        alignItems: 'center'
    },
    h1: {
        fontFamily: 'Poppins, sans-serif',
        color: colors.gray.dark
    },
    span: {
        marginLeft: '16px',
        background: colors.pink.light,
        borderRadius: '9999px',
        padding: '8px 16px',
        color: colors.white.details,
        fontWeight: 500,
        fontSize: '14px'
    },
    textarea: {
        width: '100%',
        border: 0,
        borderRadius: '8px',
        padding: '16px',
        background: colors.white.details,
        boxShadow: '0 2px 2px rgba(0,0,0,0.04)',
        resize:'vertical',
        minHeight: '130px'
    },
    formFoot: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:'16px'
    }, 
    formFootSpan: {
        fontSize: "14px",
        color: colors.gray.medium,
        fontWeight: 500
    },
    formFootButton: {
        background: 'transparent',
        border: 0,
        color: colors.purple.dark,
        fontWeight: 500,
        cursor: 'pointer'
    },
    button: {
        color: 'white',
        display: 'flex',
        gap: '2rem',
        width: '150px',
        height: '40px',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        background: colors.purple.dark,
        border: 0,
        borderRadius: '8px',
        cursor: 'pointer'
    },
    profile: {
        display: 'flex',
        alignItems: 'center',
        gap: '.75rem'
    },
    userAvatar: {
        height: '32px',
        width: '32px',
        borderRadius: '50px'
    },
    userName: {
        fontSize: '14px',
        fontWeight: 500,
        color: colors.gray.dark
    },
    questionsContainer: {
        marginTop: '18px'
    }
});
