'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


type Props = {}

const MenuOptions = (props: Props) => {
  const pathName = usePathname()

  return (
    <nav className='dark:bg-black h-screen overflow-scroll justify-between flex flex-col gap-10 py-6 px-2' >
      <div className='flex items-center justify-center flex-col gap-8' >
        <Link 
          className="flex font-bold flex-row"
          href="/"
        >
          Fuzzie
          </Link>
          <TooltipProvider> 
            {menuOptions.map(()=>(
              <div>
              <Tooltip>
              <TooltipTrigger>Hover</TooltipTrigger>
              <TooltipContent>
              <p>Add to library</p>
              </TooltipContent>
              </Tooltip>
              </div>
            ))}
            </TooltipProvider>
      </div>

    </nav>
  )
}

export default MenuOptions