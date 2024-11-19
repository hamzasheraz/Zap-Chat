import { ScrollArea } from "@/components/ui/scroll-area"
import Contactdetails from "./contactdetail"
import { useSelector } from "react-redux"

const ContactList = ({ setSelectedContact, setIsSidebarOpen }) => {
  const contacts = useSelector((state) => state.user.contacts);
  return (
    <ScrollArea className="flex-grow">
      <div className="p-2 space-y-2">
        {contacts.map((contact) => (
          <Contactdetails contact={contact} key={contact.id} setSelectedContact={setSelectedContact} setIsSidebarOpen={setIsSidebarOpen} />
        ))}
      </div>
    </ScrollArea>
  )
}

export default ContactList