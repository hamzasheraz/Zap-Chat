import { ScrollArea } from "@/components/ui/scroll-area"

const Chatmessage = ({ selectedContact }) => {
    return (
        <ScrollArea className="flex-grow p-4 space-y-4">
            <div className="flex justify-end">
                <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs">
                    <p>Hey {selectedContact.name}! How are you doing?</p>
                    <p className="text-xs text-right mt-1 text-blue-100">10:35 PM</p>
                </div>
            </div>
            <div className="flex justify-start">
                <div
                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg py-2 px-4 max-w-xs">
                    <p>Hi! I'm doing great, thanks for asking. How about you?</p>
                    <p className="text-xs text-left mt-1 text-gray-500 dark:text-gray-400">10:36 PM</p>
                </div>
            </div>
            {/* Add more messages here */}
        </ScrollArea>
    )
}

export default Chatmessage