import { MyButton } from "../../components/Button";
import { newRoomStyles } from "../../styles/newroom.styles"
import { Aside } from '../../components/Aside';

import { purple } from '../../styles/colors.json';

export function CreateRoomPage() {
    const { newRoomContainer, newRoomRight, content, img, input } = newRoomStyles();

    return (
        <div className={newRoomContainer}>
            <Aside />
            <main className={newRoomRight}>
                <div className={content}>
                    <img className={img} src="svgs/logo.svg" alt="App logo" />
                    <form>
                        <h3>Create a new Room</h3>
                        <input className={input} type="text" placeholder="Room name" />
                        <MyButton bgcolor={purple.light} >
                            <span>Create room</span>
                        </MyButton>
                        <small>Wanna join an existing room? <a href="/">Click here</a></small>
                    </form>
                </div>
            </main>
        </div>
    )
}
