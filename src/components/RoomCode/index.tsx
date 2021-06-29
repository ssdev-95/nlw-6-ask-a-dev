/* eslint-disable @typescript-eslint/no-unused-vars */
// import FilterNoneIcon from '@material-ui/icons/FilterNone';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { useTheme } from '../../hooks/useTheme';
import { roomCodeStyles } from './styles';
import  colors from '../../styles/colors.json';
import { IRoomCode } from '../../types';

export const RoomCode = ({ code }: IRoomCode) => {
    const { theme } = useTheme();
    const { roomCodeContainer, iconContainer, codeSpan, icon } = roomCodeStyles();

    function sendCodeToClipboard() {
        navigator.clipboard.writeText(code)
    }

    return (
        <button
          className={roomCodeContainer}
          onClick={sendCodeToClipboard}
          style={{backgroundColor: theme==='light'?colors.white.details:colors.gray.soft}}
        >
            <div className={iconContainer} >
                <LibraryBooksIcon className={icon} />
            </div>
            <span className={codeSpan} >Room {code}</span>
        </button>
    )
}