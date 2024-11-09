import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"

const Iconbutton = ({ icon: Icon, tooltip, onClick, isActive }) => {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={onClick}>
                    <Icon className={`h-5 w-5 ${isActive ? 'text-red-500' : ''}`} />
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>{tooltip}</p>
            </TooltipContent>
        </Tooltip>
    )
}

export default Iconbutton