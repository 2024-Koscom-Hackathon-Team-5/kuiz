import React from 'react';
import styled from 'styled-components';

function ProductBtn({ text, subtext1, subtext2, rates }) {
    return (
      <WrapperInform>
        <InformTxt style={{
             opacity: 0.6
         }}>{text}</InformTxt>

        <InformSubTxt style={{
             opacity: 0.6
         }}>{subtext1}</InformSubTxt>

         <InformSubTxt style={{
              opacity: 0.6
          }}>{subtext2}</InformSubTxt>
      </WrapperInform>
    );
  }
  
export default ProductBtn;

const WrapperInform = styled.p`
    border: 1px solid #ccc; /* 테두리 스타일 설정 */

    width: 100%;
    height: 130px;

    &:hover {
        background: #EDEDED; /* 마우스를 올렸을 때의 텍스트 색상 */
      }
`
  
const InformTxt = styled.h3`
    font-family: "Arita-dotum-Light";
    letter-spacing : 1px;
    font-size: 23px;

    padding-left: 15px;

`
  
const InformSubTxt = styled.p`
    font-family: "Arita-dotum-Light";
    font-size: 16px;

    padding-left: 15px;

`