import { useState } from 'react'
import { useRouter } from 'next/router'
import { Card, CardContent } from "@/components/ui/card"
import { Zap } from 'lucide-react'
import Link from 'next/link'
import Emailform from '@/components/emailform'


const Forgetpassword = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError('')
        setSuccess('')

        if (!email) {
            setError('Please enter your email address')
            setIsLoading(false)
            return
        }

        try {
            const response = await fetch('/api/forgotpassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            })

            const data = await response.json()
            if (response.ok) {
                setSuccess('Password reset link sent to your email')
            } else {
                setError(data.error || 'An error occurred. Please try again.')
            }
        } catch (error) {
            setError('An unexpected error occurred. Please try again.')
            console.error('Fetch error:', error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        (<div
            className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <Card className="w-full max-w-md">
                <CardContent className="pt-6">
                    <div className="text-center mb-6">
                        <Zap className="h-12 w-12 text-yellow-500 mx-auto mb-2" />
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Forgot Password</h1>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Enter your email to reset your password</p>
                    </div>
                    <Emailform handleSubmit={handleSubmit} email={email} setEmail={setEmail} error={error} success={success} isLoading={isLoading} />
                    <div className="mt-6 text-center">
                        <Link href="/login" className="text-sm text-primary hover:underline">
                            Back to Login
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>)
    );
}


export default Forgetpassword;