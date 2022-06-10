import React, { useState } from 'react';
import './React_Quiz.css';

export default function React_Quiz() {
    const questions = [
        {
            questionText: 'What does the character Popeye famously eat to boost his strength?',
            answerOptions: [
                { answerText: 'Chocolate', isCorrect: false },
                { answerText: 'Chicken', isCorrect: false },
                { answerText: 'Spinach', isCorrect: true },
                { answerText: 'Protein Powder', isCorrect: false },
            ],
        },
        {
            questionText: ' The phrase ‘Hakuna matata’, made popular by a song in The Lion King means ‘no worries’ in which language?',
            answerOptions: [
                { answerText: 'Spanish', isCorrect: false },
                { answerText: 'Swahili', isCorrect: true },
                { answerText: 'French', isCorrect: false },
                { answerText: 'Thai', isCorrect: false },
            ],
        },
        {
            questionText: 'The Cartoon Network channel was launched in the USA in which year?',
            answerOptions: [
                { answerText: '1992', isCorrect: true },
                { answerText: '1990', isCorrect: false },
                { answerText: '1889', isCorrect: false },
                { answerText: '1993', isCorrect: false },
            ],
        },
        {
            questionText: ' Which cartoon series features the character Princess Bonnibel Bubblegum?',
            answerOptions: [
                { answerText: 'Oswald', isCorrect: false },
                { answerText: 'Sleeping Beauty', isCorrect: false },
                { answerText: 'The Powerpuff Girls', isCorrect: false },
                { answerText: 'Adventure Time', isCorrect: true },
            ],
        },
        {
            questionText: 'How many years old is the character Lisa Simpson in The Simpsons?',
            answerOptions: [
                { answerText: '45', isCorrect: false },
                { answerText: '110', isCorrect: false },
                { answerText: '90', isCorrect: false },
                { answerText: '80', isCorrect: true },
            ],
        },
        {
            questionText: 'What vegetable is Warner Bros. character Bugs Bunny often portrayed eating?',
            answerOptions: [
                { answerText: 'Ice Cream', isCorrect: false },
                { answerText: 'Lollipop', isCorrect: false },
                { answerText: 'A Carrot', isCorrect: true },
                { answerText: 'Spinach', isCorrect: false },
            ],
        },
        {
            questionText: 'In Family Guy, what is the name of the street the Griffin family live on?',
            answerOptions: [
                { answerText: 'NeverLand', isCorrect: false },
                { answerText: 'Little City', isCorrect: false },
                { answerText: 'Modern Town', isCorrect: false },
                { answerText: 'Spooner Street', isCorrect: true },
            ],
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };
    return (
        <div className='react_box'>
            <div className='react-box-app'>
                {showScore ? (
                    <div className='score-section'>
                        You scored {score} out of {questions.length}
                    </div>
                ) : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className='question-text'>{questions[currentQuestion].questionText}</div>
                        </div>
                        <div className='answer-section'>
                            {questions[currentQuestion].answerOptions.map((answerOption) => (
                                <button className='options-btn' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}