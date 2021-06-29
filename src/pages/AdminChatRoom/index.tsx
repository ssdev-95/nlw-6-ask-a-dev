/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState/*, useEffect*/ }from 'react';
import { useParams, useHistory } from "react-router-dom";

import ReportOutlinedIcon from '@material-ui/icons/ReportOutlined';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import StarOutlineIcon from '@material-ui/icons/StarOutline';

import colors from '../../styles/colors.json';
import { chatRoomStyles } from "../../styles/chatroom.styles";
import { modalStyle } from 'src/styles/modal.styles';

import { MyButton } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { Question } from '../../components/Question';
import { CModal } from '../../components/CModal';

import { useTheme } from '../../hooks/useTheme';
import { useAuth } from 'src/hooks/useAuth';
import { useQuestions } from 'src/hooks/useQuestion';

import { database } from 'src/services/firebase.config';
import { IParams } from "../../types";

export const AdminChatRoom = () => {
    const { id } = useParams<IParams>();
    const { push } = useHistory();
    const { theme } = useTheme();
    const { questions, roomTitle, handleLikeQuestion } = useQuestions(id);
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
        floatButton,
        actionButton
    } = chatRoomStyles();
    const { modalActions, modalActionButton } = modalStyle();

    const { user } = useAuth();
    const { innerWidth:width } = window;
    const  [deleteModalOpen, setDeleteModalOpen] = useState(false);
    const [ questToDeleteID, setQuestToDeleteID] = useState('');
    const  [closeRoomModalOpen, setCloseRoomModalOpen] = useState(false);

    const toggleCloseRoomModal = () => {
        setCloseRoomModalOpen(!closeRoomModalOpen);
    }

    const toggleDeleteQuestionModal = () => {
        setDeleteModalOpen(!deleteModalOpen);
    }

    const handleCloseRoom = async () => {
        await database.ref(`/rooms/${id}`).update({
            ended_at: new Date()
        });
        toggleCloseRoomModal();
        push('/');
    }

    const handleDeleteQuestion = async (questionId:string) => {
        await database.ref(`/rooms/${id}/questions/${questionId}`).remove();
        toggleDeleteQuestionModal();
    }

    return (
        <div
          className={chatRoomContainer}
          style={{backgroundColor: theme==='light'?colors.background.light:colors.background.dark}}
        >
            <CModal isOpen={closeRoomModalOpen}>
                <span>Are you sure about close this room ?</span>
                <div className={modalActions}>
                    <MyButton onClick={toggleCloseRoomModal} style={{backgroundColor: colors.gray.medium}} className={modalActionButton}>
                        <span>Cancel</span>
                    </MyButton>
                    <MyButton onClick={handleCloseRoom} style={{backgroundColor: colors.red.dark}} className={modalActionButton}>
                        <span>Close</span>
                    </MyButton>
                </div>
            </CModal>
            <CModal isOpen={deleteModalOpen}>
                <span>Are you sure about delete this question ?</span>
                <div className={modalActions}>
                    <MyButton onClick={toggleDeleteQuestionModal} style={{backgroundColor: colors.gray.medium}} className={modalActionButton}>
                        <span>Cancel</span>
                    </MyButton>
                    <MyButton onClick={()=>handleDeleteQuestion(questToDeleteID)} style={{backgroundColor: colors.red.dark}} className={modalActionButton}>
                        <span>Confirm</span>
                    </MyButton>
                </div>
            </CModal>
            <header className={header}>
                <img onClick={()=>push('/')} className={logo} src="/svgs/logo.svg" alt="logo" />
                <div className={headerActions}>
                    <RoomCode code={id} />
                    <MyButton onClick={toggleCloseRoomModal} id="closeRoomButton" className={floatButton}>
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
                                  type="button"
                                  onClick={()=>{
                                      setQuestToDeleteID(question.id)
                                      toggleDeleteQuestionModal()
                                  }}
                                  style={{color: colors.gray.dark}}
                                  className={actionButton}
                                  id="deletebtn"
                                >
                                    <DeleteOutlineIcon />
                                </button>
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
