import { useState } from 'react'
import { Moon, Sun, Search, Phone, Video, MoreVertical, Send, Paperclip, Smile, UserPlus, Settings, Mic, X, CheckSquare, PlusCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Checkbox } from "@/components/ui/checkbox"
import Sidebar from '@/components/sidebar'
import Actions from './actions'

const Chatheader = ({ selectedContact, toggleSidebar, toggleTaskList }) => {
  return (
    <div
      className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <Button variant="ghost" size="icon" className="sm:hidden" onClick={toggleSidebar}>
          <MoreVertical className="h-5 w-5" />
        </Button>
        <Avatar>
          <AvatarImage src={selectedContact.avatar} alt={selectedContact.name} />
          <AvatarFallback>{selectedContact.name[0]}</AvatarFallback>
        </Avatar>
        <span className="font-semibold text-gray-800 dark:text-gray-200">{selectedContact.name}</span>
      </div>
      <Actions toggleTaskList={toggleTaskList} />
    </div>
  )
}

export default Chatheader