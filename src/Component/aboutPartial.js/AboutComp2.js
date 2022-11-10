import React from 'react'
import img from '../../img/about2.png'
function AboutComp2() {
  return (
    <>
      <section className="about-comp2 same-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
              <img src={img} className='img-fluid' alt="about-img" />
            </div>
            <div className="col-lg-6 col-md-12 mb-2 mb-lg-0">
              <div className="single-content">
                <h2>Our work process</h2>
                <div className='mb-4'>
                  <h5 className='text-white'>01</h5>
                  <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='mb-4'>
                  <h5 className='text-white'>02</h5>
                  <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='mb-3'>
                  <h5 className='text-white'>03</h5>
                  <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutComp2