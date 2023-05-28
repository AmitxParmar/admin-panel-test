import dynamic from 'next/dynamic'

import AdminPanel from '@/components/AdminPanel/_index'

export default function Home() {
  return (
    <main className={`m-auto min-h-screen min-w-screen`}>
      <AdminPanel />
    </main>
  )
}
