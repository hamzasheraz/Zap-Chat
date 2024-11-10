import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

const Newcontact = ({ isNewContactModalOpen, setIsNewContactModalOpen, handleAddNewContact }) => {
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
                        <Input id="name" placeholder="Enter contact name" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter contact email" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" type="tel" placeholder="Enter contact phone number" required />
                    </div>
                    <div className="flex justify-end space-x-2">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => setIsNewContactModalOpen(false)}>
                            Cancel
                        </Button>
                        <Button type="submit">Save Contact</Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default Newcontact;