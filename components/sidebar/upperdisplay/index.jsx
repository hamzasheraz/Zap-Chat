import Profile from "./profile"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from 'lucide-react'
import { ThemeContext } from '@/theme'
import { useContext } from 'react'

const Upperdisplay = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className="p-4 flex items-center justify-between">
            <Profile />
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
        </div>
    )
}

export default Upperdisplay