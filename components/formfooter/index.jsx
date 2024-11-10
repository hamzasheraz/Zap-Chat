import { CardFooter } from "@/components/ui/card"

const Formfooter = ({ page }) => {
    return (
        <CardFooter>
            {page === 'login' ? (
                <>
                    Don&apos;t have an account?{' '}
                    <a href="#" className="font-medium text-primary hover:underline">
                        Sign up
                    </a>
                </>
            ) : (
                <>
                    Already have an account?{' '}
                    <a href="#" className="font-medium text-primary hover:underline">
                        Log in
                    </a>
                </>
            )}
        </CardFooter>
    )
}

export default Formfooter;