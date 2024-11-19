import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import Submitbutton from "@/components/submitbutton"
import Success from "@/components/success"

const Newcontact = ({ personToAdd, setPersonToAdd, isNewContactModalOpen, setIsNewContactModalOpen, handleAddNewContact }) => {
    return (
        <Dialog open={isNewContactModalOpen} onOpenChange={setIsNewContactModalOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add New Contact</DialogTitle>
                    <DialogDescription>
                        Enter the details of your new contact here. Click save when youre done.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleAddNewContact} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Enter contact name" value={personToAdd.name} autoComplete='name' onChange={(e) => setPersonToAdd({ ...personToAdd, name: e.target.value })} required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter contact email" value={personToAdd.email} autoComplete='email' onChange={(e) => setPersonToAdd({ ...personToAdd, email: e.target.value })} required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="Enter contact phone number" value={personToAdd.phoneNumber} autoComplete='phone-number' onChange={(e) => setPersonToAdd({ ...personToAdd, phoneNumber: e.target.value })} required />
                    </div>
                    <Success />
                    <Submitbutton message="Save Contact" />
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default Newcontact;