
import Link from "next/link"
import { HandCoins, LayoutDashboard, LogOut, UserRound } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export function Header() {

  return (

    // bg-background/95
    <header className="fixed left-6 top-6 z-50 h-[90vh] w-[80px]  backdrop-blur-sm rounded-4xl shadow-lg flex flex-col bg-principal">
      <div className="flex flex-col h-full w-full px-4 py-6">

        {/* <div className="flex items-center justify-center mb-8">
          <Link href="/dashboard" className="flex flex-col items-center gap- text-[#429e7a]">
            <HandCoins
              className="h-6 w-6 mr-2" />
            <span className="text-xl font-bold text-center text-[#429e7a]">
              PayHub
            </span>
          </Link>
        </div> */}

        <nav className="flex flex-col items-center gap-6 flex-1">
          <div className="flex flex-col items-center gap-6 w-full">

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/dashboard"
                  className="group flex flex-col items-center gap-2 text-sm font-medium transition-colors hover:text-primary w-full py-3 rounded-lg hover:bg-[linear-gradient(180deg,#25244D_0%,#1F1E46_100%)] cursor-pointer"
                >
                  <LayoutDashboard className="h-5 w-5 text-[#6F6CA8] transition-colors group-hover:text-white" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                Dashboard
              </TooltipContent>
            </Tooltip>


            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/dashboard//me"
                  className="group flex flex-col items-center gap-2 text-sm font-medium transition-colors hover:text-primary w-full py-3 rounded-lg hover:bg-[linear-gradient(180deg,#25244D_0%,#1F1E46_100%)] cursor-pointer"
                >
                  <UserRound className="text-[#6F6CA8] transition-colors group-hover:text-white" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                User
              </TooltipContent>
            </Tooltip>
          </div>

          <div className="mt-auto w-fu  ll flex justify-center">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={'/'}>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="group text-[#6F6CA8] rounded-full cursor-pointer hover:bg-[linear-gradient(180deg,#25244D_0%,#1F1E46_100%)]"
                  >
                    <LogOut className="h-5 w-5 group-hover:text-white" />
                  </Button>
                </Link>

              </TooltipTrigger>
              <TooltipContent>
                Sair
              </TooltipContent>
            </Tooltip>
          </div>
        </nav>
      </div >
    </header >
  )
}
