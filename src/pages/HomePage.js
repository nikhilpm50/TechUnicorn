import React from 'react'
import NavBar from '../Homepage/components/NavBar'
import ShopComponent from '../Homepage/components/ShopComponent'
import DressComponent from '../Homepage/components/DressComponent'
import NewArrivalSection from '../Homepage/components/NewArrivalSection'
import DiscountSection from '../Homepage/components/DiscountSection'
import BestSellerSection from '../Homepage/components/BestSellerSection'
import CustomerSection from '../Homepage/components/CustomerSection'
import Footer from '../Homepage/components/Footer'

function HomePage() {
  return (
    <div>
        <NavBar />
        <ShopComponent />
        <DressComponent />
        <NewArrivalSection />
        <DiscountSection />
        <BestSellerSection />
        <CustomerSection />
        <Footer />
    </div>
  )
}

export default HomePage