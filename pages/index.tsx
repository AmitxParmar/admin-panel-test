import { Inter } from 'next/font/google'
import AdminPanel from '@/components/AdminPanel'

export default function Home() {
  return (
    <main className={`m-auto min-screeen min-w-screen`}>
      <AdminPanel />
    </main>
  )
}
