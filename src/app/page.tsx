import Trending from '@/components/Trending'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <div>
      <Trending />
   </div>
   </>
  )
}
