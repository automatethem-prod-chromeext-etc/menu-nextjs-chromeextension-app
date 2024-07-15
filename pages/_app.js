import '../styles/globals.css'
import Header from './Header.js';
import Footer from './Footer.js';

function MyApp({ Component, pageProps }) {
  return <>
    <Header/>
    <Component {...pageProps} />
    <Footer/> 
  </>
}

export default MyApp
