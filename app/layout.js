import '../src/index.scss'
import { ReduxProvider } from './providers'
import { AppInitializer } from './AppInitializer'
import Header from '../src/components/header/Header'
import Footer from '../src/components/footer/Footer'

export const metadata = {
  title: 'MovieHub - Discover Movies & TV Shows',
  description: 'A sleek and dynamic movie discovery platform. Explore the latest movies, watch trailers, browse cast info, and filter films by genre.',
  keywords: 'movies, tv shows, movie database, TMDB, trailers, cast, genres',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <AppInitializer />
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  )
}
