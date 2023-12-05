import React from 'react';
import styles from './QuestionCard.module.scss';
import { Question, SelectedData } from '../quizData';
  
interface QuestionCardProps {
	question: Question;
	selectedData: SelectedData[];
	onAnswer: (questionId: string, selectedOptionIndex: number) => void;
}
  
export const QuestionCard: React.FC<QuestionCardProps> = ({ question, selectedData, onAnswer }) => {  
	return (
		<div className={`${styles.questionCard} `}>
			<p>{question.questionText}</p>
			<ul>
				{
					question.options.map((option, index) => {
						const isSelected = selectedData?.find(item => item.questionId === question.id && item.selectedOptionIndex === index);
						return (
							<li
								key={index}
								className={isSelected ? styles.selected : ''}
								onClick={() => onAnswer(question.id, index)}
							>
								{option}
							</li>
						)
					})
				}
			</ul>
		</div>
	);
};
