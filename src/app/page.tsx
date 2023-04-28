import Hero from '@/components/Hero'
import HomeFeed from '@/components/HomeFeed'
import Trending from '@/components/Trending'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
