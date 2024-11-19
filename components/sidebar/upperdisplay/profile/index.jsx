import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useSelector } from "react-redux"

const Profile = () => {
    const user = useSelector((state) => state.user.data);
    return (
        <div className="flex items-center space-x-3">
            <Avatar>
                <AvatarImage src={user?.profilePicture} alt="User" />
                <AvatarFallback>{user?.firstName[0]}{user?.lastName[0]}</AvatarFallback>
            </Avatar>
            <span className="font-semibold text-gray-800 dark:text-gray-200">{user?.firstName} {user?.lastName}</span>
        </div>
    )
}

export default Profile