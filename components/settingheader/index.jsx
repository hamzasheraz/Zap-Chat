import { Button } from "@/components/ui/button"
import { CardTitle } from "@/components/ui/card"
import { Zap, ArrowLeft } from 'lucide-react'

const Settingheader = () => {
    return (
        <div className="flex items-center justify-between">
            <Button variant="ghost" size="icon" className="mr-2">
                <ArrowLeft className="h-6 w-6" />
            </Button>
            <CardTitle className="text-2xl font-bold flex items-center">
                <Zap className="mr-2 h-6 w-6 text-yellow-500" />
                Zap Chat Settings
            </CardTitle>
        </div>
    )
}

export default Settingheader;