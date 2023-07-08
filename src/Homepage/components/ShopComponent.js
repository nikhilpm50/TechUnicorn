import React from 'react'
import { styled } from 'styled-components'
import shopImage from '../../assets/clothSample.jpg'
import shopImage2 from '../../assets/clothSample2.jpg'
import { Link } from 'react-router-dom'

function ShopComponent() {
  return (
    <RootDiv>
        <HeadDiv>
           <h1>Sort out Your <br/> Spring Look</h1>
           <p>We will help to develop every smallest thing into a <br/> big one for your company.</p>
           <Link to='/shop'>
           <Button>Shop</Button></Link>
        </HeadDiv>
        <ImageDiv>
            <img src={shopImage} />
            <img src={shopImage2} />
        </ImageDiv>

    </RootDiv>
  )
}

export default ShopComponent

const RootDiv = styled.div`
width: 97.5%;
margin-left: auto;
display: flex;
justify-content: space-between;
`;

const HeadDiv = styled.div`
display: flex;
flex-direction: column;
h1{
    font-size: 48px;
    text-align: left;
}
p{
    color: #9A9AB0;
    font-size: 16px;
    font-weight: 500;
    text-align: left;
}
`;

const ImageDiv = styled.div`
width: 750px;
display: flex;
overflow: hidden;
img{
    width: 504px;
    height: 619px;
    margin-right: 7px;
}
`;

const Button = styled.button`
width: 120px;
height: 56px;
background-color: #F86338;
border: none;
color: white;
border-radius: 8px;
cursor: pointer;
`;