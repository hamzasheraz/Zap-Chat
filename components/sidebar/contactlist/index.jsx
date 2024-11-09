import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Contactdetails from "./contactdetail"

const ContactList = ({contacts,setSelectedContact,setIsSidebarOpen}) => {
  return (
    <ScrollArea className="flex-grow">
    <div className="p-2 space-y-2">
        {contacts.map((contact) => (
         <Contactdetails contact={contact} key={contact.id} setSelectedContact={setSelectedContact} setIsSidebarOpen={setIsSidebarOpen}/>
        ))}
    </div>
</ScrollArea>
  )
}

export default ContactList