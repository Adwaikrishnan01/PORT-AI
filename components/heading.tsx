import { ArrowRightIcon, LucideIcon } from "lucide-react";
import { cn } from '../lib/utils'
interface HeadingProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  iconcolor?: string;
  bgcolor?: string;
}

export const Heading = ({
  title, description, Icon, iconcolor, bgcolor }: HeadingProps) => {
  return (<>
    <div className="px-4 py-1 lg:px-8 flex items-center border-2 rounded-md mx-3 ">
      <div className="flex">
        <div className={cn("w-fit rounded-md", bgcolor)}>
          <div className={cn("w-10 h-10", iconcolor)}>
            <Icon className="w-10 h-10"></Icon></div>
        </div>
        <div className="mx-2">
          <div className="2xl font-bold">{title}</div>
          <p className="text-sm text-muted-foreground px-1">{description}</p>
        </div></div>
      
    </div>
  </>)
}
