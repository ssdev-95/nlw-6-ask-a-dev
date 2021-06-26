/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState, FormEvent }from 'react';
import { useParams } from "react-router-dom";
import { chatRoomStyles } from "../../styles/chatroom.styles";
import { MyButton } from '../../components/Button';
import { IParams, IQuestion } from "../../types";
import { RoomCode } from '../../components/RoomCode';
import { useAuth } from 'src/hooks/useAuth';
import { database } from 'src/services/firebase.config';

type FirebaseQuestions = Record<string, IQuestion>;

export const ChatRoom = () => {
    const [questions, setQuestions] = useState<IQuestion[]>([]);
    const { id } = useParams<IParams>();
    const {
        questionsContainer,
        chatRoomContainer,
        header,
        content,
        logo,
        title,
        h1,
        span,
        textarea,
        formFoot,
        formFootSpan,
        formFootButton,
        button,
        profile,
        userAvatar,
        userName
    } = chatRoomStyles();
    const [newQuestion, setNewQuestion] = useState('');
    const {user} = useAuth();
    const [roomTitle, setRoomTitle] = useState('');

    async function handleSendQuestion(event: FormEvent) {
        event.preventDefault();

        if(newQuestion.trim()==='') {
            return;
        }


        if(!user) {
            throw new Error('User must be logged in to send questions')
        }

        const question = {
            content: newQuestion,
            author: {
                name: user?.name,
                avatar: user.avatar
            },
            isHighlightened: false,
            isAnswered: false
        }

        await database.ref(`rooms/${id}/questions`).push(question)
        setNewQuestion('');
    }

    useEffect(()=>{
        const roomRef = database.ref(`rooms/${id}`);

        roomRef.on('value', room=>{
            const databaseRoom = room.val();
            setRoomTitle(databaseRoom.title)
            const firebaseQuestions:FirebaseQuestions = databaseRoom.questions ?? {};
            const parsedQuestions = Object.entries(firebaseQuestions).map(([key,value])=>({
                id: key,
                content: value.content,
                author: value.author,
                isHighlightened: value.isHighlightened,
                isAnswered: value.isAnswered
            }));

            setQuestions(parsedQuestions);
        })

        
    }, [id])

    return (
        <div className={chatRoomContainer} >
            <header className={header}>
                <img className={logo} src="/svgs/logo.svg" alt="logo" />
                <RoomCode code={id} />
            </header>
            <main className={`${content} main`}>
                <div className={title} >
                    <h1 className={h1}>Room: {roomTitle}</h1>
                    {
                        questions.length>0 ? (
                            <span className={span}>{questions.length} Question(s)</span>
                        ): (
                            <span className={span}>No Question(s) yet :D</span>
                        )
                    }
                </div>
                <form onSubmit={handleSendQuestion}>
                    <textarea
                      className={textarea}
                      placeholder="What you wanna ask?"
                      onChange={e=>setNewQuestion(e.target.value)}
                      value={newQuestion}
                    />
                    <div className={formFoot}>
                    {
                        !user ? (
                            <span className={formFootSpan}>To send a question, go and <button className={formFootButton}>LogIn.</button></span>
                        ) : (
                            <div className={profile}>
                                <img className={userAvatar} src={user.avatar} alt="User avatar" />
                                <span className={userName} >{user.name}</span>
                            </div>
                        )
                    }
                    <MyButton className={button} disabled={!user} type="submit" >Send Question</MyButton>
                    </div>
                </form>
                <div className={questionsContainer}>
                    Questions here
                    {JSON.stringify(questions)}
                </div>
            </main>
        </div>
    )
}
