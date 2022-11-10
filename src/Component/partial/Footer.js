import React from 'react'
import CommonFooter from './CommonFooter'

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 mb-5 mb-lg-0">
              <div className="footer-content">
                <div className="logo">
                  <h2>Sydney</h2>
                </div>
              </div>
            </div>
            <CommonFooter heading='ABOUT' service='Services' portfolio='Portfolio' about='About' career='Career' />
            <CommonFooter heading='LOCATION' service='Amsterdam' portfolio='London' about='Paris' career='New York' />
            <CommonFooter heading='POLICY' service='Privacy' portfolio='Cookie policy' about='Terms & conditions' career='About us' />
          </div>
        </div>
        <div className="container footer-container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4 mb-md-0 text-center text-md-start">
              <div className="left">
                <p className='mb-0'>© 2022 Sydney. Proudly powered by Sydney</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12  text-center text-md-end">
              <div className="right">
                <span><i class="fa-brands fa-facebook"></i></span>
                <span><i class="fa-brands fa-twitter"></i></span>
                <span><i class="fa-brands fa-instagram"></i></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer