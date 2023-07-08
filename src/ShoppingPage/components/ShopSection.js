import React from 'react'
import { styled } from 'styled-components';
import shopImage from '../../assets/coverPhoto.png'

function ShopSection() {
  return (
    <RootDiv>
        <LeftSection>
            <p>Home {'>'} Shop</p>
            <h1>Shop</h1>
        </LeftSection>
        <RightSection>
           <img src={shopImage} />
        </RightSection>
    </RootDiv>
  )
}

export default ShopSection

const RootDiv = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 100px;
`;

const LeftSection = styled.div`
text-align: left;
margin-left: 2.5%;
p{
    font-size: 24px;
    font-weight: 700;
    color: #333333;
}

h1{
    font-size: 48px;
}
`;

const RightSection = styled.div`
img{
    width: 1024px;
    height: 400px;
}
`;