import React from 'react'
import Blogs from './BlogPartial.js/Blogs'
import Footer from './partial/Footer'

function Blog() {
  return (
    <>
      <section className="section mb-5">
        <Blogs />
      </section>
        <Footer />
    </>
  )
}

export default Blog