import { makeStyles } from "@material-ui/core";
import colors from './colors.json';

const { innerWidth:width } = window;

export const landingStyle = makeStyles({
    landingContainer: {
        height: '100%',
        width: '100%',
        backgroundImage: 'url(/svgs/undraw.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: width>800?'95% 50%':'80% 190%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: width>800?'flex-start':'center',
        justifyContent: 'flex-start',
        padding: width>800?'3rem 0 3rem 4rem':'4rem 0 0',
        gap: width>800?'6.5rem':'20rem'
    },
    innerContainer: {
        width: width>550?'33vw':'85vw',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: width>800?'20vh':'5vh'
    },
    titleContainer: {
        width: '100%',
        gap: '1.75rem',
        display: 'flex',
        flexDirection: 'column'
    },
    button: {
        color: colors.white.details,
        background: colors.purple.dark,
        width: width>600?'24vw':'100%',
        height: '8vh',
        margin: '0 auto',
        border: 0,
        borderRadius: '8px'
    },
    paragraph: {
        fontSize: width>800?'4.5rem':'2.58rem',
        color: colors.purple.dark,
        fontWeight: 700,
        fontFamily: 'Roboto'
    },
    span: {
        color: colors.gray.medium,
        fontWeight: 600,
        fontSize: '1.75rem',
        fontFamily: 'Roboto'
    }
});