'use client'

import HeroBanner from '../src/pages/home/heroBanner/HeroBanner'
import Trending from '../src/pages/home/trending/Trending'
import Popular from '../src/pages/home/popular/Popular'
import TopRated from '../src/pages/home/topRated/TopRated'
import Upcoming from '../src/pages/home/upcoming/Upcoming'
import '../src/pages/home/style.scss'

export default function Home() {
  return (
    <div className="homePage">
      <HeroBanner />
      <Trending />
      <Popular />
      <Upcoming />
      <TopRated />
    </div>
  )
}
