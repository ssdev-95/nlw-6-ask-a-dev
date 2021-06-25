import { Link } from 'react-router-dom';
import { MyButton } from "../../components/Button";
import { newRoomStyles } from "../../styles/newroom.styles"
import { Aside } from '../../components/Aside';

import { purple } from '../../styles/colors.json';
import { useAuth } from '../../hooks/useAuth';

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

    return (
        <div className={newRoomContainer}>
            <Aside />
            <main className={newRoomRight}>
                <div className={content}>
                    <img className={img} src="svgs/logo.svg" alt="App logo" />
                    <form>
                        <h1>{user?.name}</h1>
                        <h3 className={title}>Create a new Room</h3>
                        <input className={input} type="text" placeholder="Room name" />
                        <MyButton bgcolor={purple.light} >
                            <span>Create room</span>
                        </MyButton>
                        <small className={paragraph}>Wanna join an existing room? <Link className={link} to="/">Click here</Link></small>
                    </form>
                </div>
            </main>
        </div>
    )
}
