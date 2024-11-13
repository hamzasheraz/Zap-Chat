import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Notify from "@/components/notify"
import Submitbutton from "../submitbutton"

const Passwordform = ({ handleSubmit, user,isLoading,error }) => {
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input
                    id="newPassword"
                    type="password"
                    autoComplete="password"
                    value={user.newPassword}
                    onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
                    required
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input
                    id="confirmPassword"
                    type="password"
                    autoComplete='password'
                    value={user.confirmPassword}
                    onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })}
                    required
                />
            </div>
            <Submitbutton error={error} message='Change Password' loading={isLoading}/>
        </form>
    )
}

export default Passwordform;