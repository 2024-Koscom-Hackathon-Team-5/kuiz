import React, { useState, useEffect } from 'react';
import './QuizPage.css'
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { setCookie, getCookie } from './Etc/Cookies';
import axios from "axios";

export default function QuizPage({apiUrl}) {
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
    const [clickedAnswer, setClickedAnswer] = useState(0);

    const [searchName, setSearchName] = useState('ETF');

    useEffect(() => {
        const name = getCookie('search_name');
        setSearchName(name);
        console.log(searchName);

        //Access-Control-Allow-Origin: *
        axios.get(`${apiUrl}api/kuiz/`,
                    {params: {keyword: searchName}})
                .then(function (response) {
                // response  

                if(response.data.count > 0 ) {
                    //renderFunction
                    console.log('response: '+response);
                    //setLists(response.data)
                }
                else {
                    //검색 결과가 없습니다.
                    alert("검색 결과가 없습니다 !!");
                }
                }).catch(function (error) {
                // 오류발생시 실행
                }).then(function() {
                // 항상 실행
                });
    },[]);

	const handleAnswerOptionClick = (isCorrect, num) => {
        setClickedAnswer(num);
        setShowAnser(true);
        setScore(score + 1);
	};
    const navigate = useNavigate();
    const letsStart = () => {
        navigate("/product");
      };
    const madeViewOfNext = () => {
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < quiz_list.length) {
			setCurrentQuestion(nextQuestion);

            //reset
            setClickedAnswer(0);
            setShowAnser(false);
		} else {
			setShowScore(true);
		}
    };

	return (
            <div className='wrapper_app'>
                <div className='app'>
                    {showScore ? (
                        <div className='score-section'>
                            You scored {score} out of {quiz_list.length}
                        </div>
                    ) : (
                        <>
                            <div className='question-section'>
                                <div className='question-count'>
                                    <span>문제 {currentQuestion + 1}.</span>
                                </div>
                                <div className='question-text'>{quiz_list[currentQuestion].quiz_name}</div>
                            </div>
                            <div className='answer-section'>
                                {quiz_list[currentQuestion].choices.map((choices) => (
                                    <button id='answers' onClick={() => handleAnswerOptionClick(choices.isAnswer, choices.choice_num)}>{choices.choice_num + ' ' + choices.choice}</button>
                                ))}
                            </div>
                            
                        </>
                        
                    )}
                </div>
                <div className='wrapper_right'>
                    {showAnswer ? (
                        <>
                            <div className='app_right'>
                                <p id='quiz_commentary'>{quiz_list[currentQuestion].commentary}</p>
                                <button id='NextBtn' onClick={() => madeViewOfNext()}>{'다음 문제 풀기 >'}</button>                                                                                      
                            </div>
                            <div class="block-container">
                                <div class="block-element0">잠깐! 몰랐던 사실, 친구도 알려주기</div>
                                <button class="block-element"><img src="/imgs/face.png" className='sns_image' /></button>
                                <button class="block-element"><img src="/imgs/insta.jpg" className='sns_image' /></button>
                                <button class="block-element"><img src="/imgs/kakao.png" className='sns_image' /></button>
                            </div>
                            <br></br>
                            <button id='ADBtn' onClick={() => letsStart()}>{'확실한 원금 보장 상품을 원한다면? >'}</button>
                        </>
                    ) : (
                        <img src="/imgs/img4.png" className='right_img'/>
                    )}
                </div>
        </div>

	);
}

const BtnSearch = styled.button`
  background: url( "imgs/search.png" ) no-repeat;
  border: none;
  width: 25px;
  height: 25px;

  position: absolute;
  right:26%;
`