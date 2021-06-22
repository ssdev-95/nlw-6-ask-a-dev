/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container, Button } from '@material-ui/core';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';

import colors from '../../styles/colors.json';
import styles from '../../styles/home.module.css';
export const Home = () => {

    return (
        <Container style={{backgroundColor: colors.white['background']}} className={styles.homeContainer} >
            <div style={{backgroundColor: colors.purple.dark}} className={styles.homeLeft}>
                <h3>Any question has an answer.</h3>
                <span>Learn and share knowledge with another people</span>
            </div>
            <div className={styles.homeRight}>
                <img src="svgs/logo.svg" alt="App logo" />
                <Button className={styles.button} >
                    <img src="svgs/google.svg" alt="Gmail icon" />
                    <span>Create a chat room with Google</span>
                </Button>
                <small><hr/>&nbsp;or enter a room&nbsp;<hr/></small>
                <form>
                    <input type="text" placeholder="Enter chat room code" />
                    <Button className={styles.button} >
                        <SystemUpdateAltIcon style={{transform: "rotate(45deg)"}} />
                        <span>Join an existing chat room</span>
                    </Button>
                </form>
            </div>
        </Container>
    )
}