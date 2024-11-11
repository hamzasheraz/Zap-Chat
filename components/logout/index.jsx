import { Separator } from '@/components/ui/separator'
import { Button } from "@/components/ui/button"
import { LogOut } from 'lucide-react'

const Logout = ({ handleLogout }) => {
    return (
        <>
            <Separator className="my-6" />
            <div className="flex justify-center">
                <Button
                    variant="destructive"
                    onClick={handleLogout}
                    className="flex items-center space-x-2">
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                </Button>
            </div>
        </>
    )
}

export default Logout;