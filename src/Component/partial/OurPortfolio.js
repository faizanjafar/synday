import React from 'react'
import Button1 from './Button1';
import port1 from '../../img/portfolio1.jpg'
import port2 from '../../img/portfolio2.png'
import port3 from '../../img/portfolio3.jpg'

function OurPortfolio() {
  return (
    <>
      <section className='portfolio-section py-5'>
        <div className="portfolio-heading container">
          <h2>Our Portfolio</h2>
          <Button1 text='View Portfolio' class='same-btn main-btn' />
        </div>
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column mb-4 mb-lg-0">
              <div className="col mb-4 mb-lg-0">
                <img src={port1} className='img-fluid' alt="portfolio-img" />
              </div>
              <div className="col mt-4">
                <img src={port2} className='img-fluid' alt="portfolio-img" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img src={port3} className='img-fluid' alt="portfolio-img" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurPortfolio