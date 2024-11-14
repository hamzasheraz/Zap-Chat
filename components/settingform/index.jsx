import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Upload } from 'lucide-react'
import Success from "../success"
import Submitbutton from "../submitbutton"

const Settingform = ({ handleSaveChanges, user, setUser, handleProfilePictureChange, error, success, loading }) => {
    return (
        <form onSubmit={handleSaveChanges} className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-24 w-24">
                    <AvatarImage src={user.profilePicture} alt="Profile picture" />
                    <AvatarFallback>
                        {user.firstName[0]}
                        {user.lastName[0]}
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
                        value={user.firstName}
                        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                        autoComplete="first-name"
                        required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                        id="lastName"
                        value={user.lastName}
                        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                        autoComplete="last-name"
                        required />
                </div>
            </div>
            <div className="space-y-2">
                <Label htmlFor="currentPassword">Current Password</Label>
                <Input
                    id="currentPassword"
                    type="password"
                    value={user.currentPassword}
                    autoComplete="current-password"
                    onChange={(e) => setUser({ ...user, currentPassword: e.target.value })} />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input
                        id="newPassword"
                        type="password"
                        value={user.newPassword}
                        autoComplete="new-password"
                        onChange={(e) => setUser({ ...user, newPassword: e.target.value })} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input
                        id="confirmPassword"
                        type="password"
                        value={user.confirmPassword}
                        autoComplete="new-password"
                        onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })} />
                </div>
            </div>
            <Success success={success} />
            <Submitbutton error={error} loading={loading} message="Save Changes" />
        </form>
    )
}

export default Settingform;