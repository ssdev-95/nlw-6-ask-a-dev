/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container, Button } from '@material-ui/core';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';

import colors from '@/styles/colors.json';
import '@/styles/home.css';
export const Home = () => {

    return (
        <Container style={{backgroundColor: colors.white['background']}} className="home-container">
            <div style={{backgroundColor: colors.purple.dark}} className="home-left">
                <h3>Any question has an answer.</h3>
                <span>Learn and share knowledge with another people</span>
            </div>
            <div className="home-right">
                <img src="svgs/logo.svg" alt="App logo" />
                <Button className="button" >
                    <img src="svgs/google.svg" alt="Gmail icon" />
                    Create a chat room with Google
                </Button>
                <small><hr/>&nbsp;or enter a room&nbsp;<hr/></small>
                <form>
                    <input type="text" placeholder="Enter chat room code" />
                    <Button className="button" >
                        <SystemUpdateAltIcon style={{transform: "rotate(45deg)"}} />
                        Join an existing chat room
                    </Button>
                </form>
            </div>
        </Container>
    )
}