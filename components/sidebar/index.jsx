import { Moon, Sun, Search, Phone, Video, MoreVertical, Send, Paperclip, Smile, UserPlus, Settings, Mic, X, CheckSquare, PlusCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Checkbox } from "@/components/ui/checkbox"
import Searchbar from '@/components/sidebar/searchbar'
import Options from './options'
import Upperdisplay from './upperdisplay'
import ContactList from './contactlist'

const Sidebar = ({ isSidebarOpen, toggleDarkMode, darkMode, contacts, setSelectedContact, setIsSidebarOpen, setIsNewContactModalOpen }) => {
    return (
        <div
            className={`w-full sm:w-80 bg-gray-100 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col ${isSidebarOpen ? 'block' : 'hidden sm:block'}`}>
            {/* User info and dark mode toggle */}
            <Upperdisplay darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

            {/* Search bar */}
            <Searchbar />

            {/* Contacts list */}
            <ContactList contacts={contacts} setSelectedContact={setSelectedContact} setIsSidebarOpen={setIsSidebarOpen}/>

            {/* New contact and settings buttons */}
            <Options setIsNewContactModalOpen={setIsNewContactModalOpen} />
        </div>
    )
}

export default Sidebar;