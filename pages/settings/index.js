import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card"
import Formfooter from '@/components/formfooter'
import Settingheader from '@/components/settingheader'
import Settingform from '@/components/settingform'
import { useRouter } from 'next/router'
import Logout from '@/components/logout'
import { useDispatch } from 'react-redux'
import { updateUserDetails, resetState, logoutUser } from '@/redux/slices/UserSlice'

const Settings = () => {
    const [updateUser, setUser] = useState({
        firstName: '',
        lastName: '',
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        profilePicture: '',
    })

    const [loading2, setLoading2] = useState(false);
    const router = useRouter()
    const dispatch = useDispatch()

    const handleSaveChanges = (e) => {
        e.preventDefault()

        const updatedFields = {};
        Object.keys(updateUser).forEach((key) => {
            if (updateUser[key]) {
                updatedFields[key] = updateUser[key];
            }
        });

        dispatch(updateUserDetails(updatedFields)).unwrap().then(() => {
            setUser({
                firstName: '',
                lastName: '',
                currentPassword: '',
                newPassword: '',
                confirmPassword: '',
                profilePicture: '',
            }
            );
        }).catch((err) => {
            console.error("Update failed:", err);
        });
    }

    const handleProfilePictureChange = (e) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                updateUser({ ...updateUser, profilePicture: reader.result })
            }
            reader.readAsDataURL(file)
        }
    }

    const handleLogout = async (e) => {
        e.preventDefault();
        setLoading2(true);
        const result = await dispatch(logoutUser());

        if (logoutUser.fulfilled.match(result)) {
            router.push("/login");
            dispatch(resetState());
        }
        setLoading2(false);
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
                    <Settingform handleSaveChanges={handleSaveChanges} user={updateUser} setUser={setUser} handleProfilePictureChange={handleProfilePictureChange} />
                    <Logout handleLogout={handleLogout} loading={loading2} />
                </CardContent>
                <Formfooter page={'settings'} />
            </Card>
        </div>
    );
}

export default Settings;