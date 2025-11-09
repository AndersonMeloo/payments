
import Link from "next/link"
import { HandCoins, LayoutDashboard, LogOut, UserRound } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

export function Header() {

  return (

    // bg-background/95
    <header className="fixed left-6 top-6 z-50 h-[90vh] w-[100px] border backdrop-blur-sm rounded-4xl shadow-lg flex flex-col bg-principal">
      <div className="flex flex-col h-full w-full px-4 py-6">

        <div className="flex items-center justify-center mb-8">
          <Link href="/dashboard" className="flex flex-col items-center gap- text-[#429e7a]">
            <HandCoins
              className="h-6 w-6 mr-2" />
            <span className="text-xl font-bold text-center text-[#429e7a]">
              PayHub
            </span>
          </Link>
        </div>

        <nav className="flex flex-col items-center gap-6 flex-1">
          <div className="flex flex-col items-center gap-6 w-full">

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/dashboard"
                  className="flex flex-col items-center gap-2 text-sm font-medium transition-colors hover:text-primary w-full py-3 rounded-lg hover:bg-accent cursor-pointer"
                >
                  <LayoutDashboard className="h-5 w-5 text-[#3cc9f5]" />
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
                  className="flex flex-col items-center gap-2 text-sm font-medium transition-colors hover: w-full py-3 rounded-lg hover:bg-accent cursor-pointer"
                >
                  <UserRound className="text-[#3cc9f5]" />
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
                    className="text-[#3cc9f5]  rounded-full cursor-pointer"
                  >
                    <LogOut className="h-5 w-5" />
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
