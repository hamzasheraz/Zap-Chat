import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Link from 'next/link'
import Formheader from "@/components/formheader"
import Notify from "@/components/notify"
import Passwordform from "@/components/passwordform"
import Backbutton from "@/components/backbutton"

export default function Changepassword() {
    const [user, setUser] = useState({
        token: "",
        newPassword: "",
        confirmPassword: ""
    })
    const [changed, setChanged] = useState(false)
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const urlToken = window.location.search.split("=")[1]
        setUser({ ...user, token: urlToken })
    }, [user])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        setIsLoading(true)

        if (user.newPassword !== user.confirmPassword) {
            setError("Passwords do not match")
            setIsLoading(false)
            return
        }

        if (user.newPassword.length < 8) {
            setError("Password must be at least 8 characters long")
            setIsLoading(false)
            return
        }

        try {
            const response = await fetch("/api/changepassword", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ user }),
            })
            const data = await response.json()
            if (response.ok) {
                setChanged(true)
            } else {
                setError(data.error || "An error occurred while changing the password")
            }
        } catch (error) {
            setError("An unexpected error occurred")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <Card className="w-full max-w-md">
                <Formheader title="Zap Chat Password Change" description="Enter your new password" />
                <CardContent>
                    {!user.token ? (
                        <Notify status="no-token" message="Invalid or missing password reset token." />
                    ) : changed ? (
                        <Notify status="verified" message="Your password has been successfully changed!" />
                    ) : (
                        <Passwordform handleSubmit={handleSubmit} user={user} error={error} isLoading={isLoading}
                        />
                    )}
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Backbutton />
                </CardFooter>
            </Card>
        </div>
    );
}