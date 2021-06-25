import { useParams } from "react-router-dom";
import { chatRoomStyles } from "src/styles/chatroom.styles"
import { IParams } from "src/types";

export const ChatRoom = () => {
    const { chatRoomContainer } = chatRoomStyles();
    const { id } = useParams() as IParams;

    return (
        <div className={chatRoomContainer} >
            <h2>Chat Room: {id}</h2>
        </div>
    )
}
