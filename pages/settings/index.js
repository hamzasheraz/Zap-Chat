import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import Formfooter from '@/components/formfooter'
import Settingheader from '@/components/settingheader'
import Settingform from '@/components/settingform'
import { useRouter } from 'next/router'
import Logout from '@/components/logout'

const Settings = () => {
    const [user, setUser] = useState({
        firstName: 'John',
        lastName: 'Doe',
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        profilePicture: '',
    })
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const router = useRouter()

    const handleSaveChanges = (e) => {
        e.preventDefault()
        setError('')
        setSuccess('')
        setLoading2(true);

        if (user.newPassword && user.newPassword !== user.confirmPassword) {
            setError('New passwords do not match.')
            setLoading2(false);
            return
        }

        const updatedFields = {};
        Object.keys(user).forEach((key) => {
            if (user[key]) {
                updatedFields[key] = user[key];
            }
        });

        fetch('/api/settings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ updatedFields }),
        }).then(async (res) => {
            const data = await res.json()
            if (res.ok) {
                setError('')
                setSuccess(data.message);
            }
            else {
                setError(data.error)
                setSuccess('')
            }
        }).catch((error) => {
            setError(error.message)
        }).finally(() => { setLoading2(false) })

        // console.log('Saving changes:', { firstName, lastName, newPassword, profilePicture })
        // setSuccess('Changes saved successfully!')
    }

    const handleProfilePictureChange = (e) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setUser({ ...user, profilePicture: reader.result })
            }
            reader.readAsDataURL(file)
        }
    }

    const handleLogout = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/logout');
            if (response.ok) {
                router.push('/login');
            } else {
                console.error("Logout failed.");
            }
        } catch (error) {
            console.error("Error during logout:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
            <Card className="max-w-2xl mx-auto">
                <CardHeader>
                    <Settingheader />
                    <CardDescription>Update your profile and account settings</CardDescription>
                </CardHeader>
                <CardContent>
                    <Settingform handleSaveChanges={handleSaveChanges} user={user} setUser={setUser} handleProfilePictureChange={handleProfilePictureChange} error={error} success={success} loading={loading2} />
                    <Logout handleLogout={handleLogout} loading={loading} />
                </CardContent>
                <Formfooter page={'settings'} />
            </Card>
        </div>
    );
}

export default Settings;