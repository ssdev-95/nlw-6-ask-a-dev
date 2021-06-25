import { makeStyles } from "@material-ui/core";
import colors from './colors.json';

const { innerWidth:width } = window;

export const asideStyles = makeStyles({
    aside: {
        height: '100%',
        width: (width<=1024)?'100%': '40%',
        paddingLeft: '2rem',
        backgroundImage: 'url(svgs/illustration.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50%',
        backgroundColor: colors.purple.dark,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: (width<=1024)?'flex-end':'center',
        flexDirection:'column',
        color: colors.white.details,
        position: 'relative',
        paddingBottom: (width<=1024)?'4rem':0,
    },
    strong: {
        font: '700 36px Poppins, sans-serif',
        lineHeight: '42px',
        marginTop: '16px'
    },
    paragraph: {
        fontSize: '24px',
        lineHeight: '32px',
        mrginTop: '16px',
        color: '#f8f8f8'
    }
});