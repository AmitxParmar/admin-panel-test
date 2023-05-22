'use-client'

import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'


const inter = Inter({ subsets: ['latin'] })

import AdminPanel from '@/components/AdminPanel'

export default function Home() {
  return (
    <main
      className={`m-auto`}
    >
      <AdminPanel />
    </main>
  )
}
