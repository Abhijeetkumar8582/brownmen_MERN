import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <>
      <div className='footer_main_Div'>
        <div className='footer_main_Div_one'>
          <div><Link href="/articles/Terms" style={{outline:'none',textDecoration:'none'}}><h6 className='footer_main_Div_text'>Terms</h6></Link></div>
          <div><Link href="/articles/Privacy" style={{outline:'none',textDecoration:'none'}}><h6 className='footer_main_Div_text'>Privacy</h6></Link></div>
        </div>
        <div className='footer_main_Div_copyright_div'><h6 className='footer_main_Div_text'>© 2023 Brownmen</h6></div>
        <div className='footer_main_Div_social'>
          <div>
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </div>
          <div>
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </div>
          <div>
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer