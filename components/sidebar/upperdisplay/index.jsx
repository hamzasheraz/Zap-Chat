import Profile from "./profile"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from 'lucide-react'

const Upperdisplay = ({ darkMode, toggleDarkMode }) => {
    return (
        <div className="p-4 flex items-center justify-between">
            <Profile />
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
        </div>
    )
}

export default Upperdisplay