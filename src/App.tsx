import React, { useEffect, useState } from 'react';
import { quizData, Question, SelectedData } from './quizData';
import { QuestionCard } from './components/QuestionCard';
import styles from './App.module.scss';


const App: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedData, setSelectedData] = useState<SelectedData[]>([]);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);

  useEffect(() => {
    if(selectedData.length === quizData.length) {
      setTimeout(() => {
        setShowScore(true);
      }, 300)
    }
  }, [selectedData])

  const handleAnswer = (questionId: string, selectedOptionIndex: number) => {
    let data:SelectedData[] = selectedData;
    if(selectedData?.find((item: SelectedData) => item.questionId === questionId)) {
      data = data.map((item: SelectedData) => {
        if(item.questionId === questionId) {
          return {
            ...item,
            selectedOptionIndex,
          }
        }
        return item;
      })
    } else {
      data = [
        ...data,
        { questionId, selectedOptionIndex }
      ]
    }
    setSelectedData(data);
    const currentQuestion: Question = quizData[currentQuestionIndex];
    if (selectedOptionIndex === currentQuestion.correctOptionIndex) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex < quizData.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      }, 200)
    }
  };

  const handlePrevClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleStartNewQuiz = () => {
    setSelectedData([]);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className={styles.app}>
      <h1>Quiz App</h1>
      {
        showScore ? (
          <div className={styles.quizCompleted}>
            <h2>Quiz Completed!</h2>
            <p>Your score: <strong>{score}</strong> / <strong>{quizData.length}</strong></p>
          </div>
        ) : (
          <>
            <QuestionCard
              question={quizData[currentQuestionIndex]}
              selectedData={selectedData}
              onAnswer={handleAnswer}
            />
            
          </>
        )
      }
      <div className={styles.navigationButtons}>
        {
          showScore ? (
            <button onClick={handleStartNewQuiz} >
              Start New Quiz
            </button>
          ) : (
            <>
              <button onClick={handlePrevClick} disabled={currentQuestionIndex === 0}>
                Previous
              </button>
              
              <button onClick={handleNextClick} disabled={currentQuestionIndex === quizData.length - 1}>
                Next
              </button>
            </>
          )
        }
      </div>
    </div>
  );
};

export default App;
