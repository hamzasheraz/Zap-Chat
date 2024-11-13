import Error from "../error"
import { Button } from "@/components/ui/button"
import { Loader2 } from 'lucide-react'

const Submitbutton = ({ error, message, loading }) => {
    return (
        <>
            <Error error={error} />
            <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {message === "Sign Up" ? "Signing up..." : message === "Login" ? "Logging in..." : message === 'Send Reset Link' ? 'Sending Reset Link...' : "Saving changes..."}
                    </>
                ) : (
                    message
                )}
            </Button>
        </>
    )
}

export default Submitbutton;