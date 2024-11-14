import { CardFooter } from "@/components/ui/card"
import Link from "next/link";

const Formfooter = ({ page }) => {
    return (
        <CardFooter>
            <div className="text-center text-sm text-gray-600 dark:text-gray-400 w-full">
                {page === 'login' ? (
                        <>
                            Don&apos;t have an account?{' '}
                            <Link href='/signup' className="font-medium text-primary hover:underline">
                                Sign up
                            </Link>
                        <p>
                            <Link href='/forgotpassword' className="font-medium text-primary hover:underline">
                                Forgot password?
                            </Link>
                        </p>
                        </>
                ) : page === 'signup' ? (
                    <>
                        Already have an account?{' '}
                        <Link href='/login' className="font-medium text-primary hover:underline">
                            Log in
                        </Link>
                    </>
                ) : (
                    <>
                        Need help?{' '}
                        <Link href="#" className="font-medium text-primary hover:underline">
                            Contact support
                        </Link>
                    </>
                )}
            </div>
        </CardFooter>
    )
}

export default Formfooter;