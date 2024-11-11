import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Link from 'next/link'
import Formheader from "@/components/formheader"
import Notify from "@/components/notify"

export default function VerifyEmailPage() {
    const [token, setToken] = useState("")
    const [verified, setVerified] = useState(false)
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1]
        setToken(urlToken || "")
    }, [])

    useEffect(() => {
        const verifyUserEmail = async () => {
            if (token.length > 0) {
                try {
                    setIsLoading(true)
                    const response = await fetch("/api/verifyemail", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ token }),
                    })
                    await response.json()
                    if (response.ok) {
                        setVerified(true)
                    } else {
                        setError(true)
                    }
                } catch (error) {
                    setError(true)
                } finally {
                    setIsLoading(false)
                }
            } else {
                setIsLoading(false)
            }
        }

        verifyUserEmail()
    }, [token])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <Card className="w-full max-w-md">
                <Formheader title="Zap Chat Email Verification" description="Verifying your email address" />
                <CardContent>
                    {isLoading ? (
                        <div className="text-center">
                            <p className="text-gray-600 dark:text-gray-400">Verifying your email...</p>
                        </div>
                    ) : verified ? (
                        <Notify status="verified" />
                    ) : error ? (
                        <Notify status="error" />
                    ) : (
                        <Notify status="no-token" />
                    )}
                </CardContent>
                <CardFooter className="flex justify-center">
                    {verified ? (
                        <Link href="/login" passHref>
                            <Button>Proceed to Login</Button>
                        </Link>
                    ) : (
                        <Link href="/" passHref>
                            <Button variant="outline">Return to Home</Button>
                        </Link>
                    )}
                </CardFooter>
            </Card>
        </div>
    )
}