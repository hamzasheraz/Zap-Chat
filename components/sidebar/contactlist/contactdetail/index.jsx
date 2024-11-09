import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Contactdetails = ({contact,setSelectedContact,setIsSidebarOpen}) => {
  return (
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
  )
}

export default Contactdetails