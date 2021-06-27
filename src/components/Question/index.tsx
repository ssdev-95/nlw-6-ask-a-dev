import { questionStyles } from './styles';
import { IQuestionProps } from '../../types';

export const Question = ({ question, children }: IQuestionProps) => {
    const { content, author} = question;
    const {
        questionContainer,
        questionContent,
        questionFoot,
        authorContainer,
        actions,
        authorAvatar,
        authorInfo
    } = questionStyles();

    return (
        <div className={questionContainer}>
            <p className={questionContent}>{content}</p>
            <footer className={questionFoot}>
                <div className={authorContainer}>
                    <img className={authorAvatar} src={author.avatar} alt={`${author.name} avatar`} />
                    <span className={authorInfo}>{author.name}</span>
                </div>
                <div className={actions}>
                    {children}
                </div>
            </footer>
        </div>
    );
}