import Backbutton from "@/components/backbutton"
import Formfooter from "@/components/formfooter"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

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
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">404</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">Oops! Page not found</p>
                    <div className="mb-6">
                        <p className="text-gray-600 dark:text-gray-400">
                            The page you&apos;re looking for doesn&apos;t exist or has been moved.
                        </p>
                    </div>
                   <Backbutton/>
                </CardContent>
               <Formfooter page={'404'} />
            </Card>
        </div>
    )
}

export default NotFound;