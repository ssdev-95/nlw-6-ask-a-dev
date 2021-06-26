/* eslint-disable @typescript-eslint/no-unused-vars */
import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { MyButton } from "../../components/Button";
import { newRoomStyles } from "../../styles/newroom.styles"
import { Aside } from '../../components/Aside';

import { purple } from '../../styles/colors.json';
import { useAuth } from '../../hooks/useAuth';
import { database } from 'src/services/firebase.config';

export function CreateRoomPage() {
    const {
        newRoomContainer,
        newRoomRight,
        content,
        img,
        input,
        link,
        title,
        paragraph
    } = newRoomStyles();

    const { user } = useAuth();
    const [newRoom, setNewRoom] = useState('');
    const history = useHistory();

    async function handleCreateNewRoom(e: FormEvent) {
        e.preventDefault();

        if(newRoom.trim()==='') {
            return;
        }
        const roomRef = database.ref('rooms');
        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorID: user?.id
        })

        setNewRoom('');
        history.push(`/rooms/${firebaseRoom.key}`);
    }

    return (
        <div className={newRoomContainer}>
            <Aside />
            <main className={newRoomRight}>
                <div className={content}>
                    <img className={img} src="/svgs/logo.svg" alt="App logo" />
                    <form onSubmit={handleCreateNewRoom}>
                        <h1>{user?.name}</h1>
                        <h3 className={title}>Create a new Room</h3>
                        <input
                          className={input}
                          type="text"
                          placeholder="Room name"
                          onChange={event=>setNewRoom(event.target.value)}
                          value={newRoom}
                        />
                        <MyButton type="submit" style={{backgroundColor:purple.light}} >
                            <span>Create room</span>
                        </MyButton>
                        <small className={paragraph}>Wanna join an existing room? <Link className={link} to="/">Click here</Link></small>
                    </form>
                </div>
            </main>
        </div>
    )
}
