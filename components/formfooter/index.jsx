import { CardFooter } from "@/components/ui/card"

const Formfooter = ({ page }) => {
    return (
        <CardFooter>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 w-full">
                {page === 'login' ? (
                    <>
                        Don&apos;t have an account?{' '}
                        <a href="#" className="font-medium text-primary hover:underline">
                            Sign up
                        </a>
                    </>
                ) : page === 'signup' ? (
                    <>
                        Already have an account?{' '}
                        <a href="#" className="font-medium text-primary hover:underline">
                            Log in
                        </a>
                    </>
                ) : (
                    <>
                        Need help?{' '}
                        <a href="#" className="font-medium text-primary hover:underline">
                            Contact support
                        </a>
                    </>
                )}
            </p>
        </CardFooter>
    )
}

export default Formfooter;