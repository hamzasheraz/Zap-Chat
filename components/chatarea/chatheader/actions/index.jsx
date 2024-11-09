import Iconbutton from "@/components/iconbutton";
import { Phone, Video, MoreVertical, CheckSquare } from 'lucide-react'

const Actions = ({toggleTaskList}) => {
    const iconButtons = [
        { icon: Phone, tooltip: "Start voice call" },
        { icon: Video, tooltip: "Start video call" },
        { icon: CheckSquare, tooltip: "Open task list", onClick: toggleTaskList },
        { icon: MoreVertical, tooltip: "More options" },
    ];

    return (
        <div className="flex space-x-2">
            {iconButtons.map((buttonProps, index) => (
                <Iconbutton key={index} {...buttonProps} />
            ))}
        </div>
    );
}

export default Actions