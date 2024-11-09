import { MoreVertical } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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