import { useState, FormEvent }from 'react';
import { useHistory, useParams } from 'react-router-dom';

import StarOutlineIcon from '@material-ui/icons/StarOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

import { MyButton } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { Question } from '../../components/Question';

import { useAuth } from 'src/hooks/useAuth';
import { useTheme } from '../../hooks/useTheme';
import { useQuestions } from 'src/hooks/useQuestion';

import { IParams } from "../../types";
import { database } from 'src/services/firebase.config';

import { chatRoomStyles } from "../../styles/chatroom.styles";
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
    const { theme } = useTheme();
    const { user, signInWithGoogle } = useAuth();
    const history = useHistory();

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

    async function handleLateSignIn() {
        if(!user) {
            await signInWithGoogle();
            return;
        }
    }

    return (
        <div
          className={chatRoomContainer}
          style={{ backgroundColor: theme==='light'?colors.background.light:colors.background.dark}}
        >
            <header className={header}>
                <img onClick={()=>history.push('/')}  className={logo} src="/svgs/logo.svg" alt="logo" />
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
                      style={{backgroundColor: theme==='light'?colors.white.details:colors.gray.soft}}
                    />
                    <div className={formFoot}>
                    {
                        !user ? (
                            <span className={formFootSpan}>To send a question, go and <button className={formFootButton} onClick={handleLateSignIn}>LogIn.</button></span>
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
                            <Question key={question?.id} question={question}>
                                {
                                    !question.isAnswered && (
                                        <button
                                            id="highlightbtn"
                                            style={{color: colors.gray.dark}}
                                            className={actionButton}
                                        >
                                            <ChatBubbleOutlineIcon />
                                        </button>
                                    )
                                }

                                <button
                                  id="likebtn"
                                  className={actionButton}
                                  style={{color: question.likeCount>0 ? colors.purple.dark : colors.gray.dark}}
                                  onClick={()=>{
                                      handleLikeQuestion(question?.id, user?.id)
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
