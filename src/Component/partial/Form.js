import React from 'react'
import Button1 from './Button1'

function Form() {
  return (
    <>
      <section className='py-5'>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h3 className='form-heading'>Send us a message and we will respond
                as quickly as possible.</h3>
              <form>
                <div class="row">
                  <div class="col-lg-6 col-md-12 mb-4">
                    <label class="form-label">Name <span>*</span></label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="col-lg-6 col-md-12 mb-4">
                    <label class="form-label">Email <span>*</span></label>
                    <input type="email" class="form-control" />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Message <span>*</span></label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                  </div>
                </div>
                    <Button1 text='Submit' class='same-btn main-btn' />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Form