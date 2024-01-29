import React from 'react';
import styled from 'styled-components';

function Inform({ text }) {
    return (
      <div><InformTxt style={{
        opacity: 0.6
      }}>{text}</InformTxt></div>
    );
  }
  
export default Inform;
  
const InformTxt = styled.h3`
    background-color: #FFF;
    text-align: center;

    font-family: "Arita-dotum-Light";
    font-size: 26px;

    width: 100%;
    margin-top: 30px;
    margin-bottom: 0px;
`