import '@/styles/globals.css'
import TheFooter from '../../components/TheFooter'


export default function App({ Component, pageProps }) {
  return (
  
      <main>
        <Component {...pageProps} />
 
        <TheFooter />
      </main>
  )
}
