import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Submitbutton from "../submitbutton"

const Passwordform = ({ handleSubmit, user, isLoading, error,setUser }) => {
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <Input
                    id="newPassword"
                    type="password"
                    autoComplete="password"
                    value={user.newPassword}
                    onChange={(e) => setUser({ ...user, newPassword: e.target.value })}
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
                    onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                    required
                />
            </div>
            <Submitbutton error={error} message='Change Password' loading={isLoading} />
        </form>
    )
}

export default Passwordform;