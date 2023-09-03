import { UserButton } from "@clerk/nextjs"
const DashboardPage=()=>{
    return(<div>
        <h1>protected page</h1>
        <div> <UserButton/></div>
    </div>)
}
export default DashboardPage