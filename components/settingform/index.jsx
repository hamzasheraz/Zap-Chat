import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AlertCircle, Upload } from 'lucide-react'
import Error from "../error"

const Settingform = ({ handleSaveChanges, profilePicture, handleProfilePictureChange, firstName, lastName, setFirstName, newPassword, confirmPassword, setCurrentPassword, setConfirmPassword, error, success }) => {
    return (
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
            <Error error={error} />
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
    )
}

export default Settingform;