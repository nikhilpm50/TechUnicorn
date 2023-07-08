import React, { useRef, useEffect, useState  } from 'react'
import { styled } from 'styled-components'

import leftArrow from '../../assets/leftarrow.png'
import rightArrow from '../../assets/rightarrow.png'
import ProductCard from './ProductCard'

function NewArrivalSection() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=8')
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  const galleryRef = useRef(null);

  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        top: 0,
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({
        top: 0,
        left: 300,
        behavior: 'smooth',
      });
    }
  };
  

  return (
    <div>
    <RootDiv>
       <HeadDiv>
          <h1>New Arrival</h1>
          <p>See All</p>
       </HeadDiv>
       <ProductDiv ref={galleryRef}>
       {products.map((product)=>(
      <ProductCard title={product.title} category={product.category} price={product.price} image={product.image} />
      ))}
           <img id='left' src={leftArrow} onClick={scrollLeft} />
           <img id='right' src={rightArrow} onClick={scrollRight} />
       </ProductDiv>
    </RootDiv>
    </div>
  )
}

export default NewArrivalSection

const RootDiv = styled.div`
margin-bottom: 100px;
`;

const HeadDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 95%;
margin: auto;
h1{
  font-size: 48px;
}
p{
  color: #F86338;
  font-size: 24px;
  font-weight: 400;
}
`;

const ProductDiv = styled.div`
width: 100%;
display: flex;
position: relative;
display: flex;
overflow-x: scroll;
scroll-behavior: smooth;
&::-webkit-scrollbar {
  display: none; /* WebKit (Chrome, Safari, etc.) */
}
img#left{
  width: 70px;
  height: 70px;
  position: absolute;
  bottom: 266px;
  cursor: pointer;
}
img#right{
  width: 70px;
  height: 70px;
  position: absolute;
  right: 0;
  bottom: 266px;
  cursor: pointer;
}
`;

