import { useState, useContext,useEffect } from 'react'
import { TooltipProvider } from "@/components/ui/tooltip"
import Sidebar from '@/components/sidebar'
import Chatarea from '@/components/chatarea'
import Newcontact from '@/components/sidebar/newcontact'
import Tasklist from '@/components/chatarea/chatheader/tasklist'
import { ThemeContext } from "@/theme"
import { useDispatch, useSelector } from 'react-redux'
import { addContact } from '@/redux/slices/UserSlice'

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
  const dispatch = useDispatch();

  const contacts = [
    { id: 1, name: 'Alice', lastMessage: 'See you tomorrow!', time: '10:30 PM', avatar: '/placeholder-avatar-1.jpg' },
    { id: 2, name: 'Bob', lastMessage: 'How about lunch?', time: '9:45 PM', avatar: '/placeholder-avatar-2.jpg' },
    { id: 3, name: 'Charlie', lastMessage: 'The meeting went well', time: '7:20 PM', avatar: '/placeholder-avatar-3.jpg' },
    { id: 4, name: 'David', lastMessage: 'Can you send the files?', time: '6:55 PM', avatar: '/placeholder-avatar-4.jpg' },
    { id: 5, name: 'Eve', lastMessage: 'Thanks for your help!', time: '5:30 PM', avatar: '/placeholder-avatar-5.jpg' },
  ];

  const [personToAdd, setPersonToAdd] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });

  const handleAddNewContact = (event) => {
    event.preventDefault();
    dispatch(addContact(personToAdd))
      .unwrap()
      .then(() => {
        setPersonToAdd({ name: '', email: '', phoneNumber: '' });
      })
      .catch((err) => {
        console.error("Add contact failed:", err);
      });
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

  useEffect(() => {
    
},[]);

  return (
    (<TooltipProvider>
      <div
        className={`h-screen flex flex-col sm:flex-row ${theme === 'dark' ? 'dark' : ''}`}>
        {/* Sidebar */}
        <Sidebar isSidebarOpen={isSidebarOpen} contacts={contacts} setSelectedContact={setSelectedContact} setIsSidebarOpen={setIsSidebarOpen} setIsNewContactModalOpen={setIsNewContactModalOpen} />

        {/* Main chat area */}
        <Chatarea selectedContact={selectedContact} toggleSidebar={toggleSidebar} toggleTaskList={toggleTaskList} toggleRecording={toggleRecording} isRecording={isRecording} />

        {/* New Contact Modal */}
        <Newcontact personToAdd={personToAdd} setPersonToAdd={setPersonToAdd} isNewContactModalOpen={isNewContactModalOpen} setIsNewContactModalOpen={setIsNewContactModalOpen} handleAddNewContact={handleAddNewContact} />
        {/* Collaborative Task List */}
        <Tasklist tasks={tasks} isTaskListOpen={isTaskListOpen} toggleTaskList={toggleTaskList} toggleTask={toggleTask} newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
      </div>
    </TooltipProvider>)
  );
}