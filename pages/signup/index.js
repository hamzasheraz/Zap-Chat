import { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
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
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
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
        setLoading(true);

        if (Object.values(formData).some(field => field === '')) {
            setError('Please fill in all fields')
            setLoading(false);
            return
        }
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match')
            setLoading(false);
            return
        }

        const initialFormData = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
        };

        fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(async response => {
                const data = await response.json();
                if (response.ok) {
                    setError('');
                    setSuccess(data.message);
                    setFormData(initialFormData);
                } else {
                    setSuccess('');
                    setError(data.error);
                }
            })
            .catch(error => {
                setSuccess('');
                setError("An unexpected error occurred");
                console.error("Fetch error:", error);
            }).finally(() => setLoading(false));
    }

    return (
        (<div
            className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <Card className="w-full max-w-md">
                <Formheader title={title} description={description} />
                <CardContent>
                    <Signupform handleSignUp={handleSignUp} formData={formData} handleChange={handleChange} error={error} success={success} loading={loading} />
                </CardContent>
                <Formfooter page={'signup'} />
            </Card>
        </div>)
    );
}

export default Signup;