import Hero from '@/components/Hero'
import HomeFeed from '@/components/HomeFeed'
import Trending from '@/components/Trending'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Medium',
  description: 'Discover Ideas and Stories that Matters to You',
}



export default function Home() {
  return (
   <>
   <div>
      <Hero />
      <Trending />
      <HomeFeed />
   </div>
   </>
  )
}
