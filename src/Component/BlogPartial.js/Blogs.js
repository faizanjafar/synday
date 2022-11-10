import React from 'react'
import { NavLink } from 'react-router-dom'
import data from './BlogData';


function Blogs() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="row">
              {
                data.map((item, id) => {
                  const { img, years, location, title, para } = item;
                  return (
                    <div className="col-lg-6 col-md-12 mb-4" key={id}>
                      <div className="blog-content">
                        <img src={img} className='img-fluid' alt="blog-img" />
                        <div className="blog-detail py-3">
                          <div className="date-link mb-3">
                            <NavLink to='' className='year ' >{years}</NavLink>
                            <NavLink to='' className='year ms-4' >{location}</NavLink>
                          </div>
                          <NavLink to=''><h2 className="title">{title}</h2></NavLink>
                          <p>{para}</p>
                          <button>Learn more</button>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className="col-lg-3">
            <div className="blog-right">
              <input type="text" className='form-control' placeholder='search..' />
              <h5 className='post'>Recent Posts</h5>
              <p>Similique quis a libero enim quod corporis</p>
              <p>Similique quis a libero enim quod corporis</p>
              <p>Similique quis a libero enim quod corporis</p>
              <p>Similique quis a libero enim quod corporis</p>
              <p>Similique quis a libero enim quod corporis</p>
                <h5 className='post mb-5'>Recent Comments</h5>
              <div className='mb-5'>
                <h4>Archives</h4>
                <NavLink to=''>November 2021</NavLink>
              </div>
              <div className='mb-5'>
                <h4>Categories</h4>
                <NavLink to=''>November 2021</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogs