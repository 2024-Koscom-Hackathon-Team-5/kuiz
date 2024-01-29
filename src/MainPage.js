import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

//components
import './Home.css';
import Inform from './Components/Inform';
import './MainPage.css';
import Keyword from './Components/Keyword';

const MainPage = () => {
  const navigate = useNavigate();

  const searchFunction = (value) => {
    navigate("/quizpage");
  };

  const updateTags = () => {
    
  }

    return (
        <>

            <LogoView>
                <LogoText><span style={{ color: "#F36F32" }}>K</span>uiz</LogoText>
            </LogoView>

            <div className='wrapper_app'>
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
            </div>

            <Inform text={"홍길동 님의 마이데이터를 기반으로 분석한 추천 퀴즈입니다."} />

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

        </>
    );
};


const Tags = styled.div`
  text-align: center;
`

const LastView = styled.p`
  position: absolute;
  top: 77%;
  width : 100%;
  heigth : 20%;
`
//--------------------------------------------

const LogoView = styled.div`
    width: 100%;
    top: 5%;
`
//--------------------------------------------

const LogoText = styled.div`
  font-family: "SOGANGUNIVERSITYTTF";
  text-align: center;
  text-shadow: 3px 3px 2px #545454;

  font-size: 120px;
  margin-top: 50px;
  margin-bottom: 50px;
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