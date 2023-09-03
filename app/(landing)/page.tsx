import { Button } from "../../components/ui/button"
import Link from "next/link"
const LandingPage=()=>{
    return(<div>
        <h1>unprotected page</h1>
        <Link href='sign-up'><Button className="secondary">register</Button></Link>
        <Link href='sign-in'><Button>login</Button></Link>
        </div>
        )
}
export default LandingPage