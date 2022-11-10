import React from 'react'
import banner01 from '.././img/banner01.jpg'
import CommonBanner from './partial/CommonBanner'
import CommonSeller from './partial/CommonSeller'
import Footer from './partial/Footer'
import HireBanner from './partial/HireBanner'
import ServicePage from './servicesPartial.js/ServicePage'

function Services() {
  return (
    <>
      <section className="services-page same-section">
        <div className="container">
          <div className="heading">
            <h2>Our Services</h2>
          </div>
          <div className="row mb-4">
            <CommonSeller i="fa-solid fa-camera" title='BRAND IDENTITY' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec. ' />
            <CommonSeller i="fa-solid fa-pen-ruler" title='UI/ux' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec. ' />
            <CommonSeller i="fa-solid fa-code" title='Development' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec. ' />
          </div>
          <div className="row mb-4">
            <CommonSeller i="fa-solid fa-camera" title='BRAND IDENTITY' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec. ' />
            <CommonSeller i="fa-solid fa-code" title='Development' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec. ' />
            <CommonSeller i="fa-solid fa-pen-ruler" title='UI/ux' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec. ' />
          </div>
        </div>
      </section>
      <div className="container-fluid">
        <CommonBanner banner01={banner01}
            banner='banner01'
            title='YOUR IDENTITY'
            heading='Amet minim mollit non deserunt'
            content='Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
            dapibus leo.'
          />
        </div>
        <ServicePage />
        <HireBanner />
        <Footer />
    </>
  )
}

export default Services