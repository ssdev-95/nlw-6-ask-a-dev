import { useState, FormEvent }from 'react';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import { useParams } from "react-router-dom";
import { chatRoomStyles } from "../../styles/chatroom.styles";
import { MyButton } from '../../components/Button';
import { IParams } from "../../types";
import { RoomCode } from '../../components/RoomCode';
import { Question } from '../../components/Question';
import { useAuth } from 'src/hooks/useAuth';
import { database } from 'src/services/firebase.config';
import { useQuestions } from 'src/hooks/useQuestion';
import colors from '../../styles/colors.json';

export const ChatRoom = () => {
    const { id } = useParams<IParams>();
    const { questions, roomTitle , handleLikeQuestion} = useQuestions(id);
    const {
        questionsContainer,
        emptyContainer,
        emptyStateText,
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
        userName,
        actionButton
    } = chatRoomStyles();
    const [newQuestion, setNewQuestion] = useState('');
    const { user } = useAuth();

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
                    {
                        questions.length>0 ? questions.map(question=>(
                            <Question key={id} question={question}>
                                <button
                                  id="likebtn"
                                  className={actionButton}
                                  style={{color: question.likeId ? colors.purple.dark : colors.gray.dark}}
                                  onClick={()=>{
                                      handleLikeQuestion(id, user?.id, question.likeId)
                                  }}
                                >
                                    <span>{question.likeCount} Like(s)</span>
                                    <StarOutlineIcon />
                                </button>
                            </Question>
                        )): (
                            <div className={emptyContainer}>
                                <span className={emptyStateText}>Sorry, no questions yet</span>
                                <span className={emptyStateText}>Start sending questions today</span>
                            </div>
                        )
                    }
                </div>
            </main>
        </div>
    )
}
