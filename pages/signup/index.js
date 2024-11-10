import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Zap, AlertCircle } from 'lucide-react'
import Formheader from '@/components/formheader'
import Formfooter from '@/components/formfooter'

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
                    <form onSubmit={handleSignUp}>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="confirmPassword">Confirm Password</Label>
                                <Input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phoneNumber">Phone Number</Label>
                                <Input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="tel"
                                    placeholder="+1 (555) 000-0000"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First Name</Label>
                                    <Input
                                        id="firstName"
                                        name="firstName"
                                        type="text"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Input
                                        id="lastName"
                                        name="lastName"
                                        type="text"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required />
                                </div>
                            </div>
                            {error && (
                                <Alert variant="destructive">
                                    <AlertCircle className="h-4 w-4" />
                                    <AlertTitle>Error</AlertTitle>
                                    <AlertDescription>{error}</AlertDescription>
                                </Alert>
                            )}
                            <Button type="submit" className="w-full">
                                Sign Up
                            </Button>
                        </div>
                    </form>
                </CardContent>
                <Formfooter page={'signup'} />
            </Card>
        </div>)
    );
}

export default Signup;