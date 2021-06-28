import { makeStyles } from "@material-ui/core";
import colors from './colors.json';

const { innerWidth:width } = window;

export const modalStyle = makeStyles({
    overlay: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        height: width>550?'25rem':'40vh',
        width: width>550?'30rem':'80vw',
        background: colors.white.background,
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: width>550?'0 4rem':'0 2rem',
        fontWeight: 500,
        fontSize: '2rem',
        textAlign: 'center'
    },
    icon: {
        color: colors.red.dark,
        fontSize: '5rem'
    },
    modalActions: {
        display : 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '4px',
        width: '100%',
        height: '5vh'
    },
    modalActionButton: {
        flex: 1,
        height: '100%',
        color: colors.white.details,
        fontSize: '16px',
        border: 0,
        borderRadius: '8px',
        display : 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});