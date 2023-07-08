import React from 'react'
import { styled } from 'styled-components'
import callLogo from '../../assets/Vector.png'
import Logo from '../../assets/Group.png'
import socialLogo from '../../assets/Socmed.png'
import like from '../../assets/like.png'
import cart from '../../assets/Cart.png'
import account from '../../assets/account.png'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <MainDiv>
      <FirstStrip>
        <ContactDiv>
            <CallImg src={callLogo} />
            <p>+022 319 821 967</p>
        </ContactDiv>
        <LogoDiv>
            <img src={Logo} />
        </LogoDiv>
        <SocialDiv>
            <img src={socialLogo} />
        </SocialDiv>
      </FirstStrip>
      <SecondStrip>
         <NavPane>
          <Link to={'/'}>
            <p id='home'>Home</p></Link>
            <p>About</p>
            <p>FAQ</p>
            <p>Blog</p>
         </NavPane>
         <CartSection>
            <img src={like} />
            <img src={cart} />
            <img src={account} />
         </CartSection>
      </SecondStrip>
    </MainDiv>
  )
}

export default NavBar

const MainDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 15px;
margin-top: 15px;
`
const FirstStrip = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 95%;
margin-bottom: 20px;
`;

const SecondStrip = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 98%;
`;

const ContactDiv = styled.div`
  display: flex;
  align-items: center;
  p {
    color: Black;
    font-size: 16px;
    font-weight: 500
  }
`;

const CallImg = styled.img`
width: 24px;
height: 24px;
margin-right: 6px;
`;

const LogoDiv = styled.div`
img{
    width: 166px;
    height: 32px;
}
`;

const SocialDiv = styled.div`
img{
    width: 208px;
    height: 40px;
}
`;

const NavPane = styled.div`
display: flex;
width: 273px;
justify-content: space-evenly;
p{
    font-size: 16px;

}

p#home{
    font-weight: 700;
}

`;

const CartSection = styled.div`
width: 176px;
height: 44px;
display: flex;
align-items: center;
justify-content: space-evenly;
img{
    width: 32px;
height: 32px;
}
`;