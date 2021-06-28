import { useState, useEffect } from 'react';
import { database } from 'src/services/firebase.config';
import { IQuestion } from '../types';
import { useAuth }from './useAuth';

type FirebaseQuestions = Record<string, {
    id: string;
    author: {
        name:string;
        avatar: string;
    };
    content: string;
    isAnswered: boolean;
    isHighlightened: boolean;
    likes: Record<string, {
        authorId: string;
    }>;
}>;

export function useQuestions(id: string) {
    const [questions, setQuestions] = useState<IQuestion[]>([]);
    const [roomTitle, setRoomTitle] = useState('');
    const { user } = useAuth();
    const [adminID, setAdminID] = useState('');

    const handleLikeQuestion = async (
        questionID:string,
        userID: string|undefined
    ) => {
        const question = questions.find(quest=>quest.id===questionID);
        const likeId = (question?.likes.find(like=>like.authorId===userID))?.id;

        if(likeId) {
            await database.ref(`rooms/${id}/questions/${questionID}/likes/${likeId}`).remove();
        } else {
            await database.ref(`rooms/${id}/questions/${questionID}/likes`).push({
                authorID: userID
            })
        }
    }

    useEffect(()=>{
        const roomRef = database.ref(`rooms/${id}`);

        roomRef.on('value', room=>{
            const databaseRoom = room.val();
            setAdminID(databaseRoom.authorID)

            setRoomTitle(databaseRoom.title)
            const firebaseQuestions:FirebaseQuestions = databaseRoom.questions ?? {};
            const parsedQuestions = Object.entries(firebaseQuestions).map(([key,value])=>({
                id: key,
                content: value.content,
                author: value.author,
                isHighlightened: value.isHighlightened,
                isAnswered: value.isAnswered,
                likeCount: Object.values(value.likes??{}).length,
                likes: Object.entries(value.likes??{}).map(like=>({
                    id: like[0],
                    authorId: like[1].authorId
                }))
            }));

            setQuestions(parsedQuestions);
        })
        
        return ()=>{
            roomRef.off('value');
        };
    }, [id, user?.id])

    return { questions, roomTitle, adminID, handleLikeQuestion };
};