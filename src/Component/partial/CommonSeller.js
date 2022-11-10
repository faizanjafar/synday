import React from 'react'

function CommonSeller({title, content, i}) {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mb-lg-0">
        <div className="seller-content">
          <div className="icon">
            <i class={`${i}`}></i>
            <h5>{title}</h5>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommonSeller