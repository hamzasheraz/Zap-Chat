import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Submitbutton from "../submitbutton"

const Loginform = ({ handleLogin, email, setEmail, password, setPassword }) => {
    return (
        <form onSubmit={handleLogin}>
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        value={email}
                        autoComplete="email"
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                </div>
                <Submitbutton message="Login" />
            </div>
        </form>
    )
}

export default Loginform;