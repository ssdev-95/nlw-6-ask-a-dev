import { newRoomStyles } from "src/styles/newroom.styles"

export function CreateRoomPage() {
    const { newRoomContainer } = newRoomStyles();

    return (
        <div className={newRoomContainer}>
            <h1>New Room page</h1>
        </div>
    )
}