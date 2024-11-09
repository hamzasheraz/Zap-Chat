import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react'

const Searchbar = () => {
    return (
        <div className="px-4 py-2">
            <div className="relative">
                <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18} />
                <Input className="pl-10" placeholder="Search contacts..." />
            </div>
        </div>
    )
}

export default Searchbar;