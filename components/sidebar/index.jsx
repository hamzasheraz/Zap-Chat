import { Moon, Sun, Search, Phone, Video, MoreVertical, Send, Paperclip, Smile, UserPlus, Settings, Mic, X, CheckSquare, PlusCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Checkbox } from "@/components/ui/checkbox"
import Searchbar from './searchbar'
import Options from './options'
import Upperdisplay from './upperdisplay'

const Sidebar = ({ isSidebarOpen, toggleDarkMode, darkMode, contacts, setSelectedContact, setIsSidebarOpen, setIsNewContactModalOpen }) => {
    return (
        <div
            className={`w-full sm:w-80 bg-gray-100 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col ${isSidebarOpen ? 'block' : 'hidden sm:block'}`}>
            {/* User info and dark mode toggle */}
            <Upperdisplay darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

            {/* Search bar */}
            <Searchbar />

            {/* Contacts list */}
            <ScrollArea className="flex-grow">
                <div className="p-2 space-y-2">
                    {contacts.map((contact) => (
                        <div
                            key={contact.id}
                            className="flex items-center space-x-3 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer transition-colors duration-200"
                            onClick={() => {
                                setSelectedContact(contact)
                                setIsSidebarOpen(false)
                            }}>
                            <Avatar>
                                <AvatarImage src={contact.avatar} alt={contact.name} />
                                <AvatarFallback>{contact.name[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-grow">
                                <p className="font-medium text-gray-800 dark:text-gray-200">{contact.name}</p>
                                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{contact.lastMessage}</p>
                            </div>
                            <span className="text-xs text-gray-400 dark:text-gray-500">{contact.time}</span>
                        </div>
                    ))}
                </div>
            </ScrollArea>

            {/* New contact and settings buttons */}
            <Options setIsNewContactModalOpen={setIsNewContactModalOpen} />
        </div>
    )
}

export default Sidebar;