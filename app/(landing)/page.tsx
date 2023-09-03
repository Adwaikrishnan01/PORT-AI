import { Button } from "../../components/ui/button"
import Link from "next/link"
const DashboardPage=()=>{
    return(<div>
        <h1>unprotected page</h1>
        <Link href='sign-up'><button>register</button></Link>
        <Link href='sign-in'><button>login</button></Link>
        </div>
        )
}
export default DashboardPage