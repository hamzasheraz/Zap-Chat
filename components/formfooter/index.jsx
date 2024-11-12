import { CardFooter } from "@/components/ui/card"
import Link from "next/link";

const Formfooter = ({ page }) => {
    return (
        <CardFooter>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 w-full">
                {page === 'login' ? (
                    <>
                        Don&apos;t have an account?{' '}
                        <Link href='/signup' className="font-medium text-primary hover:underline">
                            Sign up
                        </Link>
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
            </p>
        </CardFooter>
    )
}

export default Formfooter;