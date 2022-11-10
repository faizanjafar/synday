import React from 'react'
import dataT from './TeamData';
function Team() {
  return (
    <>
      <section className="team same-section">
        <div className="container">
          <div className="team-heading mb-5">
            <h5>About us</h5>
            <h2>Meet our team</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae tortor erat hasellus elementum at lacus id consequat.</p>
          </div>
          <div className="row">
            {
              dataT.map((item, ind) => {
                const { img, skill, name, facebook, twitter, instagram } = item
                return (
                  <div className="col-lg-4 col-md-6 col-sm-12 mb-5 mb-lg-0" key={ind}>
                    <div className="team-content">
                      <img src={img} className='img-fluid' alt="team-img" />
                      <div className='pt-2'>
                        <p> {skill} </p>
                        <h3> {name} </h3>
                        <div className="social-icon">
                          <span><i className={`${facebook}`}></i></span>
                          <span><i className={`${twitter}`}></i></span>
                          <span><i className={`${instagram}`}></i></span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div>
      </section>
    </>
  )
}

export default Team