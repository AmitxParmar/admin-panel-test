import Image from 'next/image'
import { Inter } from 'next/font/google'
import DropdownMenu from '@/components/AdminPanel/Dropdown'
import AdminPanel from '@/components/AdminPanel/Index'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <AdminPanel/>
    </main>
  )
}
