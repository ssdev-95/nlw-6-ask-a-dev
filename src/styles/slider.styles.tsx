import { makeStyles } from "@material-ui/core";
import { white } from './colors.json';

export const sliderStyles = makeStyles({
    sliderContainer: {
        width: '2.7rem',
        height: '1rem',
        position: 'absolute'
    },
    slider: {
        borderRadius: '999px',
        flex: 1,
        height: '1.1rem',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.2s ease'
    },
    switcher: {
        background: 'rgba(0,0,0,0)',
        borderWidth: 0
    },
    thumb: {
        background: white.details,
        height: '.85rem',
        width: '.85rem',
        borderRadius: '50px',
        position: 'absolute',
        top: '2px',
        transition: 'all 0.2s ease'
    }
});