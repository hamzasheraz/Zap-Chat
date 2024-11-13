import { Button } from "@/components/ui/button"
import { UserPlus, Settings } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from "next/router"

const Options = ({ setIsNewContactModalOpen }) => {
    const router = useRouter();
    return (
        <div className="p-4 flex justify-between">
            <Button variant="outline" onClick={() => setIsNewContactModalOpen(true)}>
                <UserPlus className="h-5 w-5 mr-2" />
                New Contact
            </Button>
            <Button variant="outline">
                <div className="h-5 w-5" onClick={() => router.push('/settings')}>
                    <Settings />
                </div>
            </Button>
        </div>
    )
}

export default Options