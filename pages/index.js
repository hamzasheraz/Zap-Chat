import { useState, useContext } from 'react'
import { TooltipProvider } from "@/components/ui/tooltip"
import Sidebar from '@/components/sidebar'
import Chatarea from '@/components/chatarea'
import Newcontact from '@/components/sidebar/newcontact'
import Tasklist from '@/components/chatarea/chatheader/tasklist'
import { ThemeContext } from "@/theme"
import { set } from 'mongoose'

export default function Home() {
  const { theme } = useContext(ThemeContext);
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
  const [newTask, setNewTask] = useState('');
  const [sucess, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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
  ];

  const [personToAdd, setPersonToAdd] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });

  const handleAddNewContact = (event) => {
    event.preventDefault();
    setLoading(true);
    if (!personToAdd.name || !personToAdd.email || !personToAdd.phoneNumber) {
      setLoading(false);
      setError('Please fill in all fields');
      return;
    }
    fetch('api/addcontact', {
      method: 'POST',
      body: JSON.stringify({ personToAdd }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(async (res) => {
        const data = await res.json()
        if (res.ok) {
          setError('')
          setSuccess(data.message);
          setPersonToAdd({ name: '', email: '', phoneNumber: '' })
        }
        else {
          setError(data.error)
          setSuccess('')
        }
      }).catch((error) => {
        setError(error.message)
      }).finally(() => { setLoading(false) })
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
        className={`h-screen flex flex-col sm:flex-row ${theme === 'dark' ? 'dark' : ''}`}>
        {/* Sidebar */}
        <Sidebar isSidebarOpen={isSidebarOpen} contacts={contacts} setSelectedContact={setSelectedContact} setIsSidebarOpen={setIsSidebarOpen} setIsNewContactModalOpen={setIsNewContactModalOpen} />

        {/* Main chat area */}
        <Chatarea selectedContact={selectedContact} toggleSidebar={toggleSidebar} toggleTaskList={toggleTaskList} toggleRecording={toggleRecording} isRecording={isRecording} />

        {/* New Contact Modal */}
        <Newcontact personToAdd={personToAdd} setPersonToAdd={setPersonToAdd} isNewContactModalOpen={isNewContactModalOpen} setIsNewContactModalOpen={setIsNewContactModalOpen} handleAddNewContact={handleAddNewContact} sucess={sucess} error={error} loading={loading} />
        {/* Collaborative Task List */}
        <Tasklist tasks={tasks} isTaskListOpen={isTaskListOpen} toggleTaskList={toggleTaskList} toggleTask={toggleTask} newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
      </div>
    </TooltipProvider>)
  );
}