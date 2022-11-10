import React from 'react';
import map from '.././img/map.png'
import Footer from './partial/Footer';
import Form from './partial/Form';
import HireBanner from './partial/HireBanner';

function Contact() {
  return (
    <>
      <section className="contact same-section">
        <div className="container">
          <div className="portfolio-heading d-flex justify-content-between align-items-center text-center text-lg-start flex-column flex-lg-row">
            <h2>Contact Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
          <div className="row py-5">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-5 mb-lg-0">
              <div className="single-contact-page">
                <h5>EMAIL</h5>
                <h4>office@example.org</h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-5 mb-lg-0">
            <div className="single-contact-page">
                <h5>LOCATION</h5>
                <h4>899 E Jersey St, New York</h4>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-5 mb-lg-0">
            <div className="single-contact-page">
                <h5>SOCIAL</h5>
                <div className="social-icon">
                  <span><i className='fa-brands fa-facebook'></i></span>
                  <span><i className='fa-brands fa-twitter'></i></span>
                  <span><i className='fa-brands fa-instagram'></i></span>
                  <span><i className='fa-brands fa-linkedin'></i></span>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-5">
            <div className="col-lg-12 col-sm-12">
              <img src={map} className='img-fluid' alt="map" />
            </div>
          </div>
        </div>
        <Form />
      </section>
        <HireBanner/>
        <Footer/>
    </>
  )
}

export default Contact