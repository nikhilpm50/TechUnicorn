import React, { useRef } from 'react'
import { styled } from 'styled-components'
import leftArrow from '../../assets/leftarrow.png'
import rightArrow from '../../assets/rightarrow.png'

function CustomerSection() {

    const galleryRef = useRef(null);

    const scrollLeft = () => {
      if (galleryRef.current) {
        galleryRef.current.scrollLeft -= 816; 
      }
    };
  
    const scrollRight = () => {
      if (galleryRef.current) {
        galleryRef.current.scrollLeft += 816; 
      }
    };

  return (
    <RootDiv>
        <TextDiv>
         <h1>What Our Customer Says</h1>
        </TextDiv>
        <Combine>
        <div>
        <img src={leftArrow} onClick={scrollLeft} />
        </div>
        <MainFeedback ref={galleryRef}>
        <FeedbackDiv>
           <ContentDiv>
            <Content>
            <p id='desc'>Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company</p>
            <p id='name'>Shalima Hayden</p>
            <p>Product Designer</p>
            </Content>
           </ContentDiv>
           <Round />
        </FeedbackDiv>

        <FeedbackDiv>
           <ContentDiv>
            <Content>
            <p id='desc'>Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company</p>
            <p id='name'>Next</p>
            <p>Product Designer</p>
            </Content>
           </ContentDiv>
           <Round />
        </FeedbackDiv>

        <FeedbackDiv>
           <ContentDiv>
            <Content>
            <p id='desc'>Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company</p>
            <p id='name'>Shalima Hayden</p>
            <p>Product Designer</p>
            </Content>
           </ContentDiv>
           <Round />
        </FeedbackDiv>
        </MainFeedback>
        <div>
        <img src={rightArrow} onClick={scrollRight} />
        </div>
        </Combine>

    </RootDiv>
  )
}

export default CustomerSection

const RootDiv = styled.div`
margin-bottom: 100px;
`;

const TextDiv = styled.div`
margin-bottom: 50px;
h1{
    font-size: 48px;
    text-align: center;
}
`;

const FeedbackDiv = styled.div`
position: relative;
width: 816px;
height: 500px;
display: flex;
margin: auto;
`;

const Round = styled.div`
width: 88px;
height: 88px;
background-color: #E2E2EA;
border-radius: 50%;
position: absolute;
top: 66px;
left: 50%;
transform: translate(-50%, -50%);
`;

const ContentDiv = styled.div`
width: 816px;
height: 316px;
background-color: #FFEFEB;
border-radius: 8px;
padding: 20px;
margin: auto;
display: flex;
justify-content: center;
align-items: end;
p#desc{
    font-size: 16px;
    font-weight: 400;
    color: #515151;
    width: 566px;
    margin: auto;
    margin-bottom: 75px;
}
p{
    font-size: 16px;
    font-weight: 400;
    color: #515151;
    width: 566px;
    margin: auto;
}
p#name{
    font-size: 24px;
    font-weight: 700;
    color: Black;
    margin: auto;
}
`;

const Content = styled.div`

`;

const Combine = styled.div`
justify-content: center;
align-items: center;
margin: auto;
display: flex;
img{
    width: 80px;
    height: 80px;
    cursor: pointer;
}
`;

const MainFeedback = styled.div`
display: flex;
width: 816px;
overflow-x: scroll;
scroll-behavior: smooth;
&::-webkit-scrollbar {
  display: none; /* WebKit (Chrome, Safari, etc.) */
}
}

`;