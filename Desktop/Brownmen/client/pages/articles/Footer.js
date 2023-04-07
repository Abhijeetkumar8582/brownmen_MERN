import React from 'react'

function Footer() {
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <div className='container'>
          <div className='d-flex justify-content-between align-items-center' style={{ color: "white" }}>
            <div>
              <a>● Terms</a>
              <a>  ● Privacy</a>
              </div>
            <div>
              <a href="#" className="fa fa-facebook"></a>
              <a href="#" className="fa fa-twitter"></a>
              <a href="#" className="fa fa-google"></a>
              <a href="#" className="fa fa-linkedin"></a>
            </div>
            <div>
              <p className=' align-items-center'>© 2023 Brownmen</p>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer