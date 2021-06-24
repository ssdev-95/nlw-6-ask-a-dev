import { makeStyles } from '@material-ui/core';
import { white } from './colors.json';

export const chatRoomStyles = makeStyles({
    chatRoomContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: white.background
    }
});
