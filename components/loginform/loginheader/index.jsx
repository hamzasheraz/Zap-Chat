import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap } from 'lucide-react'

const Loginheader = () => {
    return (
        <CardHeader className="space-y-1">
            <CardTitle
                className="text-2xl font-bold text-center flex items-center justify-center">
                <Zap className="mr-2 h-6 w-6 text-yellow-500" />
                Zap Chat
            </CardTitle>
            <CardDescription className="text-center">
                Enter your email and password to login
            </CardDescription>
        </CardHeader>
    )
}

export default Loginheader;