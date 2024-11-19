import { Alert, AlertDescription } from "@/components/ui/alert"
import { useSelector } from "react-redux";

const Success = () => {
    const  success  = useSelector((state) => state.user.success);
    return (
        <>
            {success && (
                <Alert
                    variant="default"
                    className="bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-100">
                    <AlertDescription>{success}</AlertDescription>
                </Alert>
            )}
        </>
    )
}

export default Success;