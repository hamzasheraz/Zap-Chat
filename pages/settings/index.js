import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Zap, AlertCircle, ArrowLeft, Upload } from 'lucide-react'
import Formfooter from '@/components/formfooter'
import Settingheader from '@/components/settingheader'

const Settings = () => {
    const [firstName, setFirstName] = useState('John')
    const [lastName, setLastName] = useState('Doe')
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [profilePicture, setProfilePicture] = useState('/placeholder-avatar.jpg')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
  
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
  
    return (
      (<div
        className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <Settingheader/>
            <CardDescription>Update your profile and account settings</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSaveChanges} className="space-y-6">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src={profilePicture} alt="Profile picture" />
                  <AvatarFallback>
                    {firstName[0]}
                    {lastName[0]}
                  </AvatarFallback>
                </Avatar>
                <div className="flex items-center">
                  <Input
                    id="picture"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleProfilePictureChange} />
                  <Label htmlFor="picture" className="cursor-pointer">
                    <div
                      className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
                      <Upload className="h-4 w-4" />
                      <span>Change profile picture</span>
                    </div>
                  </Label>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input
                  id="currentPassword"
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)} />
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input
                    id="newPassword"
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
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
              <Button type="submit" className="w-full">
                Save Changes
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <Formfooter page={'settings'} />
          </CardFooter>
        </Card>
      </div>)
    );
  }

export default Settings;