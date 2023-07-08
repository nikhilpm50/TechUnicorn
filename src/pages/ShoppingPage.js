import React from 'react'
import { styled } from 'styled-components'
import NavBar from '../Homepage/components/NavBar';
import ShopSection from '../ShoppingPage/components/ShopSection';
import ProductSection from '../ShoppingPage/components/ProductSection';
import Footer from '../Homepage/components/Footer'

function ShoppingPage() {
  return (
    <RootDiv>
        <NavBar />
        <ShopSection />
        <ProductSection />
        <Footer />
    </RootDiv>
  )
}

export default ShoppingPage

const RootDiv = styled.div`

`;