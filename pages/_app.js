import Appbar from '../components/appbar'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
  <Appbar />
  <Component {...pageProps} />
  </>
}
