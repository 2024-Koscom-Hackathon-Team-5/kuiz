import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

//components
import './Home.css';
import Inform from './Components/Inform';
import './MainPage.css';
import Keyword from './Components/Keyword';
import ProductBtn from './Components/ProductBtn';
import { setCookie, getCookie } from './Etc/Cookies';

const MainPage = () => {
  const navigate = useNavigate();
  
  const updateTags = () => {
    
  };

  const goToQuiz = (searchName) => {
    console.log(searchName);
    setCookie('search_name', searchName);
    navigate("/quizpage");
  };

    return (
        <div className="bigWrapper">

            <LogoView>
                <LogoText><span style={{ color: "#F36F32" }}>K</span>uiz</LogoText>
            </LogoView>

            <div className='app_main'>
                    
                <div className="container">
                        <div className="card">
                            <img src="imgs/img_main1.png" className="card-img-top" alt="firstcard"></img>
                            <div className="card-body">
                                <p className="card-text">20대가 많이 틀리는<br/>금융 퀴즈 풀어보기</p>
                            </div>
                        </div>
                        
                        <div className="card">
                            <img src="imgs/img_main2.png" className="card-img-top" alt="firstcard"></img>
                            <div className="card-body">
                                <p className="card-text">자산 규모 5,000만원 이상인<br/>사람이 가장 궁금해 하는 상품</p>
                            </div>
                        </div>
                </div>
            </div>

            <div className="container">
                <Inform text={"홍길동 님의 마이데이터를 기반으로 분석한 추천 퀴즈입니다."} />
            </div>

            <LastView>
              <Tags className="flex-container">
                <Keyword text="ELS" updateTags={updateTags} />
                <Keyword text="전세사기" updateTags={updateTags} />
                <Keyword text="루나코인" updateTags={updateTags} />
                <Keyword text="적금" updateTags={updateTags} />
                <Keyword text="펀드" updateTags={updateTags} />
                <Keyword text="ETF" updateTags={updateTags} />
                <Keyword text="비트코인" updateTags={updateTags} />
              </Tags>
            </LastView>
            
            <div className='wrapper_list'>
                <div class="container_list">
                    <div class="title_list">나의 적금</div>
                    <div class="buttons_list">
                        <ProductBtn text="KB국민행복적금" subtext1="가입 KB국민은행" subtext2="금리 기본 3.75% (12개월)"></ProductBtn>
                        <ProductBtn text="KB국민행복적금" subtext1="가입 KB국민은행" subtext2="금리 기본 3.75% (12개월)"></ProductBtn>
                        <ProductBtn text="KB국민행복적금" subtext1="가입 KB국민은행" subtext2="금리 기본 3.75% (12개월)"></ProductBtn>
                    </div>
                    <button class="quiz-button_list" onClick={() => goToQuiz('ELS')}>{'적금 3단계 퀴즈 풀기 >'}</button>
                </div>

                <div class="container_list">
                    <div class="title_list">나의 적금</div>
                    <div class="buttons_list">
                        <ProductBtn text="KB국민행복적금" subtext1="가입 KB국민은행" subtext2="금리 기본 3.75% (12개월)"></ProductBtn>
                        <ProductBtn text="KB국민행복적금" subtext1="가입 KB국민은행" subtext2="금리 기본 3.75% (12개월)"></ProductBtn>
                        <ProductBtn text="KB국민행복적금" subtext1="가입 KB국민은행" subtext2="금리 기본 3.75% (12개월)"></ProductBtn>
                    </div>
                    <button class="quiz-button_list" onClick={goToQuiz('ETF')}>{'적금 3단계 퀴즈 풀기 >'}</button>
                </div>
            </div>
            
            <p> </p>
        </div>
    );
};


const Tags = styled.div`
  text-align: center;
`

const LastView = styled.p`
  width : 100%;
`
//--------------------------------------------

const LogoView = styled.div`
    width: 100%;
`
//--------------------------------------------

//background-color: #E4DACB;
const LogoText = styled.div`
  background: url('/imgs/kuiz_start_dark_blur.gif') no-repeat;
  background-size: cover;
  background-position: bottom;

  font-family: "SOGANGUNIVERSITYTTF";
  text-align: center;
  text-shadow: 3px 3px 2px #545454;

  font-size: 120px;
  padding-top: 30px;
  padding-bottom: 30px;
  color: ${props=> props.color || '#FFFFFF'};
`
//--------------------------------------------

const WrapView = styled.div`
  width: 100vw;
  height: 101vh;
  overflow: hidden;
  position: absolute;

  overflow: hidden;
  margin: 0px auto;
  padding: 0px;
`


export default MainPage;