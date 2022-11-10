import React from 'react';
import Button1 from './Button1';

function CommonBanner({ banner01, title, heading, content, banner }) {
  return (
    <>
      <div className={`row banner-container ${banner} mb-5`}>
        <div className="col-lg-7 col-md-6 col-sm-12">
          <div className="banner-content">
            <p className="title"> {title} </p>
            <h2> {heading} </h2>
            <p> {content} </p>
            <Button1 text='Learn More' class='same-btn main-btn' />
          </div>
        </div>
        <div className="col-lg-5 col-md-6 col-sm-12">
          <div className="banner-img">
            <img src={banner01} className='img-fluid' alt="banner-img" />
          </div>
        </div>
      </div>
    </>
  )
}

export default CommonBanner