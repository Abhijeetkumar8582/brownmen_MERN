import '@/styles/globals.css'
import Footer from './articles/Footer'
import Navbar from './articles/Navbar'

export default function App({ Component, pageProps }) {
  const shouldRenderNavbarAndFooter = Component.requireNavbarAndFooter;
  
  return <>
 {shouldRenderNavbarAndFooter && <Navbar />}
<Component {...pageProps} />
{shouldRenderNavbarAndFooter && <Footer/>}
  </>
}
