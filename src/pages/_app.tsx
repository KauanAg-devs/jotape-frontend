import { AppProps } from 'next/app'
import '../css/app.css' 

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default MyApp
