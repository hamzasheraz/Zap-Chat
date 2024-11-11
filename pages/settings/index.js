import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import Formfooter from '@/components/formfooter'
import Settingheader from '@/components/settingheader'
import Settingform from '@/components/settingform'
import { useRouter } from 'next/router'
import Logout from '@/components/logout'
// import { useAuth } from '@/context/auth-context' // Assuming i  have an auth context
// const { logout } = useAuth()

const Settings = () => {
    const [firstName, setFirstName] = useState('John')
    const [lastName, setLastName] = useState('Doe')
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [profilePicture, setProfilePicture] = useState('/placeholder-avatar.jpg')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const router = useRouter()

    const handleSaveChanges = (e) => {
        e.preventDefault()
        setError('')
        setSuccess('')

        // Validate inputs
        if (!firstName || !lastName) {
            setError('First name and last name are required.')
            return
        }

        if (newPassword && newPassword !== confirmPassword) {
            setError('New passwords do not match.')
            return
        }

        // Here you would typically handle the actual update logic
        console.log('Saving changes:', { firstName, lastName, newPassword, profilePicture })
        setSuccess('Changes saved successfully!')
    }

    const handleProfilePictureChange = (e) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setProfilePicture(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleLogout = async () => {
        try {
            await logout() // This would clear tokens, notify the backend, etc.
            router.push('/login') // Redirect to login page
        } catch (error) {
            console.error('Logout failed', error)
            // Handle error (e.g., show an error message to the user)
        }
    }

    return (
        (<div
            className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
            <Card className="max-w-2xl mx-auto">
                <CardHeader>
                    <Settingheader />
                    <CardDescription>Update your profile and account settings</CardDescription>
                </CardHeader>
                <CardContent>
                    <Settingform handleSaveChanges={handleSaveChanges} profilePicture={profilePicture} handleProfilePictureChange={handleProfilePictureChange} firstName={firstName} lastName={lastName} setFirstName={setFirstName} setLastName={setLastName} newPassword={newPassword} confirmPassword={confirmPassword} setCurrentPassword={setCurrentPassword} setConfirmPassword={setConfirmPassword} currentPassword={currentPassword} setNewPassword={setNewPassword} error={error} success={success} />
                    <Logout handleLogout={handleLogout} />
                </CardContent>
                <Formfooter page={'settings'} />
            </Card>
        </div>)
    );
}

export default Settings;