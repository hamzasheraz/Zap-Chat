import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Zap, AlertCircle } from 'lucide-react'
import Formheader from '@/components/formheader'
import Formfooter from '@/components/formfooter'
import Signupform from '@/components/signupform'

const Signup = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        firstName: '',
        lastName: '',
    })
    const [error, setError] = useState('')
    const title = 'Sign Up for Zap Chat';
    const description = 'Create an account to start chatting';

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSignUp = (e) => {
        e.preventDefault()
        // Basic validation
        if (Object.values(formData).some(field => field === '')) {
            setError('Please fill in all fields')
            return
        }
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match')
            return
        }
        // Here you would typically handle the sign-up logic
        console.log('Sign-up attempted with:', formData)
        setError('')
        // Proceed with sign-up...
    }

    return (
        (<div
            className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <Card className="w-full max-w-md">
                <Formheader title={title} description={description} />
                <CardContent>
                    <Signupform handleSignUp={handleSignUp} formData={formData} handleChange={handleChange} error={error} />
                </CardContent>
                <Formfooter page={'signup'} />
            </Card>
        </div>)
    );
}

export default Signup;