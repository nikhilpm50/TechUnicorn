import React from 'react'
import { styled } from 'styled-components'
import logo from '../../assets/Whitelogo.png'

function Footer() {
  return (
    <RootDiv>
      <LeftDiv>
      <img src={logo} />
      <ContentDiv>
      <Desc>
      <p id='desc'>OurStudio is a digital agency UI / UX Design and Website <br/> Development located in Ohio, United States of America</p>
      </Desc>
      <Social>
        <h5>Our Social Media</h5>
        <p>Facebook</p> 
        <p>Twitter</p> 
        <p>Instagram</p> 
        <p>Youtube</p>
      </Social>
      <Contact>
      <h5>Contact</h5>
      <p>8819 Ohio St. South Gate,<br/> California 90280</p>
      <p>ourstudio@hello.com</p>
      <p>+271 386-647-3637</p>
      </Contact>
      </ContentDiv>
      <p>Copyright Tanah Air Studio</p>
      </LeftDiv>
    </RootDiv>
  )
}

export default Footer

const RootDiv = styled.div`
height: 276px;
background-color: #F86338;
padding: 80px;
`;

const LeftDiv = styled.div`
display: flex;
flex-direction: column;
align-items: start;


img{
width: 240px;
height: 60px;

}

p{
    font-size: 16px;
    font-weight: 400;
    color: white;
}

h5{
    color: white;

}

p#desc{
    margin-bottom: 100px;
    text-align: left;
}
`;

const Desc = styled.div`

`;

const Social = styled.div`
flex-direction: column;
text-align: left;
`;

const Contact = styled.div`
flex-direction: column;
text-align: left;
`;

const ContentDiv = styled.div`
display: flex;
width: 85vw;
justify-content: space-between;
height: 200px;
`;