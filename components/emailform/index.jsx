import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Success from "../success"
import Submitbutton from "../submitbutton"


const Emailform = ({ handleSubmit, email, setEmail, error, success, isLoading }) => {
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />
            </div>
            <Success success={success}/>
            <Submitbutton error={error} message="Send Reset Link" loading={isLoading}/>
        </form>
    )
}

export default Emailform;