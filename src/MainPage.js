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

import axios from "axios";

const MainPage = ({apiUrl}) => {
  const navigate = useNavigate();
  
  const updateTags = (gtags) => {
    const id='A'+gtags;
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToQuiz = (searchName) => {
    console.log(searchName);
    setCookie('search_name', searchName);
    navigate("/quizpage");
  };


  const [keywordList, setKeywordList] = useState([{
            "keyword": {
                "keywordId": 1,
                "keyword_name": "ELS",
                "kor_name": "ELS > ",
                "relavant_product": "원금 보장 상품",
                "recommend_phrase": "확.실.한 원금보장상품을 원한다면?",
                "quiz_cnt": 3,
                "product_cnt": 9,
                "createdDate": null,
                "modifiedDate": null
            },
            "productDTOList": [
                {
                    "id": 25,
                    "product_name": "KB국민행복적금",
                    "firm": "KB국민은행",
                    "period": 12,
                    "interest_max": 5.45,
                    "interest_min": 3.55,
                    "product_url": "https://obank.kbstar.com/quics?page=C016613&cc=b061496:b061645&브랜드상품코드=DP01000472&노드코드=00007&prcode=DP01000472#loading",
                    "createdDate": null,
                    "modifiedDate": null
                },
                {
                    "id": 26,
                    "product_name": "KDB 정기예금",
                    "firm": "KDB산업은행 ",
                    "period": 12,
                    "interest_max": 3.4,
                    "interest_min": 2.88,
                    "product_url": "https://banking.kdb.co.kr/bp/BMDEWP01N10.act?_mnuId=IBFMFM0015&PRD_C=100237000101",
                    "createdDate": null,
                    "modifiedDate": null
                },
                {
                    "id": 27,
                    "product_name": "NH왈츠회전예금 II",
                    "firm": "NH농협은행",
                    "period": 12,
                    "interest_max": 3.35,
                    "interest_min": 2.83,
                    "product_url": "https://smartmarket.nonghyup.com/content/html/sf/cn/sfgateway.html?NAVIGATE_TYPE=1&SERVICE_ID=SFSD0130R&detailPsnFncWrsC=10000614",
                    "createdDate": null,
                    "modifiedDate": null
                },
                {
                    "id": 37,
                    "product_name": "LIVE정기예금",
                    "firm": "BNK부산은행",
                    "period": 12,
                    "interest_max": 2.55,
                    "interest_min": 2.16,
                    "product_url": "https://www.busanbank.co.kr/ib20/mnu/FPMPDTDT0000001?FPCD=0010100134",
                    "createdDate": null,
                    "modifiedDate": null
                }
            ]
        },
        {
            "keyword": {
                "keywordId": 2,
                "keyword_name": "ETF",
                "kor_name": "ETF",
                "relavant_product": "ETF",
                "recommend_phrase": "많은 사용자가 선택한 ETF 상품이 궁금하다면?",
                "quiz_cnt": 3,
                "product_cnt": 9,
                "createdDate": null,
                "modifiedDate": null
            },
            "productDTOList": [
                {
                    "id": 28,
                    "product_name": "라이트코인",
                    "firm": "인베스팅닷컴",
                    "period": 12,
                    "interest_max": null,
                    "interest_min": null,
                    "product_url": "https://kr.investing.com/indices/investing.com-ltc-usd",
                    "createdDate": null,
                    "modifiedDate": null
                }
            ]
        },
        {
            "keyword": {
                "keywordId": 3,
                "keyword_name": "LUNA",
                "kor_name": "루나코인",
                "relavant_product": "가상 화폐",
                "recommend_phrase": "\n안정성 있는 코인을 알고 싶다면?",
                "quiz_cnt": 3,
                "product_cnt": 9,
                "createdDate": null,
                "modifiedDate": null
            },
            "productDTOList": [
                {
                    "id": 29,
                    "product_name": "TIGER 글로벌클라우드컴퓨팅INDXX",
                    "firm": "미래에셋자산운용",
                    "period": 12,
                    "interest_max": null,
                    "interest_min": null,
                    "product_url": "https://www.etfcheck.co.kr/mobile/etpitem/371450/basic",
                    "createdDate": null,
                    "modifiedDate": null
                },
                {
                    "id": 30,
                    "product_name": "TIGER 2차전지TOP10레버리지",
                    "firm": "미래에셋자산운용",
                    "period": 12,
                    "interest_max": null,
                    "interest_min": null,
                    "product_url": "https://www.etfcheck.co.kr/mobile/etpitem/412570/basic",
                    "createdDate": null,
                    "modifiedDate": null
                },
                {
                    "id": 38,
                    "product_name": "ACE 미국빅테크TOP7 Plus인버스(합성)",
                    "firm": "한국투신운용(ETF)",
                    "period": 12,
                    "interest_max": null,
                    "interest_min": null,
                    "product_url": "https://www.etfcheck.co.kr/mobile/etpitem/465620/basic",
                    "createdDate": null,
                    "modifiedDate": null
                },
                {
                    "id": 39,
                    "product_name": "TIGER 코스닥150바이오테크",
                    "firm": "미래에셋자산운용",
                    "period": 12,
                    "interest_max": null,
                    "interest_min": null,
                    "product_url": "https://www.etfcheck.co.kr/mobile/etpitem/261070/basic",
                    "createdDate": null,
                    "modifiedDate": null
                }
            ]
        },
        {
            "keyword": {
                "keywordId": 4,
                "keyword_name": "fund",
                "kor_name": "펀드",
                "relavant_product": "인덱스 펀드",
                "recommend_phrase": "투명하게 운영되는 펀드 상품을 찾는다면?",
                "quiz_cnt": 4,
                "product_cnt": 9,
                "createdDate": null,
                "modifiedDate": null
            },
            "productDTOList": [
                {
                    "id": 31,
                    "product_name": "우리하이플러스채권증권자투자신탁1호(채권)",
                    "firm": "우리자산운용",
                    "period": 12,
                    "interest_max": null,
                    "interest_min": null,
                    "product_url": "https://www.wooriam.kr/fund/FundView?uid=920a4c8f093c11ec9",
                    "createdDate": null,
                    "modifiedDate": null
                },
                {
                    "id": 40,
                    "product_name": "우리중소형고배당증권자투자신탁1호(주식)",
                    "firm": "우리자산운용",
                    "period": 12,
                    "interest_max": null,
                    "interest_min": null,
                    "product_url": "https://www.wooriam.kr/fund/FundView?uid=909b1f42093c11ec9",
                    "createdDate": null,
                    "modifiedDate": null
                },
                {
                    "id": 52,
                    "product_name": "신한글로벌탄소중립솔루션증권투자신탁(H)[주식](종류C-e)",
                    "firm": "신한자산운용",
                    "period": 12,
                    "interest_max": null,
                    "interest_min": null,
                    "product_url": "https://www.shinhanfund.com/ko/pc/fund/view?fundCd=259645",
                    "createdDate": null,
                    "modifiedDate": null
                }
            ]
        },
        {
            "keyword": {
                "keywordId": 5,
                "keyword_name": "charter",
                "kor_name": "전세사기",
                "relavant_product": "전세보증보험",
                "recommend_phrase": "전세금을 안전하게 보장받고 싶다면?",
                "quiz_cnt": 3,
                "product_cnt": 9,
                "createdDate": null,
                "modifiedDate": null
            },
            "productDTOList": [
                {
                    "id": 34,
                    "product_name": "일반전세지킴보증",
                    "firm": "한국주택금융공사",
                    "period": 24,
                    "interest_max": null,
                    "interest_min": null,
                    "product_url": "https://www.hf.go.kr/ko/sub02/sub02_05_01.do",
                    "createdDate": null,
                    "modifiedDate": null
                },
                {
                    "id": 46,
                    "product_name": "전세보증금반환보증",
                    "firm": "주택도시보증공사",
                    "period": 12,
                    "interest_max": null,
                    "interest_min": null,
                    "product_url": "https://www.khug.or.kr/hug/web/ig/dr/igdr000001.jsp",
                    "createdDate": null,
                    "modifiedDate": null
                }
            ]
        },
        {
            "keyword": {
                "keywordId": 6,
                "keyword_name": "savings",
                "kor_name": "적금",
                "relavant_product": "적금",
                "recommend_phrase": "꾸준한 수익을 원한다면?",
                "quiz_cnt": 3,
                "product_cnt": 9,
                "createdDate": null,
                "modifiedDate": null
            },
            "productDTOList": [
                {
                    "id": 35,
                    "product_name": "KDB 기업정기적금",
                    "firm": "KDB산업은행",
                    "period": 12,
                    "interest_max": 4.65,
                    "interest_min": 2.75,
                    "product_url": "https://banking.kdb.co.kr/bp/BMDEWP01N10.act?_mnuId=IBFMFM0015&PRD_C=100239000101",
                    "createdDate": null,
                    "modifiedDate": null
                },
                {
                    "id": 36,
                    "product_name": "우리SUPER주거래적금",
                    "firm": "우리은행",
                    "period": 12,
                    "interest_max": 4.2,
                    "interest_min": 4.0,
                    "product_url": "https://spot.wooribank.com/pot/Dream?withyou=PODEP0021",
                    "createdDate": null,
                    "modifiedDate": null
                },
                {
                    "id": 47,
                    "product_name": "퍼스트가계적금",
                    "firm": "SC제일은행 ",
                    "period": 12,
                    "interest_max": 3.5,
                    "interest_min": 3.5,
                    "product_url": "https://www.standardchartered.co.kr/np/kr/pl/se/SavingDetail.jsp?id=36",
                    "createdDate": null,
                    "modifiedDate": null
                }
            ]
        },
        {
            "keyword": {
                "keywordId": 7,
                "keyword_name": "bitcoin",
                "kor_name": "비트 코인",
                "relavant_product": "가상 화폐",
                "recommend_phrase": "많은 투자자가 있는 가상 화폐를 찾는다면?",
                "quiz_cnt": 3,
                "product_cnt": 9,
                "createdDate": null,
                "modifiedDate": null
            },
            "productDTOList": [
                {
                    "id": 48,
                    "product_name": "라이트코인",
                    "firm": "인베스팅닷컴",
                    "period": 12,
                    "interest_max": null,
                    "interest_min": null,
                    "product_url": "https://kr.investing.com/indices/investing.com-ltc-usd",
                    "createdDate": null,
                    "modifiedDate": null
                },
                {
                    "id": 49,
                    "product_name": "비트코인",
                    "firm": "인베스팅닷컴",
                    "period": 12,
                    "interest_max": null,
                    "interest_min": null,
                    "product_url": "https://kr.investing.com/indices/investing.com-btc-usd",
                    "createdDate": null,
                    "modifiedDate": null
                },
                {
                    "id": 50,
                    "product_name": "테라",
                    "firm": "인베스팅닷컴",
                    "period": 12,
                    "interest_max": null,
                    "interest_min": null,
                    "product_url": "https://kr.investing.com/indices/investing.com-lunc-usd",
                    "createdDate": null,
                    "modifiedDate": null
                },
                {
                    "id": 51,
                    "product_name": "ASTR/USD",
                    "firm": "바이낸스",
                    "period": 12,
                    "interest_max": null,
                    "interest_min": null,
                    "product_url": "https://kr.investing.com/crypto/astar/astr-usd",
                    "createdDate": null,
                    "modifiedDate": null
                }
            ]
        }
    ]
);

  useEffect(() => {
    console.log('mainPage');


    //Access-Control-Allow-Origin: *
    axios.get(`${apiUrl}api/ownership/`,
        { params: { student_id: 1 } })
        .then(function (response) {
            // response  

            if (response) {
                //renderFunction
                console.log(keywordList);
                console.log('result : '+response.data.keyword_list);
                if(response.data.keyword_list.length > 0) 
                    setKeywordList(response.data.keyword_list);
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
                                <p className="card-text">자산 5천만원 대 자산가가<br/>가장 궁금해하는 상품</p>
                            </div>
                        </div>
                </div>
            </div>

            <div className="container">
                <Inform text={"장동훈 님의 마이데이터를 기반으로 분석한 추천 퀴즈입니다."} />
            </div>

            <LastView>
              <Tags className="flex-container">
                {keywordList.map((item) => (
                    <Keyword id={item.keyword.keywordId} 
                             text={item.keyword.kor_name} 
                             updateTags={updateTags} 
                             />
                ))}
              </Tags>
            </LastView>
            
            <div className='wrapper_list'>

                {keywordList.map((item) => (
                    <div class="container_list">
                        <div class="title_list" id={'A'+item.keyword.kor_name}>나의 {item.keyword.kor_name}</div>
                        <div class="buttons_list">
                            {item.productDTOList.map((products) => (
                                <>
                                    {products.interest_min?
                                     <ProductBtn text={products.product_name} subtext1={'가입 '+products.firm} subtext2={'상세 정보 '+products.interest_min+' ~ '+products.interest_max+' ('+products.period+'개월)'}></ProductBtn>:
                                     <ProductBtn text={products.product_name} subtext1={'가입 '+products.firm} subtext2={'상세 정보 '+products.period+'개월'}></ProductBtn>
                                    }
                                </>
                            ))}
                        </div>
                        <button class="quiz-button_list" onClick={() => goToQuiz(item.keyword.keyword_name)}>{item.keyword.kor_name+' 3단계 퀴즈 풀기 >'}</button>
                    </div>
                ))}
            </div>
            <p> </p>
        </div>
    );
};
//<button className="card-img-top" alt="firstcard"></button>

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