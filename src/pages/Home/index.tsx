/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';

import { useAuth } from '../../hooks/useAuth';

import { MyButton } from '../../components/Button';
import { Aside } from '../../components/Aside';
import { Slider } from '../../components/Slider';

import { homeStyle } from '../../styles/home.styles';
import { red, purple } from '../../styles/colors.json';
import { database } from 'src/services/firebase.config';
export const Home = () => {
    const { homeContainer, homeRight, content, img, input } = homeStyle();
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();
    const [existingRoom, setExistingRoom] = useState('');

    const lol = ''

   const handleCreateRoom = async () => {
        if(!user) {
            await signInWithGoogle();
        }
        history.push('/rooms/new')
    }

    const handleJoinRoom = async (e: FormEvent) => {
        e.preventDefault();
        if(existingRoom.trim()==='') {
            return;
        }

        const roomRef = await database.ref(`rooms/${existingRoom}`).get();
        if(!roomRef.exists()) {
            alert('Room does not exists!');
            return;
        }

        history.push(`/rooms/${existingRoom}`);
        setExistingRoom('');
    }

    return (
        <div className={homeContainer} >
            <Slider />
            <Aside />
            <main className={homeRight}>
                <div className={content}>
                    <img className={img} src="/svgs/logo.svg" alt="App logo" />
                    <MyButton style={{backgroundColor:red.light}} onClick={handleCreateRoom} >
                        <>
                        <img src="/svgs/google.svg" alt="Gmail icon" />
                        <span>Create a chat room with Google</span>
                        </>
                    </MyButton>
                    <div className="separator" >or enter a room</div>
                    <form onSubmit={handleJoinRoom} >
                        <input
                          className={input}
                          type="text"
                          placeholder="Enter chat room code"
                          onChange={(event)=>setExistingRoom(event.target.value)}
                          value={existingRoom}
                        />
                        <MyButton type="submit" style={{backgroundColor:purple.light}} >
                            <>
                            <SystemUpdateAltIcon style={{transform: "rotate(-90deg)"}} />
                            <span>Join an existing chat room</span>
                            </>
                        </MyButton>
                    </form>
                </div>
            </main>
        </div>
    );
}