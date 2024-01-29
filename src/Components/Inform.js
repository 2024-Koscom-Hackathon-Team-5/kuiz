import React from 'react';
import styled from 'styled-components';

function Inform({ text }) {
    return (
      <div><InformTxt style={{
        margin : '0px 0px 0px 470px ',
        opacity: 0.6
      }}>{text}</InformTxt></div>
    );
  }
  
export default Inform;
  
const InformTxt = styled.h3`
    font-family: "Arita-dotum-Light";
    letter-spacing : 1px;
    font-size: 25px;
    padding: 10px;

    top: 80%;
    width: 50%;
    height: 30px;
`