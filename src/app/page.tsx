import Hero from '@/components/Hero'
import PostsList from '@/components/PostsList'
import Trending from '@/components/Trending'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <div>
      <Hero />
      <Trending />
      <PostsList />
   </div>
   </>
  )
}
