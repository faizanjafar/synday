import React from 'react'
import AboutComp from './aboutPartial.js/AboutComp'
import AboutComp2 from './aboutPartial.js/AboutComp2'
import Team from './aboutPartial.js/Team'
import Footer from './partial/Footer'
import HireBanner from './partial/HireBanner'

function About() {
  return (
    <>
      <AboutComp />
      <AboutComp2 />
      <Team />
      <HireBanner/>
      <Footer/>
    </>
  )
}

export default About