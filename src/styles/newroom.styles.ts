import { makeStyles } from '@material-ui/core';
import colors from './colors.json';

export const newRoomStyles = makeStyles({
    newRoomContainer: {
        width: '100vw',
        height: '100vh',
        background: colors.white['background'],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});