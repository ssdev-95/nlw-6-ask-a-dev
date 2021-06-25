/* eslint-disable @typescript-eslint/no-unused-vars */
import { useHistory } from 'react-router-dom';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';

import { useAuth } from '../../hooks/useAuth';

import { MyButton } from '../../components/Button';
import { Aside } from '../../components/Aside';

import { homeStyle } from '../../styles/home.styles';
import { red, purple } from '../../styles/colors.json';
export const Home = () => {
    const { homeContainer, homeRight, content, img, input } = homeStyle();
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();

    const lol = ''

   const handleCreateRoom = async () => {
        if(!user) {
            await signInWithGoogle();
        }
        history.push('/rooms/new')
    }

    return (
        <div className={homeContainer} >
            <Aside />
            <main className={homeRight}>
                <div className={content}>
                    <img className={img} src="svgs/logo.svg" alt="App logo" />
                    <MyButton bgcolor={red.light} callback={handleCreateRoom} >
                        <img src="svgs/google.svg" alt="Gmail icon" />
                        <span>Create a chat room with Google</span>
                    </MyButton>
                    <div className="separator" >or enter a room</div>
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