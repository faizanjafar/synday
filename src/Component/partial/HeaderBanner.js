import React from 'react'
import Button1 from './Button1'
import Seller from './Seller'

function HeaderBanner() {
  return (
    <>
      <div className="header_banner">
        <div className="header_banner_content">
          <h1>Headline that grabs people’s attention</h1>
          <p>A powerful headline about your product’s features to give focus
            to your chosen product collection</p>
          <div className="header-btn">
            <Button1 text='Learn More' class='same-btn main-btn' />
            <Button1 text='Projects' class='same-btn white-btn' />
          </div>
        </div>
          <Seller />
      </div>
    </>
  )
}

export default HeaderBanner