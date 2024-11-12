import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Success from "../success";
import Submitbutton from "../submitbutton";

const Signupform = ({ handleSignUp, formData, handleChange, error, success, loading }) => {
    return (
        <form onSubmit={handleSignUp}>
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="m@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <Input
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            value={formData.firstName}
                            onChange={handleChange}
                            required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={formData.lastName}
                            onChange={handleChange}
                            required />
                    </div>
                </div>
                <Success success={success} />
                <Submitbutton error={error} loading={loading} message="Sign Up" />
            </div>
        </form>
    )
}

export default Signupform;