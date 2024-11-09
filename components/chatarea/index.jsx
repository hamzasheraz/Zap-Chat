import { MoreVertical } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Chatheader from './chatheader'
import Chatmessage from './chatmessage'
import Chatinput from './chatmessage/chatinput'

const Chatarea = ({ selectedContact, toggleSidebar, toggleTaskList, toggleRecording, isRecording }) => {
    return (

        <div className="flex-grow flex flex-col bg-white dark:bg-gray-900">
            {selectedContact ? (
                <>
                    <Chatheader selectedContact={selectedContact} toggleSidebar={toggleSidebar} toggleTaskList={toggleTaskList} />

                    {/* Chat messages */}
                    <Chatmessage selectedContact={selectedContact} />

                    {/* Message input */}
                    <Chatinput isRecording={isRecording} toggleRecording={toggleRecording} />
                </>
            ) : (
                <div
                    className="flex-grow flex items-center justify-center text-gray-500 dark:text-gray-400">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="sm:hidden absolute top-4 left-4"
                        onClick={toggleSidebar}>
                        <MoreVertical className="h-5 w-5" />
                    </Button>
                    Select a contact to start chatting
                </div>
            )}
        </div>
    )
}

export default Chatarea