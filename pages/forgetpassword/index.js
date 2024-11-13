import { useState } from 'react'
import { useRouter } from 'next/router'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Zap, AlertCircle, Loader2 } from 'lucide-react'
import Link from 'next/link'


const Forgetpassword = () => {
    const router = useRouter()
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
        const response = await fetch('/api/forgot-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        })
  
        const data = await response.json()
        if (response.ok) {
          setSuccess('Password reset link sent to your email')
          // Optionally, redirect to a confirmation page
          // router.push('/password-reset-sent')
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required />
              </div>
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              {success && (
                <Alert
                  variant="default"
                  className="bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-100">
                  <AlertDescription>{success}</AlertDescription>
                </Alert>
              )}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending Reset Link...
                  </>
                ) : (
                  'Send Reset Link'
                )}
              </Button>
            </form>
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