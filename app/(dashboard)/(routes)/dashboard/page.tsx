import { UserButton } from "@clerk/nextjs"
import { Card } from "../../../../components/ui/card"
import { Image, MessageCircle, MessageSquare, Music3Icon, Video } from "lucide-react"
import { cn } from "../../../../lib/utils"
const tools=[
    {
    label:"Conversation",
    icon:MessageCircle,
    color:"text-violet",
    href:"/conversation",
    bgColor:"bg-purple-400",
},
{
    label:"ImageGeneration",
    icon:Image,
    color:"text-violet",
    href:"/conversation",
    bgColor:"bg-rose-400",

},
{
    label:"Music Generation",
    icon:Music3Icon,
    color:"text-violet",
    href:"/conversation",
    bgColor:"bg-green-400",
},
{
    label:"Video Generation",
    icon:Video,
    color:"text-violet",
    href:"/conversation",
    bgColor:"bg-red-400",
},
    
]

const DashboardPage=()=>{

    return(<div>
        <div className="mb-8 space-y-4">
            <h2 className="text 2xl md:text-4xl font-bold text-center">Explore the power of AI</h2>
        </div>
        <div className="px-4 md:px-20 lg:px-30 space-y-4">
           {tools.map((tool)=>(
              <Card className="p-4 border-black/6 flex items-center justify-between cursor-pointer" key={tool.href}>
                <div className="flex items-center gap-x-4">
                    <div className={cn("p-2 w-fit rounded-md",tool.bgColor)}>
                        <tool.icon className={cn("w-8 h-8",tool.color)}></tool.icon></div>
                    
                    <div className="font-semibold">{tool.label}</div>
                    </div>
                
              </Card>
           ))}
        </div>
      
    </div>)
}
export default DashboardPage