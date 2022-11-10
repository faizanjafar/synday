import React from 'react'
import Button1 from './Button1'

function HireBanner() {
  return (
    <>
      <section className="hire">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 mb-5 mb-lg-0">
              <div className="hire-content">
                <h2>Have a project in mind? Let’s get to work.</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center justify-content-lg-end">
              <div className="button">
                <Button1 text='contact us' class='same-btn main-btn' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HireBanner