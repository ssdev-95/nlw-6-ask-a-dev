import { makeStyles } from '@material-ui/core';
import colors from './colors.json';

export const homeStyle = makeStyles({
    homeContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        backgroundColor: colors.white['background']
    },
    homeLeft: {
        flex: .4,
        paddingLeft: '2rem',
        backgroundImage: 'url(svgs/illustration.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 10%',
        backgroundColor: colors.purple.dark,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection:'column',
        color: colors.white.details
    },
    homeRight: {
        flex: .6,
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        width: '80%',
        height: '50%',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'space-between',
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
        fontSize: '1rem',
        backgroundColor: colors.white.details,
        borderColor:colors.white.details
    }
});