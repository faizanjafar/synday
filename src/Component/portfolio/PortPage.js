import React from 'react';
import CommonPort from './CommonPort'
import img1 from '../../img/portfolio1.jpg'
import img2 from '../../img/portfolio2.png'
import img3 from '../../img/portfolio3.jpg'
import img4 from '../../img/portfolio4.png'
import img5 from '../../img/portfolio5.png'

function PortPage() {
  return (
    <>
      <section className="portfolio-page same-section">
        <div className="container">
          <div className="portfolio-heading d-flex justify-content-between align-items-center text-center text-lg-start flex-column flex-lg-row">
            <h2>Our portfolio</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <CommonPort img={img1} text='YOUR IDENTITY' title='Pattern Exploration'  />
              <CommonPort img={img2} text='YOUR IDENTITY' title='Pattern Exploration'  />
              <CommonPort img={img4} text='YOUR IDENTITY' title='Pattern Exploration'  />
            </div>
            <div className="col-lg-6 col-md-12">
            <CommonPort img={img3} text='YOUR IDENTITY' title='Pattern Exploration'  />
            <CommonPort img={img5} text='YOUR IDENTITY' title='Pattern Exploration'  />
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default PortPage