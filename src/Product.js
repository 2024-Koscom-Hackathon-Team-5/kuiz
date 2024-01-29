import React, { useState } from 'react';
import './Product.css'

export default function Product() {
	const quiz_list = [
        {
            "id": 1,
            "quiz_name": "ELS는 무엇의 약자인가요?",
            "choice_num": 3,
            "answer": "a)",
            "commentary": "ELS 는 고위험 상품 중 하나로 간주됩니다. ELS 는 기본 주가나...",
            "choices": [
                {
                    "id": 1,
                    "quiz_name": "ELS는 무엇의 약자인가요?",
                    "choice_num": "a)",
                    "choice": "Equity Linked Security",
                    "isAnswer": true,
                    "createdDate": null,
                    "modifiedDate": null
                },
                {
                    "id": 2,
                    "quiz_name": "ELS는 무엇의 약자인가요?",
                    "choice_num": "b)",
                    "choice": "Economic Leverage System",
                    "isAnswer": false,
                    "createdDate": null,
                    "modifiedDate": null
                },
                {
                    "id": 3,
                    "quiz_name": "ELS는 무엇의 약자인가요?",
                    "choice_num": "c)",
                    "choice": "Efficient Loan Strategy",
                    "isAnswer": false,
                    "createdDate": null,
                    "modifiedDate": null
                }
            ],
            "createdDate": null,
            "modifiedDate": null
        },
        {
            "id": 2,
            "quiz_name": "asdfasdfasdfasdfasdf",
            "choice_num": 2,
            "answer": "bbb",
            "commentary": "asdfasdf",
            "choices": [
                {
                    "id": 4,
                    "quiz_name": "asdfasdfasdfasdfasdf",
                    "choice_num": "a)",
                    "choice": "Equity Linked Security",
                    "isAnswer": true,
                    "createdDate": null,
                    "modifiedDate": null
                },
                {
                    "id": 5,
                    "quiz_name": "asdfasdfasdfasdfasdf",
                    "choice_num": "b)",
                    "choice": "Economic Leverage System",
                    "isAnswer": false,
                    "createdDate": null,
                    "modifiedDate": null
                },
                {
                    "id": 6,
                    "quiz_name": "asdfasdfasdfasdfasdf",
                    "choice_num": "c)",
                    "choice": "Efficient Loan Strategy",
                    "isAnswer": false,
                    "createdDate": null,
                    "modifiedDate": null
                }
            ],
            "createdDate": null,
            "modifiedDate": null
        }
    ];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

    const [showAnswer, setShowAnser] = useState(false);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < quiz_list.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
            <div className='wrapper_app'>
                <div className='app'>

                    <>
                        <div className='question-section'>
                            {/* <div className='question-count'>
                                <span>Question {currentQuestion + 1}</span>/{quiz_list.length}
                            </div> */}
                            <span>적금 관련 상품</span>
                            {/* <div className='question-text'>{quiz_list[currentQuestion].quiz_name}</div> */}
                        </div>
                        <br></br>
                        <br></br>
                        
                        <div className='prouct-section'>
                            <button id='product'>
                                <b>KB국민행복적금</b>
                                <br></br>
                                <br></br>
                                가입: KB국민은행
                            </button>
                            <button id='product'>
                                <b>KB국민행복적금</b>
                                <br></br>
                                <br></br>
                                가입: KB국민은행
                            </button>
                            <button id='product'>
                                <b>KB국민행복적금</b>
                                <br></br>
                                <br></br>
                                가입: KB국민은행
                            </button>
                        </div>
                        <div className='prouct-section'>
                            <button id='product'>
                                <b>KB국민행복적금</b>
                                <br></br>
                                <br></br>
                                가입: KB국민은행
                            </button>
                            <button id='product'>
                                <b>KB국민행복적금</b>
                                <br></br>
                                <br></br>
                                가입: KB국민은행
                            </button>
                            <button id='product'>
                                <b>KB국민행복적금</b>
                                <br></br>
                                <br></br>
                                가입: KB국민은행
                            </button>
                        </div>
                        <div className='prouct-section'>
                            <button id='product'>
                                <b>KB국민행복적금</b>
                                <br></br>
                                <br></br>
                                가입: KB국민은행
                            </button>
                            <button id='product'>
                                <b>KB국민행복적금</b>
                                <br></br>
                                <br></br>
                                가입: KB국민은행
                            </button>
                            <button id='product'>
                                <b>KB국민행복적금</b>
                                <br></br>
                                <br></br>
                                가입: KB국민은행
                            </button>
                        </div>
                        
                        {/* <div className='answer-section'>
                            {quiz_list[currentQuestion].choices.map((choices) => (
                                <button id='answers' onClick={() => handleAnswerOptionClick(choices.isAnswer)}>{choices.choice_num + ' ' + choices.choice}</button>
                            ))}
                        </div> */}
                        
                    </>
                        
                </div>
                {/* <div className='app_right'>
                    <img scr="./imgs/img1.jpg"></img>
                </div> */}
            </div>

	);
}