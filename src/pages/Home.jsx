import React, { useEffect, useState } from 'react'
import buyCard from '../data/BuyCard'
import newArrivals from '../data/NewArrivals'
import banner from '../data/Banners'
import FeatureSection from '../components/Home/FeatureSection'
import Hero from '../components/Home/Hero'
import ItemSection from '../components/Home/ItemSection'
import RepairSection from '../components/Home/RepairSection'
import CollectionSection from '../components/Home/CollectionSection'
import SaleSection from '../components/Home/SaleSection'
import SeasonalCollectionSecion from '../components/Home/SeasonalCollectionSecion'
import NewsLetterSection from '../components/Home/NewsLetterSection'
import FooterSection from '../components/Home/FooterSection'

const Home = () => {

  return (
    <div>
        <Hero/>
        <FeatureSection/>
        <ItemSection/>
        <RepairSection/>
        <CollectionSection/>
        <SaleSection/>
        <SeasonalCollectionSecion/>
       </div>
  )
}

export default Home
