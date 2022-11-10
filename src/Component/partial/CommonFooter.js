import React from 'react'
import { NavLink } from 'react-router-dom'

function CommonFooter({heading, service, portfolio, about, career}) {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12 mb-5 mb-lg-0 d-flex justify-content-start justify-content-lg-end">
        <ul>
          <h5> {heading} </h5>
          <li><NavLink to=''>{service}</NavLink></li>
          <li><NavLink to=''>{portfolio}</NavLink></li>
          <li><NavLink to=''>{about}</NavLink></li>
          <li><NavLink to=''>{career}</NavLink></li>
        </ul>
      </div>
    </>
  )
}

export default CommonFooter