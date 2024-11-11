import Backbutton from "@/components/backbutton"
import Formfooter from "@/components/formfooter"
import Notfounddescription from "@/components/notfounddescription"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap } from 'lucide-react'

const NotFound = () => {
    return (
        <div
            className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle
                        className="text-2xl font-bold text-center flex items-center justify-center">
                        <Zap className="mr-2 h-8 w-8 text-yellow-500" />
                        Zap Chat
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                    <Notfounddescription />
                    <Backbutton />
                </CardContent>
                <Formfooter page={'404'} />
            </Card>
        </div>
    )
}

export default NotFound;