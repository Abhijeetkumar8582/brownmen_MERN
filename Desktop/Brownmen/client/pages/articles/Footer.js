import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <div className='container'>
          <div className='d-flex justify-content-between align-items-center' style={{ color: "white" }}>
            <div>
              <a>● Terms</a>
              <Link href='/articles/Privacy'>  ● Privacy</Link>
            </div>
            <div>
              <a href="#" className="fa fa-facebook"></a>
              <a href="#" className="fa fa-twitter"></a>
              <a href="#" className="fa fa-google"></a>
              <a href="#" className="fa fa-linkedin"></a>
            </div>
            <div>
              <h6 className='my-1'>© 2023 Brownmen</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer