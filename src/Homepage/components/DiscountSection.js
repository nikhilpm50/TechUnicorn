import React from 'react'
import { styled } from 'styled-components'

function DiscountSection() {
  return (
    <RootDiv>
        <TextDiv>
       <p>March Discount</p>
       <h1>Up to 70% off</h1>
       <button> Got it  </button>
       </TextDiv>
    </RootDiv>
  )
}

export default DiscountSection

const RootDiv = styled.div`
width: 95%;
height: 496px;
background-color: #F86338;
margin: auto;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 100px;


`;

const TextDiv = styled.div`
p{
    font-size: 24px;
    font-weight: 700;
    color: white;
    margin: auto;
}

h1{
    font-size: 64px;
    color: white;
    margin-top: 0;
}
button{
    width: 124px;
    height: 56px;
    background-color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 700;
    color: #7A6005;
}
`;