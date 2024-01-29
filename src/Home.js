import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

//components
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const [srcStr, setSrcStr] = useState("/kuiz_start_dark_blur.mov");
  const [searchText, setSearchText] = useState("");

  const letsStart = () => {
    navigate("/mainpage");
  };


  const searchFunction = (value) => {
    navigate("/quizpage");
 /*   const sendData = {
      "gu":{state}.state,
      "tags":JSON.stringify(tags)
    }
    
    if( sendData.gu && sendData.tags ) {
      console.log('submit');

      const access = cookies.get("access_token");
      const config = {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      };
      axios.get(`${apiUrl}guide/recommend/`,
               {params: {keyword: sendData.tags,
                        region:sendData.gu}},config)
      .then(function (response) {
          // response  

          if(response.data.count > 0 ) {
            //renderFunction
           // console.log('response: '+response);
            navigate("/searchlist",{state:response.data});
          
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

    }*/

  };

    return (
        <WrapView>
            
            <RAvideo id="videoplay" key={srcStr} muted autoPlay loop>
                <source src={srcStr} type="video/mp4"></source>
            </RAvideo>

            <TopView>
                <TopText>WELCOME TO</TopText>
            </TopView>

            <DText>
                <PText><span style={{ color: "#F36F32" }}>K</span>uiz</PText>
            </DText>
            <DSubText>
                <SubText>금융 이슈를 쉽고 재미있게</SubText>
            </DSubText>

            <button id='startBtn' onClick={() => letsStart()}>시작하기</button>
        </WrapView>
    );
};


//--------------------------------------------

const BottomView = styled.p`
  position: absolute;
  top: 70%;
  width : 100%;
  heigth : 20%;
`
const FormSearchBox = styled.form`
  width: 100%;
  align-items: center;

  display: flex;
  justify-content: center;
  align-items: center;
`
const BtnSearch = styled.button`
  background: url( "imgs/search.png" ) no-repeat;
  border: none;
  width: 25px;
  height: 25px;

  position: absolute;
  right:26%;
`
const Forminput = styled.input`
  font-family: "Arita-dotum-Light";
  letter-spacing : 1px;
  font-size: 23px;
  padding: 10px;

  top: 80%;
  width: 50%;
  height: 30px;
`

//--------------------------------------------
const TopView = styled.div`
  position: absolute;
  width: 100%;
  top: 17%;
  left: 50%;
  transform: translate(-50%,-50%);
`
const TopText = styled.p`
  text-align: center;
  text-shadow: 3px 3px 2px #545454;
  font-family: Arita-dotum-Light;
  letter-spacing : 5px;

  width: 100%;
  font-size: 20px;
  color: ${props=> props.color || '#FFFFFF'};
`

//--------------------------------------------
const DText = styled.div`
  position: absolute;
  width: 100%;
  top: 35%;
  left: 50%;
  transform: translate(-50%,-50%);
`
const PText = styled.p`
  font-family: "SOGANGUNIVERSITYTTF";
  text-align: center;
  text-shadow: 3px 3px 2px #545454;

  font-size: 140px;
  color: ${props=> props.color || '#FFFFFF'};
`
//--------------------------------------------
const DSubText = styled.div`
  position: absolute;
  width: 100%;
  top: 47%;
  left: 50%;
  transform: translate(-50%,-50%);
`
const SubText = styled.p`
  text-align: center;
  text-shadow: 3px 3px 2px #545454;
  font-family: Arita-dotum-Light;

  width: 100%;
  font-size: 50px;
  color: ${props=> props.color || '#FFFFFF'};
`

//--------------------------------------------
const RBtn = styled.button`
  position: absolute;
  top:60%;
  left: 40%;

  font-family: 'Grenze', serif;
  display: inline-block;
  background: transparent;
  text-transform: uppercase;
  font-weight: 500;
  font-style: normal;
  font-size: 1rem;
  letter-spacing: 0.3em;
  color: #000000;
  border-radius: 0;
  padding: 18px 80px 20px;
  transition: all 0.7s ease-out;
  background: #ffffff;
  background-position: 1% 50%;
  background-size: 300% 300%;
  text-decoration: none;
  margin: 0.525rem;
  border: none;
  border: 1px solid rgba(223,190,106,0.3);

  opacity: 0.8;

  &:hover {
    top:57%;
    color: #000000;
    border: 2px solid #31748F;
    background-position: 99% 50%;
  }
`
const RAvideo = styled.video`
  width: 100vw;
  z-index: -1;
  position: absolute;
  opacity: 0.9;
`
const WrapView = styled.div`
  width: 100vw;
  height: 101vh;
  overflow: hidden;
  position: absolute;

  overflow: hidden;
  margin: 0px auto;
  padding: 0px;
`


export default Home;