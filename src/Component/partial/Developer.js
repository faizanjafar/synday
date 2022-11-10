import React from 'react'
import dev1 from '../../img/dev1.png'
import CommonDev from './CommonDev'
import dev2 from '../../img/dev2.png'
import dev3 from '../../img/dev3.jpg'

function Developer() {
  return (
    <>
        <section className="section developer">
          <div className="container">
            <div className="row">
              <CommonDev content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' dev1={dev1} name='Ashley Right' skill='DESIGNER' />
              <CommonDev content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' dev1={dev2} name='John Pual' skill='DEVELOPER' />
              <CommonDev content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.' dev1={dev3} name='Bill Jackson' skill='MARKETING' />
            </div>
          </div>
        </section>
    </>
  )
}

export default Developer