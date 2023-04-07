import React from 'react'

function Footer() {
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <div className='container'>
          <div className='d-flex justify-content-between align-items-center' style={{ color: "white" }}>
            <div>
              <a>● Terms</a>
              <a>  ● Privacy</a></div>
            <div>
              <a href="#" class="fa fa-facebook"></a>
              <a href="#" class="fa fa-twitter"></a>
              <a href="#" class="fa fa-google"></a>
              <a href="#" class="fa fa-linkedin"></a>
            </div>
            <div className='d-flex align-items-center'>
              <p>© 2023 Brownmen</p>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer