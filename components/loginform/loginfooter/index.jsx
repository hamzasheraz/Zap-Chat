import { CardFooter } from "@/components/ui/card"

const Loginfooter = () => {
    return (
        <CardFooter>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 w-full">
                Don&apos;t have an account?{' '}
                <a href="#" className="font-medium text-primary hover:underline">
                    Sign up
                </a>
            </p>
        </CardFooter>
    )
}

export default Loginfooter