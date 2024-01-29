import './QuizPage.css'

import React, { useEffect, useState } from 'react';
import { getCookie, setCookie } from './Etc/Cookies';

import axios from "axios";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

export default function QuizPage({ apiUrl }) {
    const keyword = [ {
        "keywordId": 1,
        "keyword_name": "ELS",
        "kor_name": "ELS",
        "relavant_product": "원금 보장 상품",
        "recommend_phrase": "확.실.한 원금보장상품을 원한다면?",
        "quiz_cnt": 3,
        "product_cnt": 9,
        "createdDate": null,
        "modifiedDate": null
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const [showAnswer, setShowAnser] = useState(false);
    const [clickedAnswer, setClickedAnswer] = useState(0);

    const [searchName, setSearchName] = useState('ELS');
    const [quizlist, setQuizList] = useState([{
        "id": 1,
        "quiz_name": "ELS의 손실 발생 조건은 무엇인가??",
        "choice_num": 3,
        "answer": "b)",
        "commentary": "ELS는 만기 시점에 기초 자산 가격이 가입 당시 대비 일정 비율 이하로 하락할 경우에 손실이 발생하는 구조를 갖고 있습니다.",
        "choices": [
            {
                "id": 2,
                "quiz_name": "ELS의 손실 발생 조건은 무엇인가?",
                "choice_num": "a)",
                "choice": "주가 연계 증권으로 은행에서 판매되는 투자상품",
                "isAnswer": true,
                "createdDate": null,
                "modifiedDate": null
            },
            {
                "id": 3,
                "quiz_name": "ELS의 손실 발생 조건은 무엇인가?",
                "choice_num": "b)",
                "choice": "홍콩증시에 상장된 기업들의 주가를 기초로 하는 파생상품",
                "isAnswer": false,
                "createdDate": null,
                "modifiedDate": null
            },
            {
                "id": 4,
                "quiz_name": "ELS의 손실 발생 조건은 무엇인가?",
                "choice_num": "c)",
                "choice": "특정 지수의 등락에 따라 수익과 손실이 발생하는 금융상품",
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
        "quiz_name": "금융권에서 ELS 손실에 대한 보상은 어떻게 이루어지는가?",
        "choice_num": 3,
        "answer": "b)",
        "commentary": "금융당국이 손실의 40~80%를 금융사에 권고하여 배상하는 경우가 있습니다. 금융권에서는 불완전판매 등 금융사의 과실이 인정되면 일부 배상이 이루어질 수 있습니다.",
        "choices": [
            {
                "id": 1,
                "quiz_name": "금융권에서 ELS 손실에 대한 보상은 어떻게 이루어지는가?",
                "choice_num": "a)",
                "choice": "주가 연계 증권으로 은행에서 판매되는 투자상품",
                "isAnswer": false,
                "createdDate": null,
                "modifiedDate": null
            },
            {
                "id": 5,
                "quiz_name": "금융권에서 ELS 손실에 대한 보상은 어떻게 이루어지는가?",
                "choice_num": "b)",
                "choice": "만기 시점에 기초 자산 가격이 가입 당시 대비 일정 비율 이하로 하락할 경우",
                "isAnswer": true,
                "createdDate": null,
                "modifiedDate": null
            },
            {
                "id": 6,
                "quiz_name": "금융권에서 ELS 손실에 대한 보상은 어떻게 이루어지는가?",
                "choice_num": "c)",
                "choice": "지수 상장 기업의 이익이 증가할 경우",
                "isAnswer": false,
                "createdDate": null,
                "modifiedDate": null
            }
        ],
        "createdDate": null,
        "modifiedDate": null
    },
    {
        "id": 13,
        "quiz_name": "ELS(연계 주가연계증권)란 무엇인가?",
        "choice_num": 3,
        "answer": "c)",
        "commentary": "ELS(연계 주가연계증권)는 특정 지수의 등락에 따라 수익과 손실이 발생하는 금융상품입니다. 주로 은행에서 판매되며, 기초 자산으로 주로 주가 지수가 사용됩니다.",
        "choices": [
            {
                "id": 37,
                "quiz_name": "ELS(연계 주가연계증권)란 무엇인가?",
                "choice_num": "a)",
                "choice": "인덱스 펀드는 특정 지수를 복제하여 운용되며, 수익률이 지수와 정확히 일치한다.",
                "isAnswer": false,
                "createdDate": null,
                "modifiedDate": null
            },
            {
                "id": 38,
                "quiz_name": "ELS(연계 주가연계증권)란 무엇인가?",
                "choice_num": "b)",
                "choice": "인덱스 펀드는 전문 관리인이 주식을 개별적으로 선택하여 운용되며, 높은 수익을 목표로 한다.",
                "isAnswer": false,
                "createdDate": null,
                "modifiedDate": null
            },
            {
                "id": 39,
                "quiz_name": "ELS(연계 주가연계증권)란 무엇인가?",
                "choice_num": "c)",
                "choice": "인덱스 펀드는 펀드의 수익을 모두 기부하는 비영리 단체가 운용한다.",
                "isAnswer": false,
                "createdDate": null,
                "modifiedDate": null
            }
        ],
        "createdDate": null,
        "modifiedDate": null
    }]);

    useEffect(() => {
        const name = getCookie('search_name');
        setSearchName(name);
        console.log(searchName);

        //Access-Control-Allow-Origin: *
        axios.get(`${apiUrl}api/kuiz/`,
            { params: { keyword: searchName } })
            .then(function (response) {
                // response  

                if (response) {
                    //renderFunction
                    console.log(quizlist);
                    console.log(response.data.quiz_list);
                   setQuizList(response.data.quiz_list);
                    
                    //setLists(response.data)
                }
                else {
                    //검색 결과가 없습니다.
                    alert("검색 결과가 없습니다 !!");
                }
            }).catch(function (error) {
                // 오류발생시 실행
            }).then(function () {
                // 항상 실행
            });
    }, []);

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
        if (nextQuestion < quizlist.length) {
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
                        You scored {score} out of {quizlist.length}
                    </div>
                ) : (
                    <>
                        <div className='question-section'>
                            <div className='question-count'>
                                <span>문제 {currentQuestion + 1}.</span>
                            </div>
                            <div className='question-text'>{quizlist[currentQuestion].quiz_name}</div>
                        </div>
                        <div className='answer-section'>
                            {quizlist[currentQuestion].choices.map((choices) => (
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
                            <div id='quiz_commentary'>{quizlist[currentQuestion].commentary}</div>
                            <button id='NextBtn' onClick={() => madeViewOfNext()}>{'다음 문제 풀기 >'}</button>
                        </div>
                        <div class="block-container">
                            <div class="block-element0">잠깐! 몰랐던 사실, 친구도 알려주기</div>
                            <button class="block-element"><img src="/imgs/face.png" className='sns_image' /></button>
                            <button class="block-element"><img src="/imgs/insta.jpg" className='sns_image' /></button>
                            <button class="block-element"><img src="/imgs/kakao.png" className='sns_image' /></button>
                        </div>
                        <br></br>
                        <button id='ADBtn' onClick={() => letsStart()}>{keyword.recommend_phrase}</button>
                    </>
                ) : (
                    <img src="/imgs/img4.png" className='right_img' />
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