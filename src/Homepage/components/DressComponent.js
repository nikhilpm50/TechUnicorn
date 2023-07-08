import React from 'react'
import dressImage from '../../assets/dressSample.jpg'
import { styled } from 'styled-components'
import next from '../../assets/nextButton.png'

function DressComponent() {
  return (
    <RootDiv>
        <ImageCard>
        <img src={dressImage} />
        <TextDiv>
        <h1>Dresses</h1>
        <p>Lorem Ipsum is simply dummy text <br/> 
         of the printing and typesetting industry.</p>
         <img src={next} /> 
        </TextDiv>
        </ImageCard>
        <img src={dressImage} />
        <img src={dressImage} />
        <img src={dressImage} />
        <img src={dressImage} />
        <img src={dressImage} />
    </RootDiv>
  )
}

export default DressComponent

const RootDiv = styled.div`
padding: 100px 0px 100px 0px;
width: 95%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin: auto;
img{
    width: 400px;
    height: 560px;
    margin-bottom: 60px;
}
`;

const ImageCard = styled.div`
width: 400px;
height: 560px;
position: relative;
p{
    color: #9A9AB0;
    font-size: 16px;
    font-weight: 400;
}
h1{
    font-size: 48px;
    margin: 0;
}
`;

const TextDiv = styled.div`
position: absolute;
bottom: 0;
left: 0;
right: 0;
text-align: center;

img{
    width:40px;
    height:40px;
    cursor: pointer;
}
`;
