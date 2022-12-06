import { DataProvider } from '../assets/data/TodoData'
import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
    return <DataProvider><Component {...pageProps} /></DataProvider>
  }