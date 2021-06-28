import { makeStyles } from "@material-ui/core";
import { white } from './colors.json';

const { innerWidth:width } = window;

export const sliderStyles = makeStyles({
    sliderContainer: {
        width: '3.95rem',
        height: '1.5rem',
        position: 'absolute',
        top: width>800?'7vh':'90vh',
        right: width>800?'5vw':'45%'
    },
    slider: {
        borderRadius: '999px',
        flex: 1,
        height: '1.5rem',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.2s ease'
    },
    thumb: {
        background: white.details,
        height: '1.25rem',
        width: '1.25rem',
        borderRadius: '50px',
        position: 'absolute',
        top: '2px',
        transition: 'all 0.2s ease'
    }
});