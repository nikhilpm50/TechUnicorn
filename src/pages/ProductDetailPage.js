import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import NavBar from '../Homepage/components/NavBar';
import ShopSection from '../ShoppingPage/components/ShopSection';
import CustomerSection from '../Homepage/components/CustomerSection';
import Footer from '../Homepage/components/Footer';
import { useParams } from 'react-router-dom';

function ProductDetailPage() {

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <RootDiv>
     <NavBar />
     <ShopSection />
     <ProductDetail>
       <LeftSection>
          <img src={product.image} />
       </LeftSection>
       <RightSection>
          <h1>{product.title}</h1>
          <p>Avaliability : {product.rating.count} in stocks</p>
          <h3>${product.price}</h3>
          <select>
            <option>Select Size</option>
          </select>
          <button>Add to Cart</button>
       </RightSection>
      
     </ProductDetail>
     <Hr />
     <Desc>
       <h1>Description</h1>
       <p>{product.description}</p>
     </Desc>
     <CustomerSection />
     <Footer />
    </RootDiv>
  )
}

export default ProductDetailPage

const RootDiv = styled.div`

`;

const ProductDetail = styled.div`
display: flex;
margin-left: 2.5%;
`;

const LeftSection = styled.div`

img{
    width: 712px;
    height: 560px;
    margin-right: 50px;
}
`;

const RightSection = styled.div`
display: flex;
flex-direction: column;

h3{
    font-size: 46px
    font-weight: 700;
    color: #F3692E;
}

h1{
    font-size: 48px;
}

select{
    width: 153px;
    height: 40px;
    border-radius: 8px;
    margin-bottom: 40px;
}

button{
    width: 171px;
    height: 56px;
    background-color: #F86338;
    border-radius: 8px;
    border: none;
    color: white;
    font-size: 16px;
}
`;

const Hr = styled.div`
width: 1200px
height: 2px;
margin-bottom: 100px;
`;

const Desc = styled.div`
margin-left: 2.5%;
h1{
    font-size: 24px;
}

p{
    width: 771px;
    font-size: 16px;
    margin-bottom: 50px;
}
`;