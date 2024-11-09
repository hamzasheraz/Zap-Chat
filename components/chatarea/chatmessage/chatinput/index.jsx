import Iconbutton from "@/components/iconbutton";
import { Send, Paperclip, Smile,Mic } from 'lucide-react'
import { Input } from "@/components/ui/input"

const Chatinput = ({ isRecording, toggleRecording}) => {
    const iconButtons = [
        { icon: Paperclip, tooltip: "Attach file" },
        { icon: Smile, tooltip: "Add emoji" },
        {
            icon: Mic,
            tooltip: isRecording ? "Stop recording" : "Start voice message",
            onClick: toggleRecording,
            isActive: isRecording
        },
        { icon: Send, tooltip: "Send message" },
    ];

    return (
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex items-center space-x-2">
            {iconButtons.map((buttonProps, index) => (
                <Iconbutton key={index} {...buttonProps} />
            ))}
            <Input className="flex-grow" placeholder="Type a message..." />
        </div>
    );
}

export default Chatinput