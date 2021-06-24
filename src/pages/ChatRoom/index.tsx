import { chatRoomStyles } from "src/styles/chatroom.styles"

export const ChatRoom = () => {
    const { chatRoomContainer } = chatRoomStyles();

    return (
        <div className={chatRoomContainer} >
            <h2>Chat Room</h2>
        </div>
    )
}