import React from 'react'
import CommonSeller from './CommonSeller'

function Seller() {
  return (
    <div>
      <div className="seller">
        <div className="container">
          <div className="row">
            <CommonSeller i="fa-solid fa-camera" title='BRAND IDENTITY' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec. ' />
            <CommonSeller i="fa-solid fa-pen-ruler" title='UI/ux' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec. ' />
            <CommonSeller i="fa-solid fa-code" title='Development' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec. ' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Seller