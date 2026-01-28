'use client'

import HeroBanner from '../src/pages_old/home/heroBanner/HeroBanner'
import Trending from '../src/pages_old/home/trending/Trending'
import Popular from '../src/pages_old/home/popular/Popular'
import TopRated from '../src/pages_old/home/topRated/TopRated'
import Upcoming from '../src/pages_old/home/upcoming/Upcoming'
import '../src/pages_old/home/style.scss'

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
