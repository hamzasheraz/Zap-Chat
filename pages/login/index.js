import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Zap, AlertCircle } from 'lucide-react'
import Loginform from '@/components/loginform'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
  
    const handleLogin = (e) => {
      e.preventDefault()
      // Here you would typically handle the login logic
      console.log('Login attempted with:', email, password)
      // For demonstration, we'll just show an error if fields are empty
      if (!email || !password) {
        setError('Please fill in all fields')
      } else {
        setError('')
        // Proceed with login...
      }
    }
  
    const handleGoogleSignIn = () => {
      // Here you would typically handle Google Sign-In
      console.log('Google Sign-In attempted')
    }
  
    return (
      (<div
        className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <Card className="w-full max-w-md">
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
          <CardContent>
            <Loginform handleLogin={handleLogin} email={email} setEmail={setEmail} password={password} setPassword={setPassword} error={error} />
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <Button variant="outline" className="w-full" onClick={handleGoogleSignIn}>
              <svg
                className="mr-2 h-4 w-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512">
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
              </svg>
              Sign in with Google
            </Button>
          </CardContent>
          <CardFooter>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 w-full">
              Don&apos;t have an account?{' '}
              <a href="#" className="font-medium text-primary hover:underline">
                Sign up
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>)
    );
}

export default Login;