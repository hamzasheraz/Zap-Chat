import { Separator } from '@/components/ui/separator'
import { Button } from "@/components/ui/button"
import { LogOut } from 'lucide-react'
import { Loader2 } from 'lucide-react'

const Logout = ({ loading, handleLogout }) => {
    return (
        <>
            <Separator className="my-6" />
            <div className="flex justify-center">
                <Button
                    variant="destructive"
                    onClick={handleLogout}
                    disabled={loading}
                    className="flex items-center space-x-2">
                    <LogOut className="h-4 w-4" />
                    {loading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Logging out...
                        </>
                    ) : (
                        <span>Logout</span>
                    )}
                </Button>
            </div>
        </>
    )
}

export default Logout;