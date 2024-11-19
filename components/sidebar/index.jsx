import Searchbar from '@/components/sidebar/searchbar'
import Options from './options'
import Upperdisplay from './upperdisplay'
import ContactList from './contactlist'

const Sidebar = ({ isSidebarOpen, setSelectedContact, setIsSidebarOpen, setIsNewContactModalOpen }) => {
    return (
        <div
            className={`w-full sm:w-80 bg-gray-100 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col ${isSidebarOpen ? 'block' : 'hidden sm:block'}`}>
            {/* User info and dark mode toggle */}
            <Upperdisplay />

            {/* Search bar */}
            <Searchbar />

            {/* Contacts list */}
            <ContactList setSelectedContact={setSelectedContact} setIsSidebarOpen={setIsSidebarOpen} />

            {/* New contact and settings buttons */}
            <Options setIsNewContactModalOpen={setIsNewContactModalOpen} />
        </div>
    )
}

export default Sidebar;