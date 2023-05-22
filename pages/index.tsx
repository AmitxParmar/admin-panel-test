import dynamic from 'next/dynamic'
const AdminPanel = dynamic(() => import("@/components/AdminPanel"))

export default function Home() {
  return (
    <main className={`m-auto min-screeen min-w-screen`}>
      <AdminPanel />
    </main>
  )
}
