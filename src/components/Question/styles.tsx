import { makeStyles } from "@material-ui/core";
import colors from '../../styles/colors.json';

export const questionStyles = makeStyles({
    questionContainer: {
        background: colors.white.details,
        borderRadius: '8px',
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
        padding: '24px',
        marginBottom: '10px',
        width: '35rem',
        maxWidth: '92.35vw'
    },
    questionContent: {
        color:colors.gray.dark
    },
    questionFoot:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '24px'
    },
    authorContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '.75rem'
    },
    authorAvatar:{
        borderRadius: '50px',
        height: '44px'
    },
    authorInfo: {
        color:colors.gray.dark
    },
    actions: {
        display: 'flex',
        alignItems: 'center',
        gap: '.75rem'
    }
});