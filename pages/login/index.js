import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Loginform from '@/components/loginform'
import Googlelogin from '@/components/loginform/googlelogin'
import Formheader from '@/components/formheader'
import Formfooter from '@/components/formfooter'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const title = 'Zap Chat';
    const description = 'Enter your email and password to login';

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
                <Formheader title={title} description={description} />
                <CardContent>
                    <Loginform handleLogin={handleLogin} email={email} setEmail={setEmail} password={password} setPassword={setPassword} error={error} />
                    <Googlelogin handleGoogleSignIn={handleGoogleSignIn} />
                </CardContent>
                <Formfooter page={'login'} />
            </Card>
        </div>)
    );
}

export default Login;