import { Button } from "@/components/ui/button"
import { UserPlus, Settings } from 'lucide-react'
import Link from 'next/link'

const Options = ({ setIsNewContactModalOpen }) => {
    return (
        <div className="p-4 flex justify-between">
            <Button variant="outline" onClick={() => setIsNewContactModalOpen(true)}>
                <UserPlus className="h-5 w-5 mr-2" />
                New Contact
            </Button>
            <Button variant="outline">
                <Link href="/settings"><Settings className="h-5 w-5" /></Link>
            </Button>
        </div>
    )
}

export default Options