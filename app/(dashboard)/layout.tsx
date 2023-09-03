import Navbar from "../../components/navbar";
import DashboardPage from "./(routes)/dashboard/page";
const DashboardLayout= ({children}:{ children:React.ReactNode;})=>{
  return(
    <div className="h-full relative">
        <div className="h-full md:flex md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-slate-800">
          Sidebar
        </div>
    <main className="md:pl-72 pb-10" >
      <Navbar/>mainpage
    </main>
    </div>
  )};

export default DashboardLayout
