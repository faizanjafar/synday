import React from 'react'

function CommonPort({img, text, title}) {
  return (
    <>
      <div className="col-12 mb-5">
        <img src={img} className='img-fluid' alt="portfolio-img" />
        <p>{text}</p>
        <h4>{title}</h4>
      </div>
    </>
  )
}

export default CommonPort