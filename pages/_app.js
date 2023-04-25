import '@/styles/globals.css'
import { AppProvider } from '@/utils/Context'

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}
