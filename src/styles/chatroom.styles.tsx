import { makeStyles } from '@material-ui/core';
import colors from './colors.json';
const { innerWidth: width } = window;

export const chatRoomStyles = makeStyles({
    chatRoomContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'scroll'
    },
    header: {
        flex: 1.2,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: width>600 ? '.5rem 3rem' : '.5rem 1rem',
        borderBottom: `1px solid ${colors.gray.soft}`
    },
    content: {
        flex: 8.8,
        maxWidth: '800px',
        margin: '0 auto'
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
    floatButton: {
        color: 'white',
        display: 'flex',
        width: width>800 ? '125px' : '',
        height: '40px',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        background: colors.purple.dark,
        border: 0,
        borderRadius: '8px',
        cursor: 'pointer',
        padding: '0 .45rem',
        transition: 'filter .2s ease',
        position: width>550?'relative':'absolute',
        top: width>550?'0':'7.5vh',
        right: width>550?'':'3.75vw'
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
    },
    emptyContainer: {
        flex: 1,
        padding: width>800?'2rem 0':'4rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        position: 'relative',
        backgroundImage: 'url(/svgs/no-asks.svg)',
        backgroundPosition: '50%',
        backgroundRepeat: 'no-repeat'
    },
    emptyStateText: {
        color: colors.gray.dark,
        fontWeight: 500,
        fontSize: width>800?'1.85rem':'1.45rem',
        margin: 'auto'
    },
    headerActions: {
        display: 'flex',
        gap: '1.25rem',
        position: width>550?'relative':'static'
    },
    actionButton: {
        fontSize: '.75rem',
        background: 'rgba(0,0,0,0)',
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'center',
        gap: '.15rem',
        border: 0
    }
});
