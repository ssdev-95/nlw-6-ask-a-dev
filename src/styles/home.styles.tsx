import { makeStyles } from '@material-ui/core';

const { innerWidth:width } = window;

export const homeStyle = makeStyles({
    homeContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    homeRight: {
        width: (width<=1024)?'100%': '60%',
        height: '100%',
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: (width<=1024)?'flex-start':'center',
        position: (width<=1024)?'absolute':'relative',
        zIndex: 666,
        paddingTop: (width<=1024)?'4rem':0
    },
    content: {
        width: (width<=1024)?'90%':'80%',
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
        height: '3rem',
        width: '20rem',
        padding: '0.36rem 1rem',
        marginBottom: '.7rem',
        fontSize: '1rem',
        border: 0,
        borderRadius: '8px'
    }
});