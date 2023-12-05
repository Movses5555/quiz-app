export interface Question {
	id: string;
	questionText: string;
	options: string[];
	correctOptionIndex: number;
}

export interface SelectedData {
	questionId: string,
	selectedOptionIndex: number
}
  
export const quizData: Question[] = [
	{
		id: "1",
		questionText: 'What is the capital of France?',
		options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
		correctOptionIndex: 2,
	},
	{
		id: "2",
		questionText: 'What is the capital of German?',
		options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
		correctOptionIndex: 0,
	},
	{
		id: "3",
		questionText: 'What is the capital of Armenia?',
		options: ['Berlin', 'Yerevan', 'Paris', 'Rome'],
		correctOptionIndex: 1,
	},
	{
		id: "4",
		questionText: 'What is the capital of Georgia?',
		options: ['Berlin', 'Yerevan', 'Tbilisi', 'Rome'],
		correctOptionIndex: 2,
	}
];
  

  