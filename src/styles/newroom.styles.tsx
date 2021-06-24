import { makeStyles } from '@material-ui/core';
import colors from './colors.json';

const { innerWidth:width } = window;

export const newRoomStyles = makeStyles({
    newRoomContainer: {
        width: '100vw',
        height: '100vh',
        background: colors.white['background'],
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    newRoomLeft: {
        height: '100%',
        width: (width<=1024)?'100%': '40%',
        paddingLeft: '2rem',
        backgroundImage: 'url(svgs/illustration.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 10%',
        backgroundColor: colors.purple.dark,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection:'column',
        color: colors.white.details,
        position: 'relative'
    },
    newRoomRight: {
        width: (width<=1024)?'100%': '60%',
        height: '100%',
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: (width<=1024)?'absolute':'relative',
        zIndex: 666
    },
    content: {
        width: '80%',
        height: '50%',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    img: {
        height: '3rem'
    },
    input: {
        height: '2rem',
        width: '20rem',
        padding: '0.36rem 1rem',
        marginBottom: '.7rem',
        marginTop: '1.5rem',
        fontSize: '1rem',
        backgroundColor: colors.white.details,
        borderColor:colors.white.details
    }
});