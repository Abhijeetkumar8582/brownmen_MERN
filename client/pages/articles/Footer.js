import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <>
      <div className='footer_main_Div'>
        <div className='footer_main_Div_one'>
          <div><h6 className='footer_main_Div_text'>Terms</h6></div>
          <div><h6 className='footer_main_Div_text'>Privacy</h6></div>
        </div>
        <div className='footer_main_Div_copyright_div'><h6 className='footer_main_Div_text'>© 2023 Brownmen</h6></div>
        <div className='footer_main_Div_social'>
          <div>
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </div>
          <div>
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </div>
          <div>
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer