import { Header } from "./_components/header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

  return (

    <div className="min-h-screen">

      <Header />
      <main className="ml-[100px] p-6">
        {children}
      </main>

    </div>
  )
}