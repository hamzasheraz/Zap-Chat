import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const Backbutton = () => {
    return (
        <div className="flex justify-center">
            <Link href="/login" passHref>
                <Button className="flex items-center space-x-2">
                    <ArrowLeft className="h-4 w-4" />
                    <span>Back to Home</span>
                </Button>
            </Link>
        </div>
    )
}

export default Backbutton;