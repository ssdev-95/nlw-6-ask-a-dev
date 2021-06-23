/* eslint-disable @typescript-eslint/no-unused-vars */
import { useHistory } from 'react-router-dom';
import { Container, Button } from '@material-ui/core';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
import { MyButton } from '../../components/Button';

import { homeStyle } from '../../styles/home.styles';
import { red, purple } from '../../styles/colors.json';
export const Home = () => {
    const { homeContainer, homeLeft, homeRight, content, img, input } = homeStyle();
    const { push } = useHistory();

    return (
        <div className={homeContainer} >
            <aside className={homeLeft}>
                <h3>Any question has an answer.</h3>
                <span>Learn and share knowledge with another people</span>
            </aside>
            <main className={homeRight}>
                <div className={content}>
                    <img className={img} src="svgs/logo.svg" alt="App logo" />
                    <MyButton bgcolor={red.light} callback={()=>push('/rooms/new')} >
                        <img src="svgs/google.svg" alt="Gmail icon" />
                        <span>Create a chat room with Google</span>
                    </MyButton>
                    <small>&nbsp;or enter a room&nbsp;</small>
                    <form>
                        <input className={input} type="text" placeholder="Enter chat room code" />
                        <MyButton bgcolor={purple.light} >
                            <SystemUpdateAltIcon style={{transform: "rotate(-90deg)"}} />
                            <span>Join an existing chat room</span>
                        </MyButton>
                    </form>
                </div>
            </main>
        </div>
    );
}