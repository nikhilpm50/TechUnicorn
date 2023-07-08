import React from 'react'
import productImage from '../../assets/shopImage.png'
import fav from '../../assets/productLike.png'
import { styled } from 'styled-components'

function ProductCard({title, category, price, image}) {
  return (
    <Product>
            <ImageDiv>
              <img src={image ? image : productImage} />
              <img id='fav' src={fav} />
            </ImageDiv>
            <TextDiv>
               <p id='bags'>{category ? category : 'Bags'}</p>
               <p id='summer'>{title ? title : 'Queen’s Summer'}</p>
               <p id='price'>{price ? "$" + price : '$1000'}</p>
            </TextDiv>
    </Product>
  )
}

export default ProductCard

const Product = styled.div`
width: 296px;
height: 449px;
margin-right: 15px;
margin-bottom: 80px;
`;

const ImageDiv = styled.div`
position: relative;
width: 296px;
height: 296px;
margin-bottom: 15px;
img{
  width: 296px;
  height: 296px;
}
img#fav{
  width: 40px;
  height: 40px;
  position: absolute;
  right: 8px;
  top: 8px;
  cursor: pointer;
}
`;

const TextDiv = styled.div`
p#bags{
  font-size: 14px;
  font-weight: 500;
  color: #F3692E;
  margin: 2px;
  margin-bottom: 10px;
}
p#summer{
  font-size: 24px;
  font-weight: 700;
  margin: 2px;
  margin-bottom: 10px;
  height: 68px;
  width: 293px;
  text-overflow: ellipsis;
  overflow: hidden;
}
p#medium{
  font-size: 12px;
  color: #515151;
  margin: 2px;
  margin-bottom: 10px;
}
p#price{
  font-size: 24px;
  color: #F3692E;
  font-weight: 700;
  margin: 2px;
  margin-bottom: 10px;
}
`;