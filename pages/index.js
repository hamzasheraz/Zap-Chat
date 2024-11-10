import { useState } from 'react'
import { Moon, Sun, Search, Phone, Video, MoreVertical, Send, Paperclip, Smile, UserPlus, Settings, Mic, X, CheckSquare, PlusCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Checkbox } from "@/components/ui/checkbox"
import Sidebar from '@/components/sidebar'
import Chatarea from '@/components/chatarea'
import Newcontact from '@/components/sidebar/newcontact'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [selectedContact, setSelectedContact] = useState(null)
  const [isNewContactModalOpen, setIsNewContactModalOpen] = useState(false)
  const [isRecording, setIsRecording] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isTaskListOpen, setIsTaskListOpen] = useState(false)
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Plan team meeting', completed: false },
    { id: 2, text: 'Review project proposal', completed: true },
    { id: 3, text: 'Send weekly report', completed: false },
  ])
  const [newTask, setNewTask] = useState('')

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  const contacts = [
    { id: 1, name: 'Alice', lastMessage: 'See you tomorrow!', time: '10:30 PM', avatar: '/placeholder-avatar-1.jpg' },
    { id: 2, name: 'Bob', lastMessage: 'How about lunch?', time: '9:45 PM', avatar: '/placeholder-avatar-2.jpg' },
    { id: 3, name: 'Charlie', lastMessage: 'The meeting went well', time: '7:20 PM', avatar: '/placeholder-avatar-3.jpg' },
    { id: 4, name: 'David', lastMessage: 'Can you send the files?', time: '6:55 PM', avatar: '/placeholder-avatar-4.jpg' },
    { id: 5, name: 'Eve', lastMessage: 'Thanks for your help!', time: '5:30 PM', avatar: '/placeholder-avatar-5.jpg' },
    // { id: 6, name: 'Frank', lastMessage: 'Let\'s catch up soon', time: '4:15 PM', avatar: '/placeholder-avatar-6.jpg' },
    // { id: 7, name: 'Grace', lastMessage: 'Project update?', time: '3:00 PM', avatar: '/placeholder-avatar-7.jpg' },
    // { id: 8, name: 'Henry', lastMessage: 'Great idea!', time: '1:45 PM', avatar: '/placeholder-avatar-8.jpg' },
    // { id: 9, name: 'Ivy', lastMessage: 'See you at the meeting', time: '12:30 PM', avatar: '/placeholder-avatar-9.jpg' },
    // { id: 10, name: 'Jack', lastMessage: 'Thanks for your help', time: '11:15 AM', avatar: '/placeholder-avatar-10.jpg' },
  ]

  const handleAddNewContact = (event) => {
    event.preventDefault()
    console.log('New contact added')
    setIsNewContactModalOpen(false)
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const toggleTaskList = () => {
    setIsTaskListOpen(!isTaskListOpen)
  }

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: tasks.length + 1, text: newTask, completed: false }])
      setNewTask('')
    }
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task))
  }

  return (
    (<TooltipProvider>
      <div
        className={`h-screen flex flex-col sm:flex-row ${darkMode ? 'dark' : ''}`}>
        {/* Sidebar */}
        <Sidebar isSidebarOpen={isSidebarOpen} toggleDarkMode={toggleDarkMode} darkMode={darkMode} contacts={contacts} setSelectedContact={setSelectedContact} setIsSidebarOpen={setIsSidebarOpen} setIsNewContactModalOpen={setIsNewContactModalOpen} />

        {/* Main chat area */}
        <Chatarea selectedContact={selectedContact} toggleSidebar={toggleSidebar} toggleTaskList={toggleTaskList} toggleRecording={toggleRecording} isRecording={isRecording} />

        {/* New Contact Modal */}
        <Newcontact isNewContactModalOpen={isNewContactModalOpen} setIsNewContactModalOpen={setIsNewContactModalOpen} handleAddNewContact={handleAddNewContact} />
        {/* Collaborative Task List */}
        {isTaskListOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg w-full max-w-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">Collaborative Task List</h2>
                <Button variant="ghost" size="icon" onClick={toggleTaskList}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="space-y-2">
                {tasks.map((task) => (
                  <div key={task.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`task-${task.id}`}
                      checked={task.completed}
                      onCheckedChange={() => toggleTask(task.id)} />
                    <label
                      htmlFor={`task-${task.id}`}
                      className={`flex-grow text-sm ${task.completed ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-700 dark:text-gray-300'
                        }`}>
                      {task.text}
                    </label>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex space-x-2">
                <Input
                  placeholder="Add a new task"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && addTask()} />
                <Button onClick={addTask}>
                  <PlusCircle className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </TooltipProvider>)
  );
}