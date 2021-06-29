import { makeStyles } from "@material-ui/core";
import colors from '../../styles/colors.json';

export const roomCodeStyles = makeStyles({
    roomCodeContainer:{
        height: '40px',
        borderRadius: '8px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        border: `1px solid ${colors.purple.dark}`,
        cursor: 'pointer'
    },
    iconContainer:{
        background: colors.purple.dark,
        padding: '0 12px',
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    codeSpan: {
        display: 'block',
        alignSelf: 'center',
        flex: 1,
        padding: '0 16px 0 12px',
        width: '220px',
        fontSize: '14px',
        fontWeight: 500
    },
    icon:{
        color: colors.white.details
    }
});