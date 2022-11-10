import React from 'react';
import banner01 from '../../img/banner01.jpg'
import bannerImg from '../../img/banner02.jpg'
import CommonBanner from './CommonBanner';

function Banner01() {
  return (
    <>
      <div className="section banner01">
        <div className="container-fluid">
          <CommonBanner banner01={banner01}
            banner='banner01'
            title='YOUR IDENTITY'
            heading='Amet minim mollit non deserunt'
            content='Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
            dapibus leo.'
          />
          <CommonBanner banner01={bannerImg}
            banner='banner02'
            title='YOUR IDENTITY'
            heading='Amet minim mollit non deserunt'
            content='Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
            dapibus leo.'
          />
        </div>
      </div>
    </>
  )
}

export default Banner01