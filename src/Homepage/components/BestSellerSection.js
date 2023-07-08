import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import ProductCard from './ProductCard';

function BestSellerSection() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=4')
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  return (
    <RootDiv>
     <h1>Best Seller</h1>
     <ProductDiv>
     {products.map((product)=>(
      <ProductCard title={product.title} category={product.category} price={product.price} image={product.image} />
      ))}
     </ProductDiv>
    </RootDiv>
  )
}

export default BestSellerSection

const RootDiv = styled.div`
width: 95%;
margin: auto;
h1{
    font-size: 48px;
    text-align: left;
}
`;

const ProductDiv = styled.div`
width: 95%;
display: flex;
justify-content: space-between;
`;