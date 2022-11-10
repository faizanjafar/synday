import React from 'react';
import img from '../../img/about.png'

function AboutComp() {
  return (
    <>
        <section className="about same-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 order-1 order-lg-0">
                <div className="single-content">
                  <h5>About us</h5>
                  <h1>Amet minim mollit nocn deserunt</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae tortor erat. Phasellus elementum at lacus id consequat. Nam volutpat tortor sit amet gravida sodales.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae tortor erat. Phasellus elementum at lacus id consequat. Nam volutpat tortor sit amet gravida sodales.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 order-0 order-lg-1">
                <img src={img} className='img-fluid' alt="about-img" />
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default AboutComp