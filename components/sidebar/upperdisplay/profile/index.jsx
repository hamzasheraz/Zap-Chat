import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Profile = () => {
    return (
        <div className="flex items-center space-x-3">
            <Avatar>
                <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                <AvatarFallback>UN</AvatarFallback>
            </Avatar>
            <span className="font-semibold text-gray-800 dark:text-gray-200">Username</span>
        </div>
    )
}

export default Profile