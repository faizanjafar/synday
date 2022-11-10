import React from 'react'
import Banner01 from './partial/Banner01'
import Developer from './partial/Developer'
import Footer from './partial/Footer'
import HeaderBanner from './partial/HeaderBanner'
import HireBanner from './partial/HireBanner'
import OurPortfolio from './partial/OurPortfolio'

function Home() {
  return (
    <>
      <HeaderBanner/>
      <Banner01/>
      <OurPortfolio/>
      <Developer />
      <HireBanner />
      <Footer />
    </>
  )
}

export default Home