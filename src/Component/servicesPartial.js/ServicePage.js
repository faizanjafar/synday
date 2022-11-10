import React from 'react';
import img from '../../img/services-page.png'
import Brand from './Brand';

function ServicePage() {
  return (
    <>
        <section className='services same-section'>
            <div className="container">
              <h5>YOUR IDENTITY</h5>
              <h3>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.</h3>
              <div className="row d-flex align-items-center justify-content-start">
                <div className="col-lg-6 col-md-12 mb-5 mb-lg-0">
                    <div className="service-img">
                      <img src={img} className='img-fluid' alt="services-page" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 mb-1 right-brand">
                    <Brand />
                    <Brand />
                </div>
              </div>
            </div>
        </section>
    </>
  )
}

export default ServicePage