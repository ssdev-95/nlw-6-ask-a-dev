/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, FormEvent }from 'react';
import { useParams, useHistory } from "react-router-dom";

import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import colors from '../../styles/colors.json';

import { chatRoomStyles } from "../../styles/chatroom.styles";
import { MyButton } from '../../components/Button';
import { IParams } from "../../types";
import { RoomCode } from '../../components/RoomCode';
import { Question } from '../../components/Question';
import { useAuth } from 'src/hooks/useAuth';
import { database } from 'src/services/firebase.config';
import { useQuestions } from 'src/hooks/useQuestion';

export const AdminChatRoom = () => {
    const { id } = useParams<IParams>();
    const {push} = useHistory();
    const { questions, roomTitle } = useQuestions(id);
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
        headerActions,
        floatButton
    } = chatRoomStyles();

    const { user } = useAuth();
    const { innerWidth:width } = window;

    const handleCloseRoom = async () => {
        await database.ref(`/rooms/${id}`).update({
            ended_at: new Date()
        });

        push('/');
    }


    const handleDeleteQuestion = async (questionId:string) => {
        if(window.confirm('Are you sure to delete this question?')) {
            await database.ref(`/rooms/${id}/questions/${questionId}`).remove();
        }
    }

    return (
        <div className={chatRoomContainer} >
            <header className={header}>
                <img className={logo} src="/svgs/logo.svg" alt="logo" />
                <div className={headerActions}>
                    <RoomCode code={id} />
                    <MyButton onClick={handleCloseRoom} id="closeRoomButton" className={floatButton}>
                        <ReportOutlinedIcon />
                        { width>800 && <span>Close room</span> }
                    </MyButton>
                </div>
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
                <div className={questionsContainer}>
                    {
                        questions.length>0 ? questions.map(question=>(
                            <Question key={question.id} question={question} >
                                <button
                                  type="button"
                                  onClick={()=>handleDeleteQuestion(question.id)}
                                >
                                    <DeleteOutlineIcon />
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
