"use client"
import {
    Sheet,
    SheetClose,
    SheetContent,
    
   
    SheetTrigger,
  } from "./ui/sheet"
  import { Button } from "./ui/button"
 import { Menu } from "lucide-react"
 import Sidebar from "./sidebar"
  function MobileSidebar() {
    return (
      <Sheet>
        <SheetTrigger asChild>
        <Button variant ='ghost' size='icon' className="md:hidden"><Menu/></Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-[300px]">
          <Sidebar/>
        </SheetContent>
      </Sheet>
    )
  }
  export default MobileSidebar