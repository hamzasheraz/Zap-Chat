import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import Error from "../error"

const Loginform = ({ handleLogin, email, setEmail, password, setPassword, error }) => {
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
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                </div>
                <Error error={error} />
                <Button type="submit" className="w-full">
                    Login
                </Button>
            </div>
        </form>
    )
}

export default Loginform;