"use client"
import Link from "next/link"
import TypewriterComponent from "typewriter-effect";
import { Button } from "../../components/ui/button"
const LandingPage=()=>{
    
    
    const NavbarLanding=()=>{
        return(<div className="top-0 w-full flex items-center bg-black h-20 justify-between px-3 z-200">
            <div><h1 className="text-white decoration-8 font-sans text-2xl font-bold">PORT-AI</h1></div>
            <div className="hidden md:flex"><nav >
            <ul className="text-white flex"><li className="ml-7 ">About</li>
            <li className="ml-7 ">Safety</li>
            <li className="ml-7 ">Company</li>
            </ul></nav></div> 
            <div className="flex justify-between"><Link href='sign-up'><Button className="hidden md:block rounded-none bg-black text-white border-2 border-white hover:bg-white hover:text-black transition duration-300 ease-in-out py-2 px-4 mr-3">Register</Button></Link>
        <Link href='sign-in'><Button className="  rounded-none bg-black text-white border-2 border-white hover:bg-white hover:text-black transition duration-300 ease-in-out py-2 px-4 ">Login</Button></Link></div>
        </div>)
    }

    //footer
    const Footer=()=>{
      return( <div className="bg-black text-white px-2">
          <div className="flex flex-1 items-center py-2 ">
            <h2 className="decoration-8 font-sans text-2xl font-bold ">PORT-AI</h2>
          </div>
          <div className="flex justify-between flex-wrap">
            <div className="blocks md:w-1/3 py-2 mr-2"><p className="font-bold">Overview</p>
            <p>Index</p>
            <p>Generators</p></div>
            <div className="block md:w-1/3 py-2 mr-2"><p className="font-bold">API</p>
            <p>Overview</p>
            <p>Data privacy</p>
            <p>Pricing</p></div>
          
          <div className="blocks md:w-1/3 py-2"><p className="font-bold">Company</p>
          <p>About</p>
          <p>Blog</p>
          <p>Security</p>
          <p>Customer Stories</p>
          <p>Saftey</p></div></div>
          
        </div>)
       
    }

    return(<>
        <NavbarLanding/>
      
      <div className="relative h-400 md:h-800 w-full">
      
   <img src="/AI_bG.jpg" alt="Background Image" className="w-full object-cover brightness-50" ></img>
    <div className="absolute inset-0 md:mt-40 ml-30 md:ml-10 ml-4 space-y-2">
     <p className="text-white text-3xl font-bold ">AI for : </p>
     <div className="text-transparent text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 cols-10 md:cols-5">
     <TypewriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Photo Generation.",
                "Music generation.",
                
              ],
              autoStart: true,
              loop: true,
            }}
          />
     </div>
     <div className="py-2 md:py-9"><Link href='sign-up'> <Button className="rounded-none bg-transparent text-white border-2 
     border-white hover:text-rose-400 transition duration-300 ease-in-out py-2 px-4">Get started</Button></Link>
     </div>
     
    </div>
  </div><Footer/>
     </>
        )
}
export default LandingPage