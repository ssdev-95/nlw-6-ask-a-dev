/* eslint-disable @typescript-eslint/no-unused-vars */
// import FilterNoneIcon from '@material-ui/icons/FilterNone';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { IRoomCode } from '../../types';
import { roomCodeStyles } from './styles';

export const RoomCode = ({ code }: IRoomCode) => {
    const { roomCodeContainer, iconContainer, codeSpan, icon } = roomCodeStyles();

    function sendCodeToClipboard() {
        navigator.clipboard.writeText(code)
    }

    return (
        <button className={roomCodeContainer} onClick={sendCodeToClipboard} >
            <div className={iconContainer} >
                <LibraryBooksIcon className={icon} />
            </div>
            <span className={codeSpan} >Room {code}</span>
        </button>
    )
}