import '@/styles/globals.css'
import Footer from './articles/Footer'
import Navbar from './articles/Navbar'

export default function App({ Component, pageProps }) {
  return <>
<Navbar/>
<Component {...pageProps} />
<Footer/>
  </>
}
