import React from 'react'

function CommonDev({content, dev1, name, skill}) {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mb-lg-0">
                <div className="developer-content">
                  <p> {content} </p>
                  <div className="dev">
                    <img src={dev1} className='img-fluid' alt="developer" />
                    <div className="dev-name ms-3">
                      <h4> { name } </h4>
                      <h5>{skill} </h5>
                    </div>
                  </div>
                </div>
              </div>
    </>
  )
}

export default CommonDev